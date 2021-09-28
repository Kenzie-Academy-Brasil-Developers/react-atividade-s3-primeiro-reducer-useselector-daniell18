import "./style.css";

function Card({ fruta }) {
  return (
    <>
      <div className="root">
        {fruta}
        <div className={fruta}></div>
      </div>
    </>
  );
}
export default Card;
