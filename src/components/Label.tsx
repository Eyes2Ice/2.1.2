interface inputProps {
  title: string;
  inputValue: string;
  onInput(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Label = (props: inputProps) => {
  return (
    <label className="label">
      {props.title}
      <input
        type="text"
        value={props.inputValue}
        onChange={(e) => {
          props.onInput(e);
        }}
      />
    </label>
  );
};

export default Label;
