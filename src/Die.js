export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : '#fff',
  };

  return (
    <div className="die-face" style={styles}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
