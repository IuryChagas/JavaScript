export class AuthenticatorSystem{
    static login(authenticable, password){
        if (AuthenticatorSystem.isAuthenticable(authenticable)) {
            return authenticable.authenticator(password);
        }
        return false;
    }
    static isAuthenticable(authenticable){
        return "authenticator" in authenticable && authenticable.authenticator instanceof Function;
    }
}