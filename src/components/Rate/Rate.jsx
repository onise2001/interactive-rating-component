import "./Rate.css";

export default function Rate({ rating, setRating, setSubmit }) {
  const points = [1, 2, 3, 4, 5];
  console.log(rating);
  return (
    <div className="rate">
      <div className="rate-img">
        <img src="./images/icon-star.svg" alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings">
        {points.map((point) => {
          return (
            <button
              key={point}
              onClick={() => {
                setRating(point);
              }}
              style={
                point == rating
                  ? { backgroundColor: "#7c8798", color: "white" }
                  : { backgroundColor: "", color: "" }
              }
            >
              {point}
            </button>
          );
        })}
      </div>
      <button
        className="submit"
        onClick={() => {
          rating && setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
