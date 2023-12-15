
import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsDate, IsDateString, IsNumber } from 'class-validator';

export class CreateBorrowDto {
  @ApiProperty({
    description: 'This field represents the status',
  })
  @IsNumber()
  public status: number;


  @ApiProperty({
    description: 'This field represents the employee_UUID',
  })
  @IsString()
  public employee_UUID: string;

  @ApiProperty({
    description: 'This field represents the borrower_UUID',
  })
  @IsString()
  public borrower_UUID: string;

}