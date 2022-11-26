import './Win.css'

//this section will pop on win, using the hasWon property for its display to be set to block (else will be set to none)
function Win(props) {
    console.log(props)
  return (
    <div className="Win" style={{display: props.hasWon? 'block' : 'none'}}>
      <h1>You Won!</h1>
      <h2>😊</h2>
      
    </div>
  );
}

export default Win;
