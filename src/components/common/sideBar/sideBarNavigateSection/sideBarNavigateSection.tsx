import React, {useCallback, useState} from 'react';
import {SideBarNavigateSectionProps} from "./sideBarNavigateSection.interface";
import {IconChevronRight} from "@tabler/icons";
import cn from "classnames";
import {SideBarNavigateSectionWrapper} from "./sideBarNavigateSection.styles";

const SideBarNavigateSection: React.FC<SideBarNavigateSectionProps> = ({ title, children, isChild }) => {
  const [disclosures, setDisclosures] = useState<boolean>(false)

  const onNavigateSectionClickedHandler = useCallback(() => {
    setDisclosures(prev => !prev)
  }, [])

  return (
    <>
      <SideBarNavigateSectionWrapper className={cn(isChild && "child")} onClick={onNavigateSectionClickedHandler}>
        {
          children
          &&
            <IconChevronRight
              style={{
                transform: `rotateZ(${disclosures ? "90" : "0"}deg)`
              }}
              size={15}
              color={"white"}
            />
        }
        <span>{ title }</span>
      </SideBarNavigateSectionWrapper>
      {
        (children && disclosures)
        &&
        children.map((child) => <SideBarNavigateSection {...child} isChild key={child.title}/>)
      }
    </>
  );
};

export default SideBarNavigateSection;
