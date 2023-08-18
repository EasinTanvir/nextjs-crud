"use client";
import React from "react";
import useSWR from "swr";

const User = () => {
  //@ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  return (
    <div>
      <h3>User Lists</h3>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <div>
          {data?.user.map((item: any) => (
            <div key={item._id}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default User;
