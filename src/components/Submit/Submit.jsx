import "./submit.css";

export default function Submit({ rating }) {
  return (
    <div className="thank">
      <img src="./images/illustration-thank-you.svg" alt="" />
      <div className="score">
        <p>You selected {rating} out of 5</p>
      </div>
      <h2>Thank you!</h2>
      <p className="thank-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
