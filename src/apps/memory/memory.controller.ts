import { Controller, Get } from '@nestjs/common';
import { MemoryService } from './memory.service';
import { MemoryQuizAnswerDto } from './dto/memory-quiz-answer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Alfabeto Memorama')
@Controller('memory')
export class MemoryController {
  constructor(private readonly memoryService: MemoryService) {}

  //@ApiBearerAuth()
  @ApiOperation({
    summary: 'Obtener todas las tarjetas del memorama.',
    description: 'Requiere autenticación.',
  })
  @Get()
  async getAllMemoryQuiz(): Promise<MemoryQuizAnswerDto[]> {
    return this.memoryService.getAllMemoryQuiz();
  }

  //@ApiBearerAuth()
  @ApiOperation({
    summary: 'Obtener un memorama aleatorio.',
    description: 'Requiere autenticación.',
  })
  @Get('random')
  async getRandomQuiz(): Promise<MemoryQuizAnswerDto> {
    return this.memoryService.getRandomQuiz();
  }
}
