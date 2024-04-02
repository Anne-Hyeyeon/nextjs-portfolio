import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "BlogList",
};

export default function page() {
  return (
    <div>
      <Link href="/">Home</Link>

      <h1>
        <Link href="/blog/1" replace>
          Blog Post 1
        </Link>
      </h1>
      <h1>
        <Link href="/blog/2"> Blog Post 2</Link>
      </h1>
      <h1>
        <Link href="/blog/3"> Blog Post 3</Link>
      </h1>
      <h1>
        <Link href="/blog/4"> Blog Post 4</Link>
      </h1>
      <h1>
        <Link href="/blog/5"> Blog Post 5</Link>
      </h1>
      <h1>
        <Link href="/blog/6"> Blog Post 6</Link>
      </h1>
      <h1>
        <Link href="/blog/7"> Blog Post 7</Link>
      </h1>
      <h1>
        <Link href="/blog/8"> Blog Post 8</Link>
      </h1>
    </div>
  );
}
