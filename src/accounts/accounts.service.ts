import { Injectable } from '@nestjs/common';
import { Account } from './interface/accounts.interface';
import { CreateAccountDto } from './dto/create-account.dto';
import { throwError } from 'rxjs';

@Injectable()
export class AccountsService {
    private readonly account: Account[] = [];

    create(createAccountDto : CreateAccountDto) : Account {
        const newAccount : Account = {
            id: this.account.length + 1,
            name: createAccountDto.name,
            email: createAccountDto.email,
            password: createAccountDto.password,
            createdAt: new Date()
        };
        this.account.push(newAccount);
        return newAccount;
    }

    findAll() : Account[] {
        return this.account;
    }

    findById(id: number) : Account {
        const account = this.account.find(acc => acc.id === id);
        if(!account) {
            throw new Error('Account with ID ${id} not found!')
        }
        return account;
    }

    
}
