export class UserSessionManager {
    public static getUserSessionKey(): string {
        let result = sessionStorage.getItem('UserSessionKey');
        return result;
    }

    public static setUserSessionKey(key: string): void {
        sessionStorage.setItem('UserSessionKey', key);
    }

    public static getUserSession(): any {
        let data = sessionStorage.getItem('UserSession');
        if (data) {
            return JSON.parse(sessionStorage.getItem('UserSession'))
        }
        return null;
    }

    public static settUserSession(userSession: {any}): void {
        sessionStorage.setItem('UserSession', JSON.stringify(userSession))
    }

    public static clearAll() {
        sessionStorage.removeItem('UserSession');
        sessionStorage.removeItem('UserSessionKey');
    }
}
