export class Device {
    private _id: number;
    private _name: string;
    private _status: string;
    
    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get status(): string {
        return this._status;
    }

    set id(value: number) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set status(value: string) {
        this._status = value;
    }
}
