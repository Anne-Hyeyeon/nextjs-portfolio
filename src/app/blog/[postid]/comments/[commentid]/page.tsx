import React from "react";

export default function page({
  params,
}: {
  params: { postid: string; commentid: string };
}) {
  const testFunc = (number: number) => {
    return number + 2;
  };

  const random = testFunc(5);

  if (random === 7) {
    throw new Error("에러다");
  }
  return (
    <div>
      {params.postid} 포스트의 {params.commentid}번째 코멘트!
      {testFunc(2) === 4}
    </div>
  );
}
