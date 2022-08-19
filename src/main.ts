import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 7000;
  const app = await NestFactory.create(AppModule, { cors: true });

  //swagger start
  const config = new DocumentBuilder()
    .setTitle('Shop API')
    .setDescription('Docs for shop API')
    .setVersion('1.0.0')
    .addTag('bSalenik')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  //swagger end

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  console.log(`APP STARTED ON PORT ${PORT}`);
}
start();
