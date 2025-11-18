import { MemoryService } from './memory.service';
import { MemoryQuizAnswerDto } from './dto/memory-quiz-answer.dto';
export declare class MemoryController {
    private readonly memoryService;
    constructor(memoryService: MemoryService);
    getAllMemoryQuiz(): Promise<MemoryQuizAnswerDto[]>;
    getRandomQuiz(): Promise<MemoryQuizAnswerDto>;
}
