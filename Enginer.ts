import {Cadres} from "./Cadres";

export class Enginer extends Cadres{
    private _specialized:string;

    constructor(id: number, name: string, age: number, sex: string, address: string, specialized: string) {
        super(id, name, age, sex, address);
        this._specialized = specialized;
    }

    get specialized(): string {
        return this._specialized;
    }

    set specialized(value: string) {
        this._specialized = value;
    }
}