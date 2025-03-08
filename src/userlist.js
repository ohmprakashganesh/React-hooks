import Card from "./card";

 function Userlist(){
     var list=[
        {name:"rabi",
         email:"rabi@gmail.com"},
         {name:"om",
         email:"om@gmail.com"},
         {name:"vikki",
         email:"vikki@gmail.com"},
         {name:"solu",
         email:"solu@gmail.com"},
     ];
     return(
        <div>
            <div>
               
                    {list.map(({name,email})=>
                        (
                            <Card name={name} email={email}/>
                            // <tr>
                            //    <td>{name}</td>
                            //    <td>{email}</td>
                            // </tr>
                            //transfered into card components
                        )
                    )}                             
            </div>
        </div>


     );
 }
export default Userlist