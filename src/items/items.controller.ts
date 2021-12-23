import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  //Req,
  //Res,
} from '@nestjs/common';
// import { Request, Response } from 'express';
import { CreateItemDto } from './DTO/create/item.DTO';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     console.log(req.url);
  //     return res.send('Hello world');
  //   }
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<void> {
    return this.itemsService.remove(id);
  }
}
