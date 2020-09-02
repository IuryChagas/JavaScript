export class AuthenticatorSystem{
    static login(authenticable, password){
        return authenticable.authenticator(password);
    }
}