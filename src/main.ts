import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'
import { Logger } from '@nestjs/common'
import helmet from 'helmet'
import { nestCsrf } from 'ncsrf'
import * as cookieParser from 'cookie-parser'
import { TypeormStore } from 'connect-typeorm'
import { DataSource } from 'typeorm'
import { Session } from './database/entity/session.entity'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { WsAdapter } from '@nestjs/platform-ws'
import { createProxyMiddleware } from 'http-proxy-middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // websocket proxy
  if (typeof process.env.LOCAL_PROXY !== 'undefined') {
    const wsAdapter = new WsAdapter(app)
    app.use(
      createProxyMiddleware({
        target: process.env.LOCAL_PROXY, // Target URL to proxy to
        changeOrigin: true,
        ws: true,
      }),
    )

    app.useWebSocketAdapter(wsAdapter)
  }

  const logger = new Logger('bootstrap')
  logger.debug(`NODE_ENV: ${process?.env?.NODE_ENV}`)

  const sessionRepo = app.get(DataSource).getRepository(Session)

  // security -csp
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          'script-src': [
            `'self'`,
            `https: 'unsafe-eval'`,
            /*
            `unpkg.com`,
            `cdnjs.cloudflare.com`,
            `vjs.zencdn.net`,
            */
          ],
          'worker-src': [`blob:`],
          'connect-src': [`'self'`, `blob:`],
          // 'require-trusted-types-for': [`'script'`],
        },
      },
    }),
  )

  // security - csrf
  app.use(cookieParser())
  app.use(
    nestCsrf({
      ttl: process.env.CSRF_TTL
        ? parseInt(process.env.CSRF_TTL, 10)
        : 2 * 60 * 60,
    }),
  )

  // session
  let sessionStore
  try {
    for (const [key, value] of Object.entries(
      app.get(DataSource).getMetadata(Session).columns,
    )) {
      logger.debug(`session metadata - ${key}: ${value.databaseName}`)
    }

    sessionStore = new TypeormStore({
      cleanupLimit: 2,
      limitSubquery: false, // If using MariaDB.
      ttl: process.env.SESSION_TTL
        ? parseInt(process.env.SESSION_TTL, 10)
        : 8 * 60 * 60,
      onError: (store, error) => {
        logger.error(`session store on error: ${error}`)
      },
    }).connect(sessionRepo)
  } catch (error) {
    logger.error(`session store error: ${error}`)
  }

  app.use(
    session({
      secret: process.env.SESSION_SECRET
        ? process.env.SESSION_SECRET
        : 'y0ur_53cr37_k3y',
      resave: false,
      saveUninitialized: false,
      store: sessionStore,
      cookie: { secure: process.env.SESSION_SECURE === 'true' },
    }),
  )

  // swagger
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Backend')
      .setDescription('The API description')
      .setVersion('1.0')
      .addTag('auth')
      .addTag('chord-retrieval-ai')
      .addTag('download')
      .addTag('music-ai-search')
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('docs', app, document)
  }

  // start
  await app.listen(3000)
  Logger.log(
    `Nest application is running on: ${await app.getUrl()}`,
    'NestApplication',
  )
}

bootstrap()
