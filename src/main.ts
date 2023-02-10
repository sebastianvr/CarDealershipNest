import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // solo deja la data que estoy esperando en los Dtos
      whitelist: true,

      // Obliga al cliente enviar solo la data que necesito 
      // lo que significa que las propiedades no permitidas serán rechazadas.
      forbidNonWhitelisted: true
    })
  )
  await app.listen(3000);
}
bootstrap();
