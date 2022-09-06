function receivesAFunction(callback, type){
    return callback (type)
}

function returnsANamedFunction (){
   return function fn(){}
}

function returnsAnAnonymousFunction(){
    return function (){}

}
