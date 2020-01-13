function myBind(thatFunc, thatArg, args) {
    return function() {
    var funcArgs = [];
    var j = 0;
    for(var i = 0; i < args.length; i++) {
    if (args[i] === undefined) {
    funcArgs.push(arguments[j]);
    j ++;
    }
    else {
    funcArgs.push(args[i]);
    }
    }
    funcArgs = funcArgs.concat([].slice.call(arguments, j));
    return thatFunc.apply(thatArg, funcArgs);
    };
    }
var pow5 = myBind(Math.pow, Math, [undefined, 5]) 
var cube = myBind(Math.pow, Math, [undefined, 3]) 

pow5(2) 
cube(3)


var chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5,undefined, 8,undefined, 9])
chessMin(-1,-5,3,15) 



var zeroPrompt = myBind(prompt, window, [undefined, "0"])
                                                         
var someNumber = zeroPrompt("Введите число")