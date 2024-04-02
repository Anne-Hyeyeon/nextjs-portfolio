import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    postid: string;
  };
};

export const generateMetaData = ({ params }: Props): Metadata => {
  return {
    title: `Blog Post ${params.postid}`,
  };
};

export default function page({ params }: Props) {
  return (
    <div>
      <h1 className="text-9xl">Details Page with the id: {params.postid}</h1>
    </div>
  );
}
