import './Lose.css'
//this section will pop on lost, using the hasLost property for its display to be set to block (else will be set to none)
function Lose(props) {
  return (
    <div className="Lose" style={{display: props.hasLost? 'block' : 'none'}}>
      <h1>You Lost</h1>
      <h2>😔</h2>
      
      
    </div>
  );
}

export default Lose;
