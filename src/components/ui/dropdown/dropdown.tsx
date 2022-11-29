import React, {MouseEventHandler, useCallback, useEffect, useMemo, useState} from 'react';
import {DropdownMenuWrapper, DropdownWrapper} from "./dropdown.styles";
import {DropdownMenuItem, DropdownProps} from "./dropdown.interface";
import {IconChevronDown} from "@tabler/icons";
import {dimColor} from "../../../constants/ui";

const Dropdown: React.FC<DropdownProps> = ({value, menu}) => {
  const [disclosures, setDisclosures] = useState<boolean>()
  const currentMenuItem = useMemo<DropdownMenuItem>(() => menu.find(menuItem => menuItem.id === value)!, [value, menu])

  const onDropdownClickedHandler = useCallback<MouseEventHandler>((ev) => {
    ev.stopPropagation()
    setDisclosures(prev => !prev)
  }, [])

  useEffect(() => {
    const onWindowClickedHandler = () => setDisclosures(false)

    if(disclosures) document.body.addEventListener("click", onWindowClickedHandler, { once: true })
    return () => {
      document.body.removeEventListener("click", onWindowClickedHandler)
    }
  }, [disclosures])

  return (
    <DropdownWrapper
      onClick={onDropdownClickedHandler}
    >
      <button>
        {
          currentMenuItem.label
        }
        <IconChevronDown
          style={{
            transform: `rotateZ(${disclosures ? "180" : "360"}deg)`
          }}
          color={dimColor}
        />
      </button>
      {
        disclosures
        &&
          <DropdownMenuWrapper onMouseEnter={e => e.preventDefault()}>
            {
              menu.map(menuItem => (
                <li key={menuItem.id}>
                  {
                    menuItem.label
                  }
                </li>
              ))
            }
          </DropdownMenuWrapper>
      }
    </DropdownWrapper>
  );
};

export default Dropdown;
