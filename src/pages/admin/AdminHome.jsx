import { TextField } from "@mui/material";
import StickyHeadTable from "../../components/Table";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/admin";

function HomeAdmin() {

    const [students, setStudent] = useState([]);

    useEffect(() => {
       async function getUsersData() {
        try {
           const users = await getUsers();
           if (users) {
                setStudent(users);
           }
           } catch (error) {
                console.log(error);
           }
       }
       getUsersData();
    }, []);

    return (
    <>
        {/* <TextField /> */}
        <StickyHeadTable students={students} />;
    
    
    </>
    );
}

export default HomeAdmin;