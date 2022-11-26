import React, { useState } from "react";



function WordSection(props) {
    //having an array with an object containing the letters and a found property - which will be set to true in the event of the correct letter
    //being pressed
    const [word, setWord] = useState(
    [
     {letter: "Z", found: false},
     {letter: "U", found: false},
     {letter: "C", found: false},
     {letter: "K", found: false},
     {letter: "E", found: false},
     {letter: "R", found: false},
     {letter: "B", found: false},
     {letter: "E", found: false},
     {letter: "R", found: false},
     {letter: "G", found: false}
    
    ]
     )

    //storing the alreadyUsed props for ease of use
    let usedLetters = [...props.alreadyUsed]
    let wordCopy = [...word]
        //loop checking if the letters used by the user exist in the word - if they do, the found property will be set to true
        for(let i = 0; i < usedLetters.length; i++){
            for(let j = 0; j < wordCopy.length; j++){
                if(usedLetters[i] == wordCopy[j].letter){
                    wordCopy[j].found = true

                }
            }
            
        }
    //map out an array with the letters of the word for display
   let letterDisplay = word.map(element => <div key={element + Math.random()}><span>{element.found ? element.letter : "_"}</span></div>)
   //create a a container for the letters
   let letterCountainer = (<div className="letterContainer">{letterDisplay}</div>)

    //returns the div with the container of the the letters
  return (
    <div className="WordSection">
     {letterCountainer}
    </div>  
  );
}

export default WordSection;
