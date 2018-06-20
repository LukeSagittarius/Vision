export class EducationProgram {

  private _id: number;
  private _course: string;
  private _cycle: string;
  private _degree: string;
  private _type: string;
  private _title: string

  get id(): number {
    return this._id;
  }

  get course(): string {
    return this._course;
  }

  get cycle(): string {
    return this._cycle;
  }

  get degree(): string {
    return this._degree;
  }

  get type(): string {
    return this._type;
  }

  get title(): string {
    return this._title;
  }

  set id(value: number) {
    this._id = value;
  }

  set course(value: string) {
    this._course = value;
  }

  set cycle(value: string) {
    this._cycle = value;
  }

  set degree(value: string) {
    this._degree = value;
  }

  set type(value: string) {
    this._type = value;
  }

  set title(value: string) {
    this._title = value;
  }
}
