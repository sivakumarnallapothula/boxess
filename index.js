const Box = (props) => {
  //  Write your code here.
  const { text, sk } = props;
  return (
    <div className={sk}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.

  <div className="o">
    <h1>Boxes</h1>
    <Box sk="ks" text="Small" />
    <Box sk="ns" text="Medium" />
    <Box sk="ps" text="Big" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
