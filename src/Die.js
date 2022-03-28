export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : '#fff',
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <img className="die-num" src={`./images/${props.value}.png`} />
    </div>
  );
}
