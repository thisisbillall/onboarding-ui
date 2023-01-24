
const Header = () => {
  return (
    <div classNameName="header-div">
      <div className="top-logo-div">
        <h1>
          {" "}
          <i className="fa fa-google"></i>Eden
        </h1>
      </div>
      <div>
        <div className="stepper-wrapper">
          <div className="stepper-item completed">
            <div className="step-counter">1</div>
            <div className="step-name">First</div>
          </div>
          <div className="stepper-item ">
            <div className="step-counter">2</div>
            <div className="step-name">Second</div>
          </div>
          <div className="stepper-item active">
            <div className="step-counter">3</div>
            <div className="step-name">Third</div>
          </div>
          <div className="stepper-item">
            <div className="step-counter">4</div>
            <div className="step-name">Forth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
