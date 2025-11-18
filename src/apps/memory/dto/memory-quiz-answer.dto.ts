import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MemoryQuizAnswerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'a',
    description: 'Letra del alfabeto que es la respuesta.',
  })
  answer: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'https://example.com/image1.png',
    description: 'URL de la primera imagen.',
  })
  imgUnoUrl: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'https://example.com/image2.png',
    description: 'URL de la segunda imagen.',
  })
  imgDosUrl: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'https://example.com/image3.png',
    description: 'URL de la tercera imagen.',
  })
  imgTresUrl: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'https://example.com/image4.png',
    description: 'URL de la cuarta imagen.',
  })
  imgCuatroUrl: String;
}
