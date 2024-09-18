import React from 'react';

const UserPage = (props) => {
  return (
    <div>
      <h1>Users Page (SSG)</h1>
      <ul>
        {props.data.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
