import {Manage} from "./Manage";
import {Worker} from "./Worker";
import {Enginer} from "./Enginer";
let listCadres:Manage=new Manage();
let worker1:Worker=new Worker(1,"Cao",25,"Nam","HD",10)
let worker2:Worker=new Worker(2,"Cao",18,"nam","HD",9)
let enginer1:Enginer=new Enginer(3,"Khoa",24,'Nam',"HD","Co khi")
listCadres.addCadres(enginer1)
listCadres.addCadres(worker1);
listCadres.addCadres(worker2);

// console.log(listCadres.search(2))
// //console.log(listCadres.showAll());
console.log(listCadres.showAll())
// console.log(listCadres.delete(2))