import React, { useState, useEffect } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import './Textfield.scss';

interface CommonPropsType {
  disabled?: boolean;
  onBlur?: () => void;
  onChange?: (event: any) => void;
}

interface TextfieldProps {
  label: string;
  required?: boolean;
  type?: string;
  error?: boolean;
  id?: string;
  name?: string;
  onChange?:
    | ((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void)
    | undefined;
  value?: string | number | null;
  inputLabel?: string | null;
  onBlur?: (value: string | number | null | undefined) => void;
  disabled?: boolean;
  inputProps?: () => void;
}

export const Textfield = ({ label, name, onChange, value, onBlur }: TextfieldProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(value);

 
   const handleOnBlur = (): void => {
      if (onBlur) {
        onBlur(inputValue);
      }
    };

   const handleOnChange = (event: any): void => {
      if (onChange) {
        onChange(event);
      }
    };


  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className="Textfield-FormContainer">
      <form>
        <InputGroup className="Textfield-Validation">
          <Form.Label>
            <InputGroup.Text>{label}</InputGroup.Text>
          </Form.Label>
          <div className="Textfield-InputBox">
            <Form.Control type="text" name={name} defaultValue={inputValue ? inputValue : ''} onBlur={handleOnBlur} onChange={handleOnChange}/>
          </div>
        </InputGroup>
      </form>
    </div>
  );
};

export default Textfield;
