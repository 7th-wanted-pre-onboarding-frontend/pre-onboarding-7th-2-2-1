import { useState } from 'react';

export default function useDropdown(initailState) {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initailState);

  const handleSelectBoxToggle = () => {
    setIsToggled((currentState) => !currentState);
  };

  const handleSelectItem = (service) => {
    setSelectedItem(service);
    setIsToggled((currentState) => !currentState);
  };

  return {
    isToggled,
    selectedItem,
    handleSelectBoxToggle,
    handleSelectItem
  };
}
