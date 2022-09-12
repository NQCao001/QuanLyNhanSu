"use strict";
exports.__esModule = true;
var Manage_1 = require("./Manage");
var Worker_1 = require("./Worker");
var Enginer_1 = require("./Enginer");
var listCadres = new Manage_1.Manage();
var worker1 = new Worker_1.Worker(1, "Cao", 25, "Nam", "HD", 10);
var worker2 = new Worker_1.Worker(2, "Cao", 18, "nam", "HD", 9);
var enginer1 = new Enginer_1.Enginer(3, "Khoa", 24, 'Nam', "HD", "Co khi");
listCadres.addWorker(enginer1);
listCadres.addWorker(worker1);
listCadres.addWorker(worker2);
// console.log(listCadres.search(2))
// //console.log(listCadres.showAll());
// listCadres.edit(1,"Nam")
console.log(listCadres.showAll());
// console.log(listCadres.delete(2))
