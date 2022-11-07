import { useEffect, useRef, useState } from 'react';

export default function useDropdown(initailState) {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initailState);

  const handleSelectBoxToggle = () => {
    console.log('----');
    setIsToggled((currentState) => !currentState);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsToggled((currentState) => !currentState);
  };

  const testRef = useRef();
  console.log(testRef);

  useEffect(() => {
    const onClick = (e) => {
      console.log('isToggled', isToggled);
      console.log('cu', testRef.current);
      console.log('--', testRef.current.contains(e.target));
      if (
        isToggled &&
        (testRef.current !== null || !testRef.current.contains(e.target))
      ) {
        console.log(testRef);
        setIsToggled(false);
      }
    };

    if (isToggled) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [testRef.current]);

  return {
    testRef,
    isToggled,
    selectedItem,
    handleSelectBoxToggle,
    handleSelectItem
    // handleEventItem
  };
}
