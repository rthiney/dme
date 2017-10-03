export class AccountSessionManager {
    public static getAccountID(): string {
        let result = sessionStorage.getItem('AccountID');
        return result;
    }

    public static setAccountID(id: string): void {
        sessionStorage.setItem('AccountID', id);
    }

    public static clearAll() {
        sessionStorage.removeItem('AccountID');
    }
}
