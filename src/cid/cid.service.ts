import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCidDto } from './dto/create-cid.dto';
import { UpdateCidDto } from './dto/update-cid.dto';
import { Cid } from './entities/cid.entity';

@Injectable()
export class CidService {
  constructor(
    @Inject('CID_REPOSITORY')
    private usuarioRepository: Repository<Cid>,
  ) {}
  create(createCidDto: CreateCidDto) {
    return 'This action adds a new cid';
  }

  findAll() {
    return `This action returns all cid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cid`;
  }

  update(id: number, updateCidDto: UpdateCidDto) {
    return `This action updates a #${id} cid`;
  }

  remove(id: number) {
    return `This action removes a #${id} cid`;
  }
}
