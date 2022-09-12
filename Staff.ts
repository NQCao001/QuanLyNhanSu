import {Cadres} from "./Cadres";

export class Staff extends Cadres{
    private _work:string;

    constructor(id: number, name: string, age: number, sex: string, address: string, work: string) {
        super(id, name, age, sex, address);
        this._work = work;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
}