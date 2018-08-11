let SetEmployee = (function(){
  let count = 0;
  return function(name){
    this.id: ++count
    this.name: name
  }
})();