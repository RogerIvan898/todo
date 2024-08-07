import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*'
  })

  const port = process.env.PORT || 3001
  try {
    await app.listen(port);
    console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error('Error starting server', error);
    process.exit(1);
  }
}
bootstrap();
