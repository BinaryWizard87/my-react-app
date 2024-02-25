import { useState } from "react";

function myComponent() {
  const [name, setName] = useState("Guset");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Chanbo");
  };

  const inCrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <p>Name:{name} </p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={inCrementAge}>Increant Age</button>

      <p>Is employed:{isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle status</button>
    </>
  );
}
export default myComponent;
