import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { MemoryQuizAnswerDto } from './dto/memory-quiz-answer.dto';

@Injectable()
export class MemoryService {
  constructor(private prisma: PrismaService) {}

  async getAllMemoryQuiz(): Promise<MemoryQuizAnswerDto[]> {
    return this.prisma.memoryQuiz.findMany();
  }

  async getRandomQuiz(): Promise<MemoryQuizAnswerDto> {
    const quizzes = await this.prisma.memoryQuiz.findMany();
    const randomIndex = Math.floor(Math.random() * quizzes.length);
    return quizzes[randomIndex];
  }
}
