import React from "react";

const UserPage = ({ data }) => {
  return (
    <div>
      <h1>Users Page (Server-Side Rendering)</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
