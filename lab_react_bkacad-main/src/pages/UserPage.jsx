import { useContext } from "react";
import { ListViewUser } from "../components/ListViewUser";
import { AppContext } from "../context/AppContext";

export function UserPage(){

    const {users, nextPreviousPage, page} = useContext(AppContext);

    return (
        <div>
            <ListViewUser users={users}/>
            <button onClick={()=> nextPreviousPage("previous")} className="btn btn-secondary mx-2">Prev</button>
            <b>{page}</b>
            <button onClick={()=> nextPreviousPage("next")} className="btn btn-primary mx-2">Next</button>
        </div>
    )
}