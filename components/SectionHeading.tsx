type Props = {
  kicker: string;
  title: string;
  copy?: string;
  inverted?: boolean;
};

export function SectionHeading({ kicker, title, copy, inverted = false }: Props) {
  return (
    <div className={`section-heading ${inverted ? "section-heading-inverted" : ""}`}>
      <p className="kicker">{kicker}</p>
      <div>
        <h2>{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </div>
    </div>
  );
}
