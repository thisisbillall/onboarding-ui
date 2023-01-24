import Input from "../components/Input";
import Button from "../components/Button";

const Page2 = () => {   
  return (
    <>
        <div className="heading-text-div">
        <h1 className="heading">Let's set up a home for all your work</h1>
        <small className="sub-heading">You can always create another workspace later</small>
        </div>
      <form>
        <div class="form-group">
          <label >Workspace Name</label>
          <Input placeholder={'Eden'}/>
        </div>
        <div class="form-group">
          <label >Workspace URL (optional)</label>
          <span>wwww.eden.com/</span>
          <Input placeholder={'Example'}/>
        </div>
        <Button></Button>
      </form>
    </>
  );
};

export default Page2;
