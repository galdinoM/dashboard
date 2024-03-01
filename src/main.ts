import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as path from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config({
    path: path.resolve(__dirname, '../.env'),
  });

  const app = await NestFactory.create(AppModule, { cors: true });
  
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidUnknownValues: false }),
  );

  const PORT = process.env.PORT ?? 3333;

  await app.listen(PORT, '0.0.0.0');

  console.log(`[🤖]: Application is running on: ${await app.getUrl()}`);
}

bootstrap().catch((e) => {
  console.log(e);
});
