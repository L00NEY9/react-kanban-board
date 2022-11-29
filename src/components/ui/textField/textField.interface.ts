import {InputHTMLAttributes} from "react";
import {TablerIcon} from "@tabler/icons";
import {StyledComponent} from "styled-components";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: TablerIcon;
  appearance?: "dark" | "light";
  wrapper?: StyledComponent<'div', any>
}
