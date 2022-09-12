import {Cadres} from "./Cadres";

export class Worker extends Cadres{
    private _rank:number;
    constructor(id: number, name: string, age: number, sex: string, address: string, rank: number) {
        super(id, name, age, sex, address);
        this._rank = rank;
    }

    get rank(): number {
        return this._rank;
    }

    set rank(value: number) {
        this._rank = value;
    }
}