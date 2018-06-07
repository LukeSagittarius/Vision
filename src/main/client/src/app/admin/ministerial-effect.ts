export class MinisterialEffect {

  private _id: number;
  private _code: string;
  private _name: string;
  private _profile: number;
  private _stage: number;
  private _area: number;
  private _description: string;

  get id(): number {
    return this._id;
  }

  get code(): string {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  get profile(): number {
    return this._profile;
  }

  get stage(): number {
    return this._stage;
  }

  get area(): number {
    return this._area;
  }

  get description(): string {
    return this._description;
  }

  set id(value: number) {
    this._id = value;
  }

  set code(value: string) {
    this._code = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set profile(value: number) {
    this._profile = value;
  }

  set stage(value: number) {
    this._stage = value;
  }

  set area(value: number) {
    this._area = value;
  }

  set description(value: string) {
    this._description = value;
  }
}
