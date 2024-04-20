import './Programs.css';
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className='Programs' id="Programs">
      
      {/* header */}
      <div className="programs-header">
        <span className='stroke-text'>explore our</span>
        <span>programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className="program-category">
        { programsData.map((program) => (
          <div className='category' key={program.heading}>
            {program.image}
            <span>{ program.heading }</span>
            <span>{ program.details }</span>
            <div className="join-now">
              <span>Join Now</span><img src={RightArrow} alt="White Arrow" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}; 

export default Programs