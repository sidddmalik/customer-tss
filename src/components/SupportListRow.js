import Axios from "axios";
import { Link } from "react-router-dom";

function SupportListRow(props) {
    const { _id, Name, EmailID, PhoneNo,Probtype, Probleme} = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://database-qzii.onrender.com/conRoute/delete-con/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{Name}</td>
            <td>{EmailID}</td>
            <td>{PhoneNo}</td>
            <td>{Probtype}</td>
            <td>{Probleme}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/edit-con/" + _id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default SupportListRow;