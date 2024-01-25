import profilePic from "./assets/monk.jpg";
function Card() {
  return (
    <div className="card">
      <img src="{profilePic} " alt="profile piture" />
      <h2>Chea Chanbo</h2>
      <p>I am IT student and I love coding as well</p>
    </div>
  );
}
export default Card;
