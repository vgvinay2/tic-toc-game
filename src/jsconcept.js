var SetEmployee = (function(){
  let count = 0;
  return function(name){
    this.id= ++count,
    this.name= name
  }
})();

let p1 =  SetEmployee("vinay");
console.log(p1);



var SetEmployee = (function(){
  let count = 0;
  return function(name){
    this.id= ++count,
    this.name= name
  }
})();

let p1 = new SetEmployee("vinay");
console.log(p1);



var Singleton = function(){
  let Instance;
  
}
const