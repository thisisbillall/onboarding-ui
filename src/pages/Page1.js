import Input from "../components/Input";
import Button from "../components/Button";

const Page1 = () => {
  return (
    <>
        <h1 className="heading">Welcome! First things first...</h1>
        <small className="sub-heading">You can always change them later</small>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <Input/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <Input/>
        </div>
        <Button></Button>
      </form>
    </>
  );
};

export default Page1;
