import { useParams } from "react-router-dom";
import SupportForm from "./SupportForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditSupport() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ Name: "", EmailID: "", PhoneNo: "",Probtype:"", Probleme: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://database-qzii.onrender.com/conRoute/update-con/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { Name,  EmailID , PhoneNo ,Probtype, Probleme} = res.data;
                    setInitialValue({ Name,  EmailID , PhoneNo ,Probtype, Probleme });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { Name: newData[0], EmailID: newData[1], PhoneNo: newData[2],Probtype: newData[3],Probleme: newData[4] };
        Axios.put("https://database-qzii.onrender.com/conRoute/update-con/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <SupportForm getState={getState}
                NameValue={initialValue.Name}
                EmailIDValue={initialValue.EmailID}
                PhoneNoValue={initialValue.PhoneNo}
                ProbtypeValue={initialValue.Probtype}
                ProblemeValue={initialValue.Probleme}
                >
                    Update Support
            </SupportForm>
        </form>
    )
}
export default EditSupport;