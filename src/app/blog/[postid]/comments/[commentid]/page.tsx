import React from "react";

export default function page({
  params,
}: {
  params: { postid: string; commentid: string };
}) {
  return (
    <div>
      {params.postid} 포스트의 {params.commentid}번째 코멘트!
    </div>
  );
}
