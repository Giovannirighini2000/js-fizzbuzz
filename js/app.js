for (let i=1;i<101;i++){
    const resto3 = i % 3 
    const resto5 = i % 5
    const resto15 = i % 15
    if (resto15 === 0){
        console.log(i,'fizzbuzz')
    }
    else if (resto3 === 0){
        console.log(i,'fizz') 
    }
    else if (resto5 === 0){
        console.log(i,'buzz')
    }
    else {
        console.log(i)
    }
    
     
    
        
}
    
     
    
     

