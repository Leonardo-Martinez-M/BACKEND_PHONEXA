"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryQuizAnswerDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class MemoryQuizAnswerDto {
    answer;
    imgUnoUrl;
    imgDosUrl;
    imgTresUrl;
    imgCuatroUrl;
}
exports.MemoryQuizAnswerDto = MemoryQuizAnswerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'a',
        description: 'Letra del alfabeto que es la respuesta.',
    }),
    __metadata("design:type", String)
], MemoryQuizAnswerDto.prototype, "answer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/image1.png',
        description: 'URL de la primera imagen.',
    }),
    __metadata("design:type", String)
], MemoryQuizAnswerDto.prototype, "imgUnoUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/image2.png',
        description: 'URL de la segunda imagen.',
    }),
    __metadata("design:type", String)
], MemoryQuizAnswerDto.prototype, "imgDosUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/image3.png',
        description: 'URL de la tercera imagen.',
    }),
    __metadata("design:type", String)
], MemoryQuizAnswerDto.prototype, "imgTresUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/image4.png',
        description: 'URL de la cuarta imagen.',
    }),
    __metadata("design:type", String)
], MemoryQuizAnswerDto.prototype, "imgCuatroUrl", void 0);
//# sourceMappingURL=memory-quiz-answer.dto.js.map