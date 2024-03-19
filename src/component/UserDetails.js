// import React from "react";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// const UserDetails=()=>{
//     const{id}=useParams()
//     const [UserDetails,setUserDetail]=useState([])
//     useEffect(()=> axios.get(`https://dummyjson.com/users/${id}`)
//     .then(res=>{setUserDetail(res);
//      console.log(res)})
//      .catch((error)=>{console.log(error)}       ),[id])


// }

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

const UserDetails = () => {
  const params = useParams();
  const [UserDetails, setUserDetail] = useState();
  // ADD NEW COMMENT HERE
  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${params.index}`)
      .then(res => {
        setUserDetail(res.data);
        console.log(res);
      })  
      .catch((error) => {
        console.log(error);
      })
  }, []);

return (
  <div>
    <h1> Customer's Details</h1>
    <p> Customer's Name :  {UserDetails.firstName} {UserDetails.lastName}</p>
    <p> Customer's Age:   {UserDetails.age} years old</p>
    <p> Customer's Address : {UserDetails.address.address} , {UserDetails.address.city}</p>
  </div>
)
}

export default UserDetails;