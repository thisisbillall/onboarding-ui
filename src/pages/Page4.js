import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Page4 = () => {
  const navigate = useNavigate();
  const navigateHelper = () => {
    navigate("/");
  };
  return (
    <>
      <div className="heading-text-div">
        <h1 className="heading">Congratulations, Eren!</h1>
        <small className="sub-heading">
          You have completed onboarding, you can start using Eden!
        </small>

        <div class="circle">
          <i class="fa fa-check-circle" style="font-size:48px;color:rgb(98, 8, 201)"></i>
        </div>

        <Button text={"Launch Eden"} onClick={navigateHelper} />
      </div>
    </>
  );
};

export default Page4;
