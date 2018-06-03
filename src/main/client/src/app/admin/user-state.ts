export class UserState {
    private _id: number;
    private _state: string;
    
    get id(): number {
        return this._id;
    }

    get status(): string {
        return this._state;
    }

    set id(value: number) {
        this._id = value;
    }

    set state(value: string) {
        this._state = value;
    }
}
