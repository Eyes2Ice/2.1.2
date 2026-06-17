import Label from "./Label";
import { useState } from "react";

const Form = () => {
  const [obj, setObj] = useState({});
  const [propName, setPropName] = useState("");
  const [valueName, setValueName] = useState("");

  return (
    <>
      <form className="form">
        <Label title="Название поля" inputValue={propName} />
        <Label title="Значение поля" inputValue={valueName} />
        <button className="button">Создать поле в объекте</button>
        <p className="object">Объект: </p>
      </form>
      <p>Object: {JSON.stringify(obj)}</p>
    </>
  );
};

export default Form;
