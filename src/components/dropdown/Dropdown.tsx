import { useRef } from "react";

type Props = {
  title: string;
  content: string[] | string;
};

export default function Dropdown({ title, content }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isContentList = Array.isArray(content);

  function handleClickDropdown() {
    const openDropdownClass = "dropdown--open";
    if (dropdownRef.current?.classList.contains(openDropdownClass)) {
      dropdownRef.current.classList.remove(openDropdownClass);
    } else {
      dropdownRef.current?.classList.add(openDropdownClass);
    }
  }
  return (
    <div aria-expanded="false" className="dropdown" ref={dropdownRef}>
      <button
        onClick={handleClickDropdown}
        className="dropdown__head"
        aria-label={title}
        aria-haspopup>
        <span className="dropdown__head__title">{title}</span>
        <span className="dropdown__head__icon" aria-hidden="true"></span>
      </button>
      <div className="dropdown__body" aria-hidden="true">
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
