function Person(name){
    this.name = name || "Kyungho";
}
Person.prototype.getName=function(){
    return this.name;
}

function Korean (name){
    Person.apply(this,arguments);
}
var kor1=new Korean('지민');
console.log(kor1.name);