type Props = {
  label: string;
};

export default function Tag({ label }: Props) {
  return (
    <div className="tag">
      <p className="tag__label">{label}</p>
    </div>
  );
}
