import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './interface/accounts.interface';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Post('create')
    create(@Body() createAccountDto: CreateAccountDto) : Account {
        return this.accountsService.create(createAccountDto);
    }

    @Get()
    findAll() : Account[] {
        return this.accountsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Account {
        return this.accountsService.findById(Number(id));
    }

    @Put()
    update(@Body() createAccountDto: CreateAccountDto) : Account {
        return this.accountsService.create(createAccountDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) : string {
        return `Delete Account with id ${id}`;
    }
}
