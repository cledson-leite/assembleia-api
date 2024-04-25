import { DataSource, Repository } from 'typeorm';
import { Pauta } from './pautas.entity';
import { Provider } from '@nestjs/common';

const PautaRepository: Provider<Repository<Pauta>> = {
  provide: 'PAUTA_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Pauta),
  inject: ['DATA_SOURCE'],
};

export const pautaProviders: Provider[] = [PautaRepository];
