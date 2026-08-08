import Link from "next/link";

type Props = { compact?: boolean };

export function BrandMark({ compact = false }: Props) {
  return (
    <Link className="brand" href="/" aria-label="Swift Deal Solutions home">
      <span className="brand-diamond" aria-hidden="true"><i>S</i><b>D</b></span>
      {!compact && (
        <span className="brand-copy">
          <strong>Swift Deal</strong>
          <small>Solutions</small>
        </span>
      )}
    </Link>
  );
}
