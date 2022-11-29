import React, {useMemo} from 'react';
import {ToolsBarTool} from "./toolsBar.interface";
import {IconAlignLeft, IconCalendar, IconFolder, IconListCheck, IconNotes} from "@tabler/icons";
import cn from "classnames";
import {ToolsBarWrapper, ToolWrapper} from "./toolsBar.styles";

const ToolsBar = () => {
  const tools = useMemo<ToolsBarTool[]>(() => [
    {
      title: "Roadmap",
      icon: IconAlignLeft,
      selected: false
    },
    {
      title: "Schedule",
      icon: IconCalendar,
      selected: true
    },
    {
      title: "Tasks",
      icon: IconListCheck,
      selected: false
    },
    {
      title: "Notes",
      icon: IconNotes,
      selected: false
    },
    {
      title: "Files",
      icon: IconFolder,
      selected: false
    }
  ], [])

  return (
    <ToolsBarWrapper>
      <h2>Tools</h2>
      {
        tools.map(tool => (
          <ToolWrapper className={cn(tool.selected && "selected")} key={tool.title}>
            {
              React.createElement(tool.icon, {
                size: 24,
                stroke: 1.5
              })
            }
            <span>
              {
                tool.title
              }
            </span>
          </ToolWrapper>
        ))
      }
    </ToolsBarWrapper>
  );
};

export default ToolsBar;
