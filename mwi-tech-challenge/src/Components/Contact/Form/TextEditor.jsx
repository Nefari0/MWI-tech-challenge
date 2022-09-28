import { FormInputLabel, LargeGroup, Message } from './FormInput.styles';

const TextEditor = ({ label, ...otherProps }) => {
  return (
    <LargeGroup>
      <Message {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </LargeGroup>

  );
};

export default TextEditor;