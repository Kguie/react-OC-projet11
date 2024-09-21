import { useRef } from "react";

import DropdownContent from "./DropdownContent";

type Props = {
  title: string;
  content: string[] | string;
};

export default function Dropdown({ title, content }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  function handleClickDropdown() {
    const openDropdownClass = "dropdown__body--open";
    const openDropdownContainerClass = "dropdown--open";
    const reverseIconClass = "dropdown__head__icon--open";

    //close
    if (dropdownRef.current?.classList.contains(openDropdownClass)) {
      dropdownRef.current.classList.remove(openDropdownClass);
      iconRef.current?.classList.remove(reverseIconClass);
      dropdownContainerRef.current?.classList.remove(
        openDropdownContainerClass
      );
      //open
    } else {
      dropdownRef.current?.classList.add(openDropdownClass);
      iconRef.current?.classList.add(reverseIconClass);
      //Correction du borderRadius
      setTimeout(() => {
        dropdownContainerRef.current?.classList.add(openDropdownContainerClass);
      }, 300);
    }
  }
  return (
    <div className="dropdown" ref={dropdownContainerRef}>
      <div className="dropdown__head" aria-label={title} aria-haspopup>
        <span className="dropdown__head__title">{title}</span>
        <span
          onClick={handleClickDropdown}
          className="dropdown__head__icon"
          ref={iconRef}></span>
      </div>
      <div className="dropdown__body" ref={dropdownRef}>
        <DropdownContent title={title} content={content} />
      </div>
    </div>
  );
}
