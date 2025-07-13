import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const DEFAULT_PORT = 3000;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const swaggerConfig = new DocumentBuilder()
		.setTitle("Cool Template API")
		.setDescription("API documentation for the Cool Template project")
		.setVersion("1.0")
		.addTag("api")
		.build();

	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup("api", app, swaggerDocument);

	await app.listen(process.env.PORT ?? DEFAULT_PORT);
}
await bootstrap();
