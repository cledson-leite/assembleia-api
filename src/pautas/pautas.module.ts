import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { pautaProviders } from './pautas.providers';
import { PautasService } from './pautas.service';
import { PautasController } from './pautas.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...pautaProviders, PautasService],
  controllers: [PautasController],
})
export class PautasModule {}
