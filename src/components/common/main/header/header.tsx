import React, {useMemo} from 'react';
import {
  AddNewButtonWrapper,
  HeaderWrapper,
  LeftSideHeaderWrapper,
  NotificationsButtonWrapper,
  RightSideHeaderWrapper,
  SearchTextFieldWrapper
} from "./header.styles";
import {IconBell, IconPlus, IconSearch} from "@tabler/icons";
import Dropdown from "../../../ui/dropdown/dropdown";
import TextField from "../../../ui/textField/textField";
import {DropdownMenuItem} from "../../../ui/dropdown/dropdown.interface";
import UserAvatarImage from "../../../../assets/userAvatar.png"

const Header = () => {
  const boardsDropdownMenu = useMemo<DropdownMenuItem[]>(() => [
    {
      label: "Board view",
      id: "board-view"
    },
    {
      label: "Table view",
      id: "table-view"
    },
    {
      label: "Kanban",
      id: "kanban"
    }
  ], [])
  const filtersDropdownMenu = useMemo<DropdownMenuItem[]>(() => [
    {
      label: "Filter",
      id: "no-filter"
    },
    {
      label: "By time",
      id: "time-filter"
    },
    {
      label: "By name",
      id: "name-filter"
    }
  ], [])

  return (
    <HeaderWrapper>
      <LeftSideHeaderWrapper>
        <AddNewButtonWrapper>
          <IconPlus/>
          <span>Add new</span>
        </AddNewButtonWrapper>
        <Dropdown
          menu={boardsDropdownMenu}
          value={"kanban"}
        />
        <Dropdown
          menu={filtersDropdownMenu}
          value={"no-filter"}
        />
      </LeftSideHeaderWrapper>
      <RightSideHeaderWrapper>
        <TextField
          wrapper={SearchTextFieldWrapper}
          placeholder={"Search..."}
          icon={IconSearch}
        />
        <NotificationsButtonWrapper>
          <IconBell
            stroke={1}
            size={28}
          />
        </NotificationsButtonWrapper>
        <img width={40} height={40} src={UserAvatarImage} alt={"user avatar"}/>
      </RightSideHeaderWrapper>
    </HeaderWrapper>
  );
};

export default Header;
