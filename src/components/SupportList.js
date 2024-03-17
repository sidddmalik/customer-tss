import Axios from "axios";
import { useEffect, useState } from "react";
import SupportListRow from "./SupportListRow";

function SupportList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://database-qzii.onrender.com/conRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () =>{
        return arr.map((val,ind)=>{  
            return <SupportListRow obj={val}/>
        })
    }
    return (
        <table style={{maxWidth:"60%", margin: "50px auto"}} class="table table-bordered table-striped table-success">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">EmailID</th>
                    <th class="text-center">PhoneNo</th>
                    <th class="text-center">Probtype</th>
                    <th class="text-center">Probleme</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default SupportList;