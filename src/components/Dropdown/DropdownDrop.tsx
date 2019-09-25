import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import { getBemClassName, isElementInsideParent, isNumber } from "../../utils";
import "./dropdown.scss";

export interface IDropdownDrop {
  closeCallback?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface IDropStyleParams {
  minWidth?: number;
  height?: number;
  top?: number;
  left?: number;
}
interface IProps {
  children?: ReactNode;
  params?: IDropStyleParams;
}

const DropdownDrop: FC<IProps & IDropdownDrop> = ({
  children,
  closeCallback,
  onOpen,
  onClose,
  params = { left: 0, top: 0 }
}) => {
  const node = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});
  const [isAbove, setAbove] = useState(false);
  const handleClose = () => {
    closeCallback && closeCallback();
  };
  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    e.stopPropagation();
    e.key === "Escape" && handleClose();
  };
  const handleOutSideClick = (e: Event) => {
    if (!node || !node.current || !e.target) return;
    if (!isElementInsideParent(e.target as HTMLElement, node.current)) {
      handleClose();
    }
  };
  const setStyles = (params: IDropStyleParams) => {
    if (!params) return;
    const { minWidth, top, left, height } = params;
    const realMinWidth = isNumber(minWidth) ? `${minWidth}px` : 0;
    const realLeft = isNumber(left) ? `${left}px` : "auto";

    const parentTop = isNumber(top) ? top : 0;
    const parentHeight = isNumber(height) ? height : 0;
    const { innerHeight, pageYOffset } = window;
    const nodeHeight = node.current && node.current.offsetHeight;
    const dropHeight = nodeHeight && isNumber(nodeHeight) ? nodeHeight : 0;

    const bottomOffset = innerHeight - (parentTop || 0);
    const shouldDropToUp = bottomOffset <= innerHeight / 3;
    setAbove(shouldDropToUp);
    const getVerticalStyles = () => {
      if (!shouldDropToUp) {
        // drop to bottom - under the head
        const realTop = `${(parentTop || 0) +
          (parentHeight || 0) +
          pageYOffset -
          1}px`;
        const maxHeight = `${innerHeight -
          (parentHeight || 0) -
          (parentTop || 0)}px`;
        return {
          top: realTop,
          maxHeight
        };
      }
      // drop to top - above the head
      const canFit = dropHeight <= (parentTop || 0);
      if (!canFit) {
        // drop is bigger than space between top edge and head - so it will take all place
        const realTop = `${pageYOffset}px`;
        const maxHeight = parentTop ? `${parentTop + 1}px` : 0;
        return {
          top: realTop,
          maxHeight
        };
      }
      // drop is less than space between top edge and head
      const maxHeight = `${dropHeight}px`;
      const realTop = `${(parentTop || 0) + pageYOffset - dropHeight + 1}px`;
      return {
        top: realTop,
        maxHeight
      };
    };
    const style = {
      minWidth: realMinWidth,
      left: realLeft,
      ...getVerticalStyles()
    };
    setStyle(style);
  };
  const onMount = () => {
    document.body.addEventListener("click", handleOutSideClick);
    onOpen && onOpen();
    document.addEventListener("keydown", handleEscPress);
  };
  const onUnmount = () => {
    document.body.removeEventListener("click", handleOutSideClick);
    document.removeEventListener("keydown", handleEscPress);
    onClose && onClose();
  };
  const handleOverWidth = () => {
    if (!node.current) return;
    const dropdownWidth = node.current.offsetWidth;
    const computedLeft = isNumber(params.left) ? params.left : 0;
    const screenWidth = window.innerWidth;
    if (!dropdownWidth || !computedLeft) return;
    const overflow = dropdownWidth + computedLeft - screenWidth;
    if (overflow > 0) {
      const left = Number(params.left) - overflow;
      const newParams = { ...params, left };
      setStyles(newParams);
    }
  };
  useEffect(() => {
    onMount();
    return () => {
      onUnmount();
    };
  }, []); // eslint-disable-line
  useEffect(() => {
    setStyles(params);
    handleOverWidth();
  }, [params]); // eslint-disable-line
  const dropdownRoot = document.getElementById("dropdown-root");
  if (!dropdownRoot) return null;
  const container = (
    <FocusLock>
      <AutoFocusInside>
        <div
          className={getBemClassName("dropdown-drop-wrapper", { isAbove })}
          ref={node}
          style={style}
        >
          {children}
        </div>
      </AutoFocusInside>
    </FocusLock>
  );
  return ReactDOM.createPortal(container, dropdownRoot);
};

export default DropdownDrop;
