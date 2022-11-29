import React from 'react';
import {MainWrapper} from "./main.styles";
import Header from "./header/header";
import KanbanBoard from "../../boards/kanban/kanban.board";

const Main = () => {
  return (
    <MainWrapper>
      <Header/>
      <KanbanBoard/>
    </MainWrapper>
  );
};

export default Main;
