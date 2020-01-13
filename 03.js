
( function  () {
  let result = (a) =>{
    if(a===0) {
        return console.log("поехали!");
        
    }else{
     return console.log(a);
    }
  }
  setTimeout(result,1000, 5)
  setTimeout(result,2000, 4)
  setTimeout(result,3000, 3)
  setTimeout(result,4000, 2)
  setTimeout(result,5000, 1)
  setTimeout(result,6000, 0)
 
})()

