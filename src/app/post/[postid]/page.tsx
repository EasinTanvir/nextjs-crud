import React from "react";

const PostId = async ({ params }: any) => {
  const { postid } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postid}`
  );
  const data = await res.json();
  return <div>PostId {data.title}</div>;
};

export default PostId;
