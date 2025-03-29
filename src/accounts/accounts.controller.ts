import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
