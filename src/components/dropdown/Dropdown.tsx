import { useRef } from "react";

type Props = {
  title: string;
  content: string[] | string;
};

export default function Dropdown({ title, content }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const isContentList = Array.isArray(content);

  function handleClickDropdown() {
    const openDropdownClass = "dropdown__body--open";
    const reverseIconClass = "dropdown__head__icon--open";
    if (dropdownRef.current?.classList.contains(openDropdownClass)) {
      dropdownRef.current.classList.remove(openDropdownClass);
      iconRef.current?.classList.remove(reverseIconClass);
    } else {
      dropdownRef.current?.classList.add(openDropdownClass);
      iconRef.current?.classList.add(reverseIconClass);
    }
  }
  return (
    <div className="dropdown">
      <div className="dropdown__head" aria-label={title} aria-haspopup>
        <span className="dropdown__head__title">{title}</span>
        <span
          onClick={handleClickDropdown}
          className="dropdown__head__icon"
          ref={iconRef}></span>
      </div>
      <div className="dropdown__body" ref={dropdownRef}>
        {isContentList ? (
          <ul className="dropdown__body__list">
            {content.map((item) => (
              <li
                key={title + "-" + item}
                className="dropdown__body__list__item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="dropdown__body__sentence">{content}</p>
        )}
      </div>
    </div>
  );
}
