import { Body, Controller, Delete, Get, Patch, Post, Put} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { ParamId } from "src/decorators/param-id.decorator";

//@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {};

    
    @Post()
    async create(@Body() date:CreateUserDTO){
        return this.userService.create(date);
    }

    @Get()
    async list() {
        return this.userService.list();
    }

    @Get(':id')
    async show(@ParamId() id: number){
        console.log({id});
        return this.userService.show(id);
    }

    @Put(':id')
    async update(@Body() data:UpdatePutUserDTO, @ParamId() id){
        return this.userService.update(id, data);

    }

    @Patch(':id')
    async partialUpdate(@Body() data:UpdatePatchUserDTO, @ParamId() id:number){
        return this.userService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@ParamId() id){
        return this.userService.delete(id);
    }



}