const Button = ({ text, onClick }) => {
  return (
    <>
      <button
        className="btn btn-primary"
        style={{ width: "100%" }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
