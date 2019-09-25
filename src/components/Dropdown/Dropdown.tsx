import React, {
  FC,
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState
} from "react";

import DropdownDrop, { IDropdownDrop } from "./DropdownDrop";
import "./dropdown.scss";
import { getBemClassName } from "../../utils";

export interface IOption {
  value?: string | number;
  label?: string;
  disabled?: boolean;
}

export interface IDropdown {
  closeTimeout?: number;
  children: ReactElement;
  toggleButton: ReactElement;
  withTranslate?: boolean;
  selected?: string | number;
  onSelect?: (value: string) => void;
  fullWidth?: boolean;
  toggleButtonText?: string;
  options?: IOption[];
  allowSearch?: boolean;
  label?: string;
  disabled?: boolean;
  small?: boolean;
  haveError?: boolean;
}

const events = ["mousewheel", "scroll", "touchmove"];

const Dropdown: FC<IDropdown & IDropdownDrop> = ({
  closeTimeout = 100,
  withTranslate,
  selected,
  children,
  onSelect,
  toggleButton,
  toggleButtonText,
  fullWidth,
  options,
  onOpen,
  onClose,
  allowSearch,
  label,
  disabled,
  small,
  haveError
}) => {
  const headElement = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [isClosing, setClosing] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({});
  const scrollParent = useRef<HTMLElement | null>(null);
  const toggleButtonElement = useRef<HTMLElement | null>(null);
  let resizeTimeout: number | null = null;

  const preventScroll = (e: Event) => {
    e.preventDefault();
  };
  const disableScrollOnParent = () => {
    const parent = scrollParent && scrollParent.current;
    if (parent) {
      events.forEach(event => {
        parent.addEventListener(event, preventScroll);
      });
    }
  };
  const enableScrollOnParent = () => {
    const parent = scrollParent && scrollParent.current;
    if (parent) {
      events.forEach(event => {
        parent.removeEventListener(event, preventScroll);
      });
    }
  };
  const detectScrollParent = (currentNode: HTMLElement | null) => {
    const customScrollClass = "modal-content";
    const modalId = "modal-root";
    if (!currentNode) return;
    while (currentNode.parentElement && currentNode !== document.body) {
      currentNode = currentNode.parentElement;
      if (
        currentNode.classList.contains(customScrollClass) ||
        (currentNode.id && currentNode.id === modalId)
      ) {
        scrollParent.current = currentNode;
        return;
      }
    }
  };
  const detectToggleButtonElement = () => {
    if (toggleButtonElement && toggleButtonElement.current) return;
    if (!headElement.current) return;
    const buttonInside = headElement.current.querySelector("button");
    if (buttonInside) {
      toggleButtonElement.current = buttonInside;
    }
  };
  const getPositionProps = () => {
    const node = headElement.current;
    if (!node) return {};
    const rect = node.getBoundingClientRect();
    return {
      minWidth: node.offsetWidth,
      height: node.offsetHeight,
      top: rect.top,
      left: Math.round(rect.left)
    };
  };
  const open = () => {
    if (isClosing) return;
    setOpen(true);
    setDropdownPosition(getPositionProps());
  };
  const close = () => {
    setOpen(false);
    setClosing(true);
    setTimeout(() => {
      if (toggleButtonElement && toggleButtonElement.current) {
        toggleButtonElement.current.focus();
      }
      setClosing(false);
    }, closeTimeout);
  };
  const handleResize = () => {
    if (isOpen) {
      resizeTimeout && clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        setDropdownPosition(getPositionProps());
      }, 300);
    }
  };
  const startHandleResize = () => {
    window.addEventListener("resize", handleResize);
  };
  const endHandleResize = () => {
    window.removeEventListener("resize", handleResize);
  };
  useEffect(() => {
    !scrollParent.current && detectScrollParent(headElement.current);
    startHandleResize();
    if (isOpen) {
      detectToggleButtonElement();
      disableScrollOnParent();
    }
    return () => {
      enableScrollOnParent();
      endHandleResize();
    };
  }, [isOpen]); // eslint-disable-line
  const renderChildren = () => {
    const props = {
      withTranslate,
      options,
      onSelect,
      selected,
      closeCallback: close,
      allowSearch,
      small
    };
    return React.cloneElement(children, props);
  };
  const renderToggleButton = () => {
    const props = {
      withTranslate,
      text: toggleButtonText,
      fillParent: !!fullWidth,
      isOpen,
      label,
      disabled,
      small,
      haveError,
      onClick: open
    };
    return React.cloneElement(toggleButton, props);
  };
  return (
    <Fragment>
      <div
        className={getBemClassName("dropdown-button-container", { fullWidth })}
        ref={headElement}
      >
        {renderToggleButton()}
      </div>
      {isOpen && (
        <DropdownDrop
          onClose={onClose}
          onOpen={onOpen}
          closeCallback={close}
          params={dropdownPosition}
        >
          {renderChildren()}
        </DropdownDrop>
      )}
    </Fragment>
  );
};

export default Dropdown;
