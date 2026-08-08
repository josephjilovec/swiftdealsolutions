import Link from "next/link";

export default function NotFound() {
  return <section className="not-found shell-wide"><p className="kicker">404</p><h1>This route is not part of the private network.</h1><p>Return to the main site or start a new inquiry.</p><div><Link className="button button-dark" href="/">Return home</Link><Link className="text-link" href="/submit">Private inquiry <span>↗</span></Link></div></section>;
}
