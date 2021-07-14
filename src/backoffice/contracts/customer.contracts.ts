import { Customer } from '../models/customer.model';
import { Contract } from './contract';
import { Flunt } from 'src/utils/flunt';

export class CreateCustomerContract implements Contract {
    errors: any[];

    validate(model: Customer): boolean {
        const flunt = new Flunt(this.errors);

        flunt.hasMinLen(model.name, 5, 'Nome inválido');
        flunt.isEmail(model.email, 'Email inválido');
        flunt.isFixedLen(model.document, 11, 'CPF inválido');
        flunt.hasMinLen(model.password, 6, 'Senha inválida');

        return flunt.isValid();
    }
}