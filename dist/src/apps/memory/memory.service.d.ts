import { PrismaService } from 'src/config/prisma/prisma.service';
import { MemoryQuizAnswerDto } from './dto/memory-quiz-answer.dto';
export declare class MemoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllMemoryQuiz(): Promise<MemoryQuizAnswerDto[]>;
    getRandomQuiz(): Promise<MemoryQuizAnswerDto>;
}
