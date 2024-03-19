import React, { useState , useEffect } from "react";
import useFetch from "react-fetch-hook";
import axios from "axios";

const UserFetch = (props) => {
  const [searchUser,setSearchUser]=useState([])
  const [loading,setloading]=useState(true)
  // const [error,setError]=useState(true)
 useEffect(()=> {axios.get(`https://dummyjson.com/users/search?q=${props.userName}`)
 
 .then(
  res=>{setSearchUser(res.data.users);
    setloading(false)
  console.log(res.data.users)})
 .catch(error=>{console.log('Error fetching data:', error)})},[])
  
return(

  <>
  {loading&& <p>Loading....</p>}
  {searchUser.length == 0 && <p>user not found </p>}
  {searchUser&& searchUser.map((element,index)=>{
   return(<div className="m-4 p-4"> 
       <div className="card  fs-6  " style={{fontSize:"10px"}}  key={index} >
                                <img src={element.image} className="card-img-top  " style={{height:"100px",width:"100px"}}  />
                                <div className="card-body">
                                    <p className="card-text"> User Name :{element.firstName} {element.lastName} </p>
                                    <p className="card-text"> User Address :{element.address.address} ,{element.address.city} </p>
                                </div>
                            </div>
                          
 
  </div>)})}
  </>)}

// {/* //   const { data, isLoading, error } = useFetch(
// //     `https://dummyjson.com/users/search?q=${username}`
// //   );

// //   if (isLoading) { */}
// {/* //     return <h2>Loading...</h2>;
// //   }

// //   if (error) { */}
// //     return <div className="error">Error</div>;
// //   }

// //   if (data && data.users && data.users.length > 0) {
// //     console.log(data);
// //     console.log(data.users);

// //     // const fetchedUser = data.users[0];
// //    return (data.users).map((element,index)=>{
// //     return (
// //       <div>
// //         <h1 className="title">User Details</h1>
// //         <h2 className="users">{element.firstName} {element.lastName}</h2>
// //         <p>{element.email}</p>
// //         <p>{element.phone}</p>
// //       </div>
// //     );
// //   })}

// //   return <div className="error">Error: user not found</div>;
// // };

export default UserFetch;