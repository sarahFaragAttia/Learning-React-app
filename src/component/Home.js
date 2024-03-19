
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserFetch from "./FetchUser";
const Home = () => {
    const [UsersData, setUsersData] = useState([]);
    const [value, setValue] = useState("");
    const[SearchedUser,SetSearchedUser]=useState()



    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => {
                setUsersData(res.data.users);
                console.log(res.data.users);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);
    const inputValue=(event)=>{
        setValue((event.target.value));
        
    }
    const HandleClick=(event)=>{
        
        SetSearchedUser(true);
        console.log(SearchedUser);
        event.preventDefault();
        
    }

    // const HandleClick=()=>{
    //     setUsersData((prevUsersData)=> 
    //     prevUsersData.filter(
    //         // search
    //         element =>{ if ((element.firstName).toLowerCase()== value.toLowerCase()){return element}}) )
        
    // }

    return (
        <div class="m-4 p-4">
            <div class="input-group w-50 start-50 translate-middle ">
                <input type="text" value={value} onChange={inputValue} className="form-control" placeholder="Search" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={HandleClick} type="button">
                        <i  className="bi bi-search"></i>
                    </button>
                </div>
            </div>

            <div className="container ">
                <div className="row justify-content-between m-4 ">
              {SearchedUser&&value?
            
               <UserFetch userName={value}  />:
              
                 UsersData.map((element,index) => {
                        return (
                     <Link to={`/details/${element.id}`} className="col-3 m-2 g-4    "  >     <div className="card  fs-6 " style={{fontSize:"10px"}}  key={index} >
                                <img src={element.image} className="card-img-top  " style={{height:"150px",width:"150px"}}  />
                                <div className="card-body">
                                    <p className="card-text"> User Name :{element.firstName} {element.lastName} </p>
                                    <p className="card-text"> User Address :{element.address.address} ,{element.address.city} </p>
                                </div>
                            </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;