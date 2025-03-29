import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Acccount } from './interface/accounts.interface';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Post()
    create(@Body() createAccountDto: CreateAccountDto) : Acccount {
        return this.accountsService.create(createAccountDto);
    }

    @Get()
    findAll() : Acccount[] {
        return this.accountsService.findAll();
    }

    @Put()
    update(@Body() createAccountDto: CreateAccountDto) : Acccount {
        return this.accountsService.create(createAccountDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) : string {
        return `Delete Account with id ${id}`;
    }
}
