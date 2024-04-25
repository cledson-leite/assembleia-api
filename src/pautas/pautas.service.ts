import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

type Pauta = {
  descricao: string;
};

type Result = {
  success: any;
  failure: Error;
};

@Injectable()
export class PautasService {
  constructor(
    @Inject('PAUTA_REPOSITORY')
    private readonly repository: Repository<Pauta>,
  ) {}
  async save(pauta: Pauta): Promise<Result> {
    const descricao = pauta.descricao;
    const isExist = await this.repository.findOne({ where: { descricao } });
    if (isExist)
      return {
        success: null,
        failure: new Error('Pauta já existe'),
      };
    const result = await this.repository.save({ descricao });

    return {
      success: result,
      failure: null,
    };
  }
}
