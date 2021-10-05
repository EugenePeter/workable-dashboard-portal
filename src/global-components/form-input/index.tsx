import { useState, useEffect, useRef } from "react";

import styled, { css } from "styled-components";
interface data {
  value: string;
  name: string;
  secondary_name?: string;
  accessor?: string;
}
interface FormInputProps {
  value: string;
  placeholder: string;
  label: string;
  name: string;
  accessor?: string;
  secondary_name?: string;
  actions: {
    handleChange: (data: data) => void;
  };
  current_step?: any;
  type?: string;
}
const FormInput: React.FC<FormInputProps> = (props) => {
  const { value, placeholder, label, actions, name, current_step, type, accessor } = props;
  const [is_input_active, setInputActive] = useState(false);
  const [is_label_click, setLabelClick] = useState(false);

  const handleInputChange = (event: any) => {
    const { value, name } = event.target;

    actions.handleChange({ value, name, accessor });
  };

  const handleLabelClick = () => {
    setLabelClick(() => {
      return true;
    });
  };

  const inputRef = useRef<any>();
  useEffect(() => {
    if (is_label_click === true) {
      inputRef.current.focus();
    }
  }, [is_label_click]);

  useEffect(() => {
    if (value === "" || null || undefined) {
      setInputActive(false);
      setLabelClick(false);
    }
    if (value) setInputActive(true);
  }, [value, current_step]);

  const handleBlurInput = () => {
    if (value === "" || null || undefined) {
      setInputActive(false);
      setLabelClick(false);
    }
  };

  return (
    <InputContainer>
      <Label is_input_active={is_input_active} onClick={handleLabelClick}>
        {label}
      </Label>
      {type && type === "text" && (
        <Input
          type="text"
          value={value}
          placeholder={is_input_active ? placeholder : ""}
          onChange={handleInputChange}
          onFocus={() => setInputActive(true)}
          onClick={() => setInputActive(true)}
          onBlur={handleBlurInput}
          ref={inputRef}
          name={name}
        />
      )}
      {type && type === "textarea" && (
        <TextArea
          value={value}
          placeholder={is_input_active ? placeholder : ""}
          onChange={handleInputChange}
          onFocus={() => setInputActive(true)}
          onClick={() => setInputActive(true)}
          onBlur={handleBlurInput}
          ref={inputRef}
          name={name}
        />
      )}
    </InputContainer>
  );
};

export default FormInput;

export const Input = styled.input`
  width: 100%;
  /* background-color: #ebebeb; */
  line-height: 40px;
  /* border: none; */
  outline-color: #5cd176;
  padding-left: 1.4rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
`;
interface TextAreaProps {}
export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  /* background-color: #ebebeb; */
  height: 200px;
  /* border: none; */
  outline-color: #5cd176;
  padding: 1.4rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  resize: none;
`;

interface LabelProps {
  is_input_active: boolean;
  // first_name: string;
}
const inactive_input = css`
  background-color: none;
  font-size: medium;
  color: #a3a3a3;
`;

const active_input = css`
  font-size: small;
  font-weight: 700;
  background-color: #fff;
  color: #5c5c5c;
`;

const getLabelStyles = ({ is_input_active }: any): any => {
  if (is_input_active) return active_input;
  if (!is_input_active) return inactive_input;
};
export const Label = styled.label<LabelProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  outline: none;
  border: none;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  margin: 0;
  z-index: 1;
  transform: ${({ is_input_active }) => (is_input_active ? `translate(.8rem, -.7rem)` : `translate(1rem, .5rem)`)};
  transition: transform 0.4s cubic-bezier(0.23, 0, 0, 1.01);
  &:hover {
    cursor: text;
  }
  box-sizing: border-box;
  font-size: small;

  ${getLabelStyles}
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* flex-basis: 1 1 50%; */
  margin: 0 1rem 1rem 0;
`;
