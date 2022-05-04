import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor(name, income, cpf) {
        super(name, income, cpf);

        this._bonus = 1.1;
    }
}