export interface DropdownMenuItem {
  id: string;
  label: string;
}

export interface DropdownProps {
  menu: DropdownMenuItem[];
  value: string;
  onChange?: (newValue: string) => any;
}
