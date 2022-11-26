import React, { useState } from "react";
import WordSection from "./WordSection";
import Win from "./Win";
import Lose from "./Lose";
import Hangman from './Hangman';


function Letters() {
    //our letters array - which will act as on-screen buttons and be removed upon click
    const lettersArray = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    //taking our letters aray as the inital state for the available letters
    const [availableLetters, setAvailableLetters] = useState(lettersArray)
    //setting an empty array for any used letters (as initially none are used...)
    const [usedLetters, setUsedLetters] = useState([])

    
    
    const removeLetter = (letter) => {
        // if the input letter == a letter from the available letters - the letter will be WILL NOT be pushed into the available letters array
        let updatedLetters = availableLetters.filter(element => element != letter)
        // the state of the availableLetters, will now be set to the updated letters - consisting of all the previous letters, except the input letter
        setAvailableLetters(updatedLetters)

        // the input letter will be added to the usedLetters' state
        setUsedLetters(prevstate => [...prevstate, letter])
    }
    
    // creating a list for the letters to be displayed on screen - each letter will have a div of its own
    let letters = availableLetters.map(letter => <div key={letter} onClick={(event => {removeLetter(event.target.textContent)})} className="letter">{letter}</div>)
    // adding all the separate letters into a lettersContainer - which will be used to display grid
    let lettersContainer = (<div className="lettersContainer">{letters}</div>)

    // an array of all the correct letters
    const correctLettersArray = ["Z","U", "C", "K", "E", "R", "B", "E", "R", "G"]


    // correct letter checker function
    function checkIfLetterIsCorrect(correctLetterArr, letter){
        
        let letterIsCorrect = false
        // loop checks if input letter exists in input array (the correctLettersArray from above - for the given word)
        for(let i = 0; i < correctLetterArr.length; i++){
            if(correctLetterArr[i] == letter){
                //if letter exists - letterIsCorrect ->  true and break the loop
                letterIsCorrect = true
                break;
            }
        }
        // return appropriate response for filter function
        if(letterIsCorrect){
            return true
        }else{
            return false
        }
    } 
    // use filter with the checkIfLetterIsCorrect on used letters array to filter for ONLY CORRECT letters
    let correctLetters = usedLetters.filter( letter => checkIfLetterIsCorrect(correctLettersArray, letter))
    // declare and initate a won variable - to false
    let won = false
    // win = true if word is guessed
    if(correctLetters.length > 7){
        won = true
    }

    
    // wrong letter checker function
    function checkIfLetterIsWrong(correctLetterArr, letter){
        let letterIsWrong = true
        //if any of letters in the input array (the correctLetterArray var used from above) == the input letter -> then letter IS NOT wrong
        for(let i = 0; i < correctLetterArr.length; i++){
            if(correctLetterArr[i] == letter){
                //when condition met - break loop
                letterIsWrong = false
                break;
            }
        }
        //return appropriate response for filtering
        if(letterIsWrong){
            return true
        }else{
            return false
        }
    }
    // use filter with the checkIfLetterIsWrong on used letters array to filter for ONLY WRONG letters
    let wrongLetters = usedLetters.filter( letter => checkIfLetterIsWrong(correctLettersArray, letter))
    // declare and initiate a lost variable - false by default
    let lost = false;
    // when 5 guesses are made - game is lost -> lost=true
    if(wrongLetters.length >= 5){
        lost = true
    }
  return (
    <div className="Letters">
        <Hangman wrongAttempts={wrongLetters.length}/>
        {/* call lose component and give it lost as a property */}
        <Lose hasLost={lost}/>
        {/* call lose component and give it won as a property */}
        <Win hasWon={won}/>
        {/* lettersContainer, from above, has all the letters which have not been clicked so far, the WordSection, contains the display of the
        word and any guessed letters - if game has been lost/won - their display will be set to none, else, they will be shown */}
        <div style={{display: won || lost ? 'none': 'block'}}>
      {lettersContainer}
      <WordSection alreadyUsed={usedLetters}/>
      </div>
    </div>
  );
}

export default Letters;
