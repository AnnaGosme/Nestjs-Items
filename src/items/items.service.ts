import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './DTO/create/item.DTO';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  create(createItemDto: CreateItemDto): Promise<Item> {
    const item = new Item();
    item.name = createItemDto.name;
    item.qty = createItemDto.qty;
    item.description = createItemDto.description;

    return this.itemRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
