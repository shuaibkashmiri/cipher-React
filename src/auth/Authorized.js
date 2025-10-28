import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Authorized =  () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const checkAuth = async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/auth/user-auth",{headers:{Authorization:token}});
        if (res.data.success !== true) {
            toast.error(res.data.message)
          return navigate("/login");
        } 
        else if (res.data.success === true){
          return true;
        }
    } catch (error) {
      console.log(error);
      navigate("/login")
      toast.error("Something Went Wrong!");
    }
  };


  

  useEffect(() => {
    checkAuth();
  }, []);
};

export default Authorized;