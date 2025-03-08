import React from "react";
function Card({name,email}){
    return(
        <div>
        <tr>
            <td style={{ fontSize:20, fontWeight:20, color:"red"}}>{name}</td>
            <td>{email}</td>
        </tr>
        </div>
    );
}
export default Card