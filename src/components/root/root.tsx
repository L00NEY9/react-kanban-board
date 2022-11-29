import React from 'react';
import SideBar from "../common/sideBar/sideBar";
import ToolsBar from "../common/toolsBar/toolsBar";
import Main from "../common/main/main";

const Root: React.FC = () => {
  return (
    <>
      <SideBar/>
      <ToolsBar/>
      <Main/>
    </>
  );
};

export default Root;
