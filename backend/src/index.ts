import Fastify from 'fastify';
import { appConfig } from '../config/app.config';

const server = Fastify({
  logger: true,
});

async function main() {
  try {
    const config = appConfig();
    
    await server.listen({
      port: +config.port,
      host: config.host,
    });

    console.log(`Server listening at http://${config.host}:${config.port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();
