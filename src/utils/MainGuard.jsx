import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function MainGuard({children}) {

    const {signed, loading} = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log({signed, loading});
    // useEffect(() => {
    //     if (signed) {
    //         navigate("/home/student")
    //     }
    // }, [signed, navigate])
    
    return !loading ?
    ( signed ? ( <Navigate to={"/home/student"}/> ) : (children) ) : undefined;
}

export default MainGuard;