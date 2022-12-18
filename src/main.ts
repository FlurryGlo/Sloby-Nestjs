import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const { PORT, COOKIE_SECRET } = process.env;
  const prisma = new PrismaClient();
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://localhost:3000'], credentials: true });
  app.setGlobalPrefix('api');
  app.use(
    session({
      name: 'SLOBY_BUILDER_SESSION_ID',
      secret: COOKIE_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 86400000, // cookie expires 1 day later
      },
      store: new PrismaSessionStore(new PrismaClient(), {}),
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen(PORT, () => {
      console.log(`Running on Port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
