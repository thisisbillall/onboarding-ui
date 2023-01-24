import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  const navigateHelper = () => {
    navigate("/page2");
  };
  return (
    <>
      <div className="heading-text-div">
        <h1 className="heading">Welcome! First things first...</h1>
        <small className="sub-heading">You can always change them later</small>
      </div>
      <form>
        <div class="form-group">
          <label>Full Name</label>
          <Input placeholder={"Steve Jobs"} />
        </div>
        <div class="form-group">
          <label>Display Name</label>
          <Input placeholder={"Steve"} />
        </div>
        <Button text={"Create Workspace"} onClick={navigateHelper} />
      </form>
    </>
  );
};

export default Page1;
