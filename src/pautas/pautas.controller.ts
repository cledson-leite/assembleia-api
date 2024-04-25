import { Body, Controller, Post, Res } from '@nestjs/common';
import { PautasService } from './pautas.service';
import { Response } from 'express';

type Pauta = {
  descricao: string;
};

@Controller('pautas')
export class PautasController {
  constructor(private readonly service: PautasService) {}

  @Post()
  async register(@Body() pauta: Pauta, @Res() response: Response) {
    const result = await this.service.save(pauta);
    if (result.failure) {
      return response.status(409).send({ message: result.failure.message });
    }
    response.status(201).send(result.success);
  }
}
