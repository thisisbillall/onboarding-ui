// import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Page3 = () => {
  const navigate = useNavigate();
  const navigateHelper = () => {
    navigate("/page4");
  };
  return (
    <>
      <div className="heading-text-div">
        <h1 className="heading">How are you planning to use Eden?</h1>
        <small className="sub-heading">
          We'll streamline your experience accordingly
        </small>
      </div>
      <form>
        <div className="main-container">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i cclassNamelass="fa fa-user" aria-hidden="true"></i>
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">For myself</h6>
              <p className="card-text">
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </div>

          <div claclassNamess="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i clclassNameass="fa fa-users" aria-hidden="true"></i>
              </h5>
              <h6 claclassNamess="card-subtitle mb-2 text-muted">
                With my team
              </h6>
              <p claclassNamess="card-text">
                Wikis, docs, tasks & projects, all in one place.
              </p>
            </div>
          </div>
        </div>
        <Button text={"Create Workspace"} onClick={navigateHelper} />
      </form>
    </>
  );
};

export default Page3;
