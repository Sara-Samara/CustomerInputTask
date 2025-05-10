function CustomBtn(props) {
  return (
    <button className={`btn btn-${props.color} btn-lg btn-block me-2 mt-2`}>
      {props.type}
    </button>
  );
}

export default CustomBtn;