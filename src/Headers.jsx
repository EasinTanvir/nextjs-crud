import React from "react";
import Link from "next/link";

const Headers = () => {
  return (
    <div>
      <ul className="list">
        <li>
          <Link href="/post">Post</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Headers;
//export const dynamic = 'force-dynamic'
