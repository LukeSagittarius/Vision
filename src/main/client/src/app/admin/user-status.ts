export class UserStatus {
    private _id: number;
    private _status: string;
    
    get id(): number {
        return this._id;
    }

    get status(): string {
        return this._status;
    }

    set id(value: number) {
        this._id = value;
    }

    set status(value: string) {
        this._status = value;
    }
}
