
doSomething = (a, b) => {
  return a + b
}
function makeProfileTimer () {
    let start = performance.now()
          return () =>{
         let over = performance.now()
         return (over - start) + " milliseconds."
      }
}


let timer = makeProfileTimer()
doSomething(5, 9);
alert(timer())