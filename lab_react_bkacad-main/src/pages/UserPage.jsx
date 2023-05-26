import { useContext } from "react";
import { ListViewUser } from "../components/ListViewUser";
import { AppContext } from "../context/AppContext";

export function UserPage(props){

    const {users} = useContext(AppContext);

    return (
        <div>
            <ListViewUser users={users}/>
        </div>
    )
}