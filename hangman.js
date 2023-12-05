let words=['word','another','pikachu','charmander','squirtle']



let hangman=()=>{
    let playAgain=()=>{
        let aPrompt=prompt('Would you like to play a game (yes or no)')
        if (aPrompt.toLowerCase()==='yes'){
    let ranNum= Math.floor(Math.random()*words.length)
    let theWord=words[ranNum]
    let crosses=[]
    let guesses=3
    let finale=''
    for (let j in theWord){
        crosses.push('-')
    }
    let wordGuess=()=>{
        let theGuess=prompt('What is your guess?')
        let count=0
        if (theGuess.length===1 && theGuess.match(/[a-z]/i))
        {
 
        for (let i in theWord){
            if (theGuess===theWord[i]){
                crosses.splice(i, 1, theWord[i])
                finale=crosses.join('')
                count ++
                console.log(crosses)
               
            }

        }
    
   
        if (count===0){
            guesses=guesses-1
            console.log(`Too bad you have ${guesses} guesses remaining`)
        }

    }
    else{
        console.log('Your guess must be an individual letter, not empty, multiple letters, numbers, or special characters')
        wordGuess()
    }
    }
    
    while (guesses>0 && finale!=theWord){
        wordGuess()
    }
    if (guesses===0){
        console.log( `Too bad the word was ${theWord}`)
        playAgain()
    }
    else if (finale===theWord){
        console.log('Well done')
        playAgain()
    }

    }
    else if (aPrompt.toLowerCase()==='no'){
        console.log('goodbye')
        close()
       
    }
    else{
        console.log('You must enter yes or no')
        playAgain()
    }
}
playAgain()
}

hangman()