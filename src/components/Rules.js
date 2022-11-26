import './Rules.css'

// simple display of a block with the rules when the props.read prop is true/false 
function Rules(props) {
    console.log(props)
  return (
    <div className="Rules" style={{display: props.read? 'block' : 'none'}}>
      <h3>Rules of the game:</h3>
      <p>If you guess the given word - you win</p>
      <p>If you guess the wrong letter 5 times - you lose</p>
    </div>
  );
}

export default Rules;
