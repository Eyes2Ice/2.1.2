interface inputProps {
  title: string;
  inputValue: string;
  // e: React.ChangeEvent<HTMLInputElement>;
}

const Label = (props: inputProps) => {
  return (
    <label className="label">
      {props.title}
      <input type="text" value={props.inputValue} />
    </label>
  );
};

export default Label;
