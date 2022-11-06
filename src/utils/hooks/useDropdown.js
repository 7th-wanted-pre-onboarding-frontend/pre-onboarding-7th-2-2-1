import { useState } from 'react';

export default function useDropdown(initailState) {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initailState);

  const handleSelectBoxToggle = () => {
    setIsToggled((currentState) => !currentState);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsToggled((currentState) => !currentState);
  };

  return {
    isToggled,
    selectedItem,
    handleSelectBoxToggle,
    handleSelectItem
  };
}
