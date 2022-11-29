import React from 'react';
import {TextFieldProps} from "./textField.interface";
import cn from "classnames";
import {TextFieldWrapper} from "./textField.styles";

const TextField: React.FC<TextFieldProps> = ({ icon, appearance, wrapper, ...defaultProps }) => {
  return (
    <TextFieldWrapper
      as={wrapper}
      className={cn(defaultProps.className, appearance || "light")}
    >
      <input {...defaultProps} className={undefined}/>
      {
        icon && React.createElement(icon)
      }
    </TextFieldWrapper>
  );
};
export default TextField;
