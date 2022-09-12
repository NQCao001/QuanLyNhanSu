"use strict";
exports.__esModule = true;
exports.Manage = void 0;
var Manage = /** @class */ (function () {
    function Manage() {
        this._listCadres = [];
    }
    Manage.prototype.addWorker = function (value) {
        this._listCadres.push(value);
    };
    Manage.prototype.showAll = function () {
        return this._listCadres;
    };
    Manage.prototype.search = function (id) {
        this._listCadres.filter(function (item) {
            return item.id == id;
        });
    };
    Manage.prototype["delete"] = function (id) {
        this._listCadres = this._listCadres.filter(function (item) {
            return item.id != id;
        });
    };
    Manage.prototype.edit = function (id, name) {
        var _this = this;
        this._listCadres.map(function (item) {
            if (item.id == id) {
                item.name = name;
            }
            return _this._listCadres;
        });
    };
    return Manage;
}());
exports.Manage = Manage;
