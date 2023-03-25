import {Module} from '@nestjs/common';
import {databaseProviders} from './domain/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}
