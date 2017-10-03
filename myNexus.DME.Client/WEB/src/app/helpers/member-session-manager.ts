export class MemberSessionManager {
    public static getMemberId(): string {
        let result = sessionStorage.getItem('MemberId');
        return result;
    }

    public static setMemberId(id: string): void {
        sessionStorage.setItem('MemberId', id);
    }

    public static clearAll() {
        sessionStorage.removeItem('MemberId');
    }
}
