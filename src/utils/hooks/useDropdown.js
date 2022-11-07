import { useEffect, useRef, useState } from 'react';

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

  const ref = useRef();

  useEffect(() => {
    const onClick = (e) => {
      const { target } = e;
      const isInDropDown = target.closest('.dropdown-container');

      if (!isInDropDown && isToggled) {
        setIsToggled(false);
      }
    };

    if (ref.current) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [ref.current, isToggled]);

  return {
    ref,
    isToggled,
    selectedItem,
    handleSelectBoxToggle,
    handleSelectItem
    // handleEventItem
  };
}
