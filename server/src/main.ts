import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: '*'
  })
  app.use(cookieParser())
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())

  const port = process.env.PORT || 3001
  try {
    await app.listen(port)
    console.log(`Server is running on http://localhost:${port}`)
  } catch (error) {
    console.error('Error starting server', error)
    process.exit(1)
  }
}
bootstrap()