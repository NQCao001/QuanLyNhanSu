import {Worker} from "./Worker";
import {Cadres} from "./Cadres";
import {Enginer} from "./Enginer";
import {Staff} from "./Staff";
import {Rectangle} from "../Abstract and Interface/Resizeable/Rectangle";

export class Manage {
    private _listCadres: Cadres[] = []

    addCadres(value: Cadres | Worker | Enginer | Staff) {
        this._listCadres.push(value)
    }

    showAll() {
        return this._listCadres;
    }

    search(id: number) {
        this._listCadres.filter((item) => {
            return item.id == id
        })
    }

    delete(id: number) {
        this._listCadres = this._listCadres.filter((item) => {
            return item.id != id
        })
    }

    edit(id: number, name: string) {
        this._listCadres.map((item) => {
            if (item.id == id) {
                item.name = name;
            }
            return this._listCadres;
        })
    }
}
