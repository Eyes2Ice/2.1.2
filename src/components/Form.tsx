import Label from "./Label";
import { useState } from "react";

const Form = () => {
  const [obj, setObj] = useState({ name: "Ruslan", surname: "Denisov" });
  const [propName, setPropName] = useState("");
  const [valueName, setValueName] = useState("");

  const changePropName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropName(e.target.value);
  };
  const changeValueName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueName(e.target.value);
  };

  const addPropToObj = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (propName === "") return;

    setObj((prevObj) => ({
      ...prevObj,
      [propName]: valueName,
    }));

    setPropName("");
    setValueName("");
  };

  return (
    <>
      <form className="form">
        <Label
          title="Название поля"
          inputValue={propName}
          onInput={changePropName}
        />
        <Label
          title="Значение поля"
          inputValue={valueName}
          onInput={changeValueName}
        />
        <button className="button" onClick={addPropToObj}>
          Создать поле в объекте
        </button>
      </form>
      <p>Объект: {JSON.stringify(obj)}</p>
    </>
  );
};

export default Form;
