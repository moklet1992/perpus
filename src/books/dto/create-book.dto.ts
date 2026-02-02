import { IsInt, isNotEmpty, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsInt()
  @Min(4)
  year: number;

  @IsInt()
  @IsNotEmpty()
  stock: number
}
