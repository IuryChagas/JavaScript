export class AuthenticatorSystem{
    static login(employee, password){
        return employee.password == password;
    }
}