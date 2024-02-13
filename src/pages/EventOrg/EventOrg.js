import React from "react";
import EventList from "../EventList/EventList";
import { useNavigate } from "react-router-dom";
// import {Menu} from "antd";
function EventOrg() {
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //   navigate('/login')
  // }

  // },[])

  return (
    <>
      {/* <Sidebar/> */}
      <EventList />
    </>
  );
}

export default EventOrg;
