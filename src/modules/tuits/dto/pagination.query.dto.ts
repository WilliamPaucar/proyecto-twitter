import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto{

    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit:number;
    @IsPositive()
    @IsNumber()
    @IsOptional()
    offset:number;
}