function CustomInput(props){

return (
    <>
    <label className="me-1">{props.label}:</label>
    <input type={props.type} name={props.name} id={props.id} className="mb-4 me-3"/>
    </>
);

}
export default CustomInput;