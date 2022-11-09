import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { VariaveisBiologicasService } from './variaveis-biologicas.service';
import { VariaveisBiologicasController } from './variaveis-biologicas.controller';
import { variaveisProviders } from './variaveis-biologicas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [VariaveisBiologicasController],
  providers: [VariaveisBiologicasService, ...variaveisProviders],
})
export class VariaveisBiologicasModule {}
