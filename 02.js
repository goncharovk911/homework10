makeSaver = (a) =>{
    let result = undefined;
    let saved = false;
    return  function () {
        if (saved === false) {
            saved = true
            result = a()
        }
        return result
    
    }
}
var saver = makeSaver(Math.random)


 var value1 = saver()  

            
var value2 = saver()


 value1 === value2                 

var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
var value3 = saver2()
var value4 = saver2()

value3 === value4