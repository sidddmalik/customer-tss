import { useState } from "react";
import SupportForm from "./SupportForm";
import Axios from "axios";

function CreateSupport()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {Name: arr[0],EmailID:arr[1],PhoneNo:arr[2],Probtype: arr[3],Probleme: arr[4]};
        Axios.post("https://database-qzii.onrender.com/conRoute/create-con",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <SupportForm getState={getState}
                    NameValue=""
                    EmailIDValue=""
                    PhoneNoValue=""
                    ProbtypeValue=""
                    ProblemeValue="">
                Submit Ticket
            </SupportForm>
        </form>
    )
}
export default CreateSupport;