import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  const navigateHelper = () => {
    navigate("/page3");
  };
  return (
    <>
      <div className="heading-text-div">
        <h1 className="heading">Let's set up a home for all your work</h1>
        <small className="sub-heading">
          You can always create another workspace later
        </small>
      </div>
      <form>
        <div class="form-group">
          <label>Workspace Name</label>
          <Input placeholder={"Eden"} />
        </div>
        <div class="form-group">
          <label>Workspace URL (optional)</label>
          <span>wwww.eden.com/</span>
          <Input placeholder={"Example"} />
        </div>
        <Button text={"Create Workspace"} onClick={navigateHelper}></Button>
      </form>
    </>
  );
};

export default Page2;
