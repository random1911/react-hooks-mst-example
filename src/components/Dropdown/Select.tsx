import React, { FC } from "react";
import { useStore } from "../../store/storeContext";

import Dropdown, { IOption } from "./Dropdown";
import { IDropdownDrop } from "./DropdownDrop";
import DropdownToggleButton from "./DropdownToggleButton";
import SelectDrop from "./SelectDrop";

interface IProps {
  closeTimeout?: number;
  selected: string | number;
  onSelect?: (value: string) => void;
  fullWidth?: boolean;
  options: IOption[];
  allowSearch?: boolean;
  disabled?: boolean;
  haveError?: boolean;
}

export const Select: FC<IProps & IDropdownDrop> = props => {
  const getSelectedName = () => {
    const { options, selected } = props;
    const selectedItem = options.find(item => item.value === selected);
    return selectedItem && selectedItem.label;
  };
  return (
    <Dropdown
      toggleButtonText={getSelectedName()}
      {...props}
      toggleButton={<DropdownToggleButton />}
    >
      <SelectDrop />
    </Dropdown>
  );
};

const SelectController: FC<IProps> = props => {
  const {
    ui: { onDropdownOpen, onDropdownClose }
  } = useStore();
  const combinedProps = {
    onOpen: onDropdownOpen,
    onClose: onDropdownClose,
    ...props
  };
  return <Select {...combinedProps} />;
};

export default SelectController;
