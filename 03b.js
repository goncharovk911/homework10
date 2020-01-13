
let numberLetter = (text) =>{
    let i = 0 , result = ''
    while(i<text.length){
        
        if (1103 >= text.charCodeAt(i) && text.charCodeAt(i) >= 1040) {
            result += text[i]
            
        }
        
        
        i++
       
    } 
    
    return result
}

numberLetter("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик")
console.log(numberLetter("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"));
