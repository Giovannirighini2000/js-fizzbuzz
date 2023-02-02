for (let i=1;i<101;i++){
    const resto3 = i % 3 
    const resto5 = i % 5
    const resto15 = i % 15
    // SE IL RESTO DEL MULTIPLO DI 15 E 0  NEL CONTATORE SI VERIFA LA VARIABILE A MODO CHE NON SI VERIFICA PRIMA LE ALTRE 
    if (resto15 === 0){
        console.log(i,'fizzbuzz')
    }
    // SE IL RESTO DEL MULTIPLO DI 3 E 0 NEL CONTATORE SI VERIFA LA VARIABILE A MODO CHE NON SI VERIFICA PRIMA LE ALTRE 
    else if (resto3 === 0){
        console.log(i,'fizz') 
    }
    // SE IL RESTO DEL MULTIPLO DI 5 E 0 NEL CONTATORE SI VERIFA LA VARIABILE A MODO CHE NON SI VERIFICA PRIMA LE ALTRE 
    else if (resto5 === 0){
        console.log(i,'buzz')
    }
    // NORMALE CONTATORE PRIVO DEI MULTIPLI SERVITI
    else {
        console.log(i)
    }
    
     
    
        
}
    
     
    
     

