type Props = {
  title: string;
  content: string[] | string;
};

export default function DropdownContent({ title, content }: Props) {
  const isContentList = Array.isArray(content);

  if (!isContentList) {
    return <p className="dropdown__body__sentence">{content}</p>;
  }

  return (
    <ul className="dropdown__body__list">
      {content.map((item) => (
        <li key={title + "-" + item} className="dropdown__body__list__item">
          {item}
        </li>
      ))}
    </ul>
  );
}
