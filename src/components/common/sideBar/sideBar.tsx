import React, {useMemo} from 'react';
import Logotype from "../logotype/logotype";
import {Route} from "../../../models/route.model";
import userAvatarImage from "../../../assets/userAvatar.png"
import TextField from "../../ui/textField/textField";
import {IconSearch} from "@tabler/icons";
import SideBarNavigateSection from "./sideBarNavigateSection/sideBarNavigateSection";
import {SearchTextFieldWrapper, SideBarWrapper, WorkspaceSectionWrapper} from "./sideBar.styles";

const SideBar = () => {
  const routes = useMemo<Route[]>(() => [
    {
      title: "Favorites",
      children: [
        {
          title: "Marketing"
        },
        {
          title: "Mobile App"
        }
      ]
    },
    {
      title: "My Projects",
      children: [
        {
          title: "Marketing"
        },
        {
          title: "Landing Pages"
        },
        {
          title: "Wedding"
        },
        {
          title: "Mobile App"
        },
        {
          title: "House Construction"
        }
      ]
    }
  ], [])

  return (
    <SideBarWrapper>
      <Logotype/>
      <TextField
        wrapper={SearchTextFieldWrapper}
        placeholder={"Search..."}
        appearance={"dark"}
        icon={IconSearch}
      />
      <WorkspaceSectionWrapper>
        <img width={22} height={22} src={userAvatarImage} alt={"User Avatar"}/>
        <span>My workspace</span>
      </WorkspaceSectionWrapper>
      {
        routes.map((route, index) => <SideBarNavigateSection {...route} key={index}/>)
      }
    </SideBarWrapper>
  );
};

export default SideBar;
