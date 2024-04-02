import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="next">Home Page</h1>
      <Link href="/blog">blogPage</Link>
    </div>
  );
}
