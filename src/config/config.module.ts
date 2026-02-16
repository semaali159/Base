import { Module } from '@nestjs/common';
import { ConfigModule  } from '@nestjs/config';
import appConfig from './app.config';
import databaseConfig from './database.config';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}` || '.env',
      load: [appConfig, databaseConfig],
    }),
  ],
})
export class AppConfigModule {}


