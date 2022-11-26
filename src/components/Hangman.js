import hangman0 from './hangman_images/hangman0.png'
import hangman1 from './hangman_images/hangman1.png'
import hangman2 from './hangman_images/hangman2.png'
import hangman3 from './hangman_images/hangman3.png'
import hangman4 from './hangman_images/hangman4.png'
import hangman5 from './hangman_images/hangman5.png'
import './Hangman.css';

function Hangman(props) {
    //storing the desired props for ease of use
   let wrongAttempts = props.wrongAttempts
  //for every next attempt - the next hangman image will be used as a source
  return (
    <div className="Hangman" >
    <img src={wrongAttempts == 0 ? hangman0
        : wrongAttempts == 1 ? hangman1 
        : wrongAttempts == 2 ? hangman2 
        : wrongAttempts == 3 ? hangman3 
        : wrongAttempts == 4 ? hangman4 
        : hangman5}></img>
    </div>
  );
}

export default Hangman;
