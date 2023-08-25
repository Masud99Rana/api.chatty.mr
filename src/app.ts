import { config } from '@root/config';
import databaseConnection from '@root/setupDatabase';
import { ChattyServer } from '@root/setupServer';
import express, { Express } from 'express';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.initialize();
