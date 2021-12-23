import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items/item.entity';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'movies',
      entities: [Item],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
