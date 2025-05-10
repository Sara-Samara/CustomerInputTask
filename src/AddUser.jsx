// AddUser.js
import { useState } from "react";
import CustomInput from "../shared/CustomInput";

function AddUser() {
  const [inputs, setInputs] = useState([
    {
      "id": "input1",
      "name": "username",
      "type": "text",
      "label": "Name"
    },
    {
      "id": "input2",
      "name": "email",
      "type": "email",
      "label": "Email"
    },
    {
      "id": "input3",
      "name": "age",
      "type": "number",
      "label": "Age"
    },
    {
      "id": "input4",
      "name": "status",
      "type": "text",
      "label": "Status"
    },
    {
      "id": "input5",
      "name": "comment",
      "type": "textarea",
      "label": "Comment"
    }
  ]);

  return (
    <div>
      {inputs.map((input) => (
        <CustomInput 
          key={input.id}
          label={input.label} 
          name={input.name} 
          type={input.type} 
          id={input.id} 
        />
      ))}
    </div>
  );
}

export default AddUser;