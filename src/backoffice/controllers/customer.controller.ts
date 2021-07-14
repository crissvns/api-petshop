import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Customer } from './../models/customer.model';
import { result } from './../models/result.model';

@Controller('v1/customers')
export class CustomerController {
    @Get()
    get() {
        return new result(null, true, [], null);
    }

    @Get(':document')
    getById(@Param('document') document) {
        return new result('Cliente criado com sucesso!', true, {}, null);
    }

    @Post()
    post(@Body() body: Customer) {
        return new result('Cliente criado com sucesso!', true, body, null);
    }

    @Put(':document')
    put(@Param('document') document, @Body() body) {
        return new result('Cliente atualizado com sucesso!', true, body, null);
    }

    @Delete(':document')
    delete(@Param('document') document) {
        return new result('Cliente removido com sucesso!', true, null, null);
    }
}