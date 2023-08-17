import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function AdminGuard({children}) {

    const {signed, loading, user} = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log({signed, loading});
    // useEffect(() => {
    //     if (signed) {
    //         navigate("/home/student")
    //     }
    // }, [signed, navigate])
    
    return !loading ?
    ( !signed ? ( <Navigate to={"/auth/usuario"}/> ) : ( user.email === 'admin@admin.com' ? children : navigate("/home/student") ) ) : undefined;
}

export default AdminGuard;