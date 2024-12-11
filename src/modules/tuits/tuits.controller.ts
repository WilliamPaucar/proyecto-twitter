import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, PaginationQueryDto, UpdateTuitDto } from './dto';

@Controller('tuits')
export class TuitsController {

    constructor(private readonly tuitsService: TuitsService){

    }
    @Get()
    getTuist(@Query() pagination: PaginationQueryDto):Promise<Tuit[]>{
        // const {orderBy, searchTerm}=queryFilter; 
        // return `El producto ${searchTerm} a sido orneado por ${orderBy}`;
        return this.tuitsService.getTuits(pagination);
    }

    @Get(':id')
    getTuis(@Param('id') id:number):Promise<Tuit>{
        return this.tuitsService.getTuit(id);

    }
    @Post()
    createTuit(@Body() message:CreateTuitDto):Promise<Tuit>{
        return this.tuitsService.createTuit(message);
    }

    @Patch(':id')
    updateTuit(@Param('id') id:number, @Body() tuit:UpdateTuitDto): Promise<Tuit> {
        return this.tuitsService.updateTuit(id, tuit);
    }
    
    @Delete(':id')
    deleteTuit(@Param('id') id:number):Promise<void>{
        return this.tuitsService.removeTuit(id);
    }
    

}
