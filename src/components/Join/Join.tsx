import "./Join.css";

const Join = () => {
  return (
    <div className="join">
      <div className="left-jo">
        <hr />
        <div>
          <span className="stroke-text">ready to </span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>
      <div className="right-jo">
        <div>
            <input type="email" placeholder="Enter your Email Address here" />
            <div className="btn">Join Now</div>
        </div>
      </div>
    </div>
  );
};

export default Join;
