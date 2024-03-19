import React from "react";
import useFetch from "react-fetch-hook";

const UserFetch = ({ username }) => {
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/users/search?q=${username}`
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div className="error">Error</div>;
  }

  if (data && data.users && data.users.length > 0) {
    console.log(data);
    console.log(data.users);

    // const fetchedUser = data.users[0];
   return (data.users).map((element,index)=>{
    return (
      <div>
        <h1 className="title">User Details</h1>
        <h2 className="users">{element.firstName} {element.lastName}</h2>
        <p>{element.email}</p>
        <p>{element.phone}</p>
      </div>
    );
  })}

  return <div className="error">Error: user not found</div>;
};

export default UserFetch;