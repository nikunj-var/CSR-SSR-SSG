const UserPage = (props) => {
  console.log(props.data);
  return (
    <div>
      <h1>Profile page of {props?.data?.title}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos`)
  ).json();
  console.log("data = ", data);
  const allUserIds = data.map((user) => user.id);
  console.log("all user id", allUserIds);
  return {
    paths: allUserIds.map((userId) => ({ params: { id: `${userId}` } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  ).json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
