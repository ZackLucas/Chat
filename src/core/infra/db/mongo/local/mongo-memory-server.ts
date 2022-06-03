import { MongoMemoryServer } from 'mongodb-memory-server';

export class LocalMemory {
  private mongod: MongoMemoryServer;

  static create(): LocalMemory {
    return new LocalMemory();
  }

  async start(): Promise<MongoMemoryServer> {
    this.mongod = await MongoMemoryServer.create({
      instance: { port: Number(process.env.MONGODB_MEMORY_PORT) },
      auth: {
        customRootName: process.env.MONGODB_USERNAME,
        customRootPwd: process.env.MONGODB_PASSWORD,
      },
    });

    return this.mongod;
  }

  async stop() {
    this.mongod.stop();
  }
}
