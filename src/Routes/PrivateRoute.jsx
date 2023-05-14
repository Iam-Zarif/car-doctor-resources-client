/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Children, useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    if(loading){
        return (
          <>
            <div
              className="radial-progress"
              style={{
                "--value": "70",
                "--size": "12rem",
                "--thickness": "2rem",
              }}
            >
              70%
            </div>
          </>
        );

    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace>

    </Navigate>
};

export default PrivateRoute;