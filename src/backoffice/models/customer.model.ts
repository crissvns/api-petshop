import { CreditCard } from './creditcard.model';
import { Address } from './address.model';
import { Pet } from "./pet.model";

export class Customer {
    constructor(
        public name: string,
        public document: string,
        public email: string,
        public pets: Pet[],
        public billingAddress: Address,
        public shippingAddress: Address,
        public creditCard: CreditCard,
        public password: string,
        public active: boolean,
    ) { }
}