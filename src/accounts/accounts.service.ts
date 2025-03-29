import { Injectable } from '@nestjs/common';
import { Acccount } from './interface/accounts.interface';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
    private readonly account: Acccount[] = [];

    create(createAccountDto : CreateAccountDto) : Acccount {
        const newAccount : Acccount = {
            id: this.account.length + 1,
            name: createAccountDto.name,
            email: createAccountDto.email,
            password: createAccountDto.password,
            createdAt: new Date()
        };
        this.account.push(newAccount);
        return newAccount;
    }

    findAll() : Acccount[] {
        return this.account;
    }
}
