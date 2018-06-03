export class User {
    private _id: number;
    private _email: string;
    private _password: string;
    private _firstName: string;
    private _lastName: string;
    private _createdAt: string;
    private _isActive: boolean;
    private _isAdmin: boolean;
    
    get id(): number {
        return this._id;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set id(value: number) {
        this._id = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set password(value: string) {
        this._password = value;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    set createdAt(value: string) {
        this._createdAt = value;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    set isAdmin(value: boolean) {
        this._isAdmin = value;
    }
}
