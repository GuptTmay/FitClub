import "./Journey.css";
import { plansData } from "../../data/plansData";
import RightArrow from "../../assets/rightArrow.png";
import tick from "../../assets/whiteTick.png";

const Journey = () => {
  return (
    <div className="Journey" id="Plans">
      <div className="myBlur journey-blur-1"></div>
      <div className="myBlur journey-blur-2"></div>
      <div className="header-j">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>

      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="planCard" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div key={index}>
                    <img src={ tick } alt="" />
                    <span >{feature}</span>
                </div>
              ))}
            </div>

            <div>
                <span>see more benefits</span>
                <img src={RightArrow} alt="arrow" />
            </div>

            <div className="btn">Join Now</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
