import { Employee } from "./Employee.js"

export class Director extends Employee {
    constructor(name, income, cpf) {
        super(name, income, cpf);

        this._bonus = 2;
    }
}