import { useEffect, useState } from "react";

function SupportForm(props) {
    const [Name, setName] = useState(props.NameValue);
    const [EmailID, setEmailID] = useState(props.EmailIDValue);
    const [PhoneNo, setPhoneNo] = useState(props.PhoneNoValue);
    const [Probtype, setProbtype] = useState(props.ProbtypeValue);
    const [Probleme, setProbleme] = useState(props.ProblemeValue);
    const [errors, setErrors] = useState({
        Name: '',
        EmailID: '',
        PhoneNo: '',
        Probtype: '',
        Probleme: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setName(props.NameValue);
        setEmailID(props.EmailIDValue);
        setPhoneNo(props.PhoneNoValue);
        setProbtype(props.ProbtypeValue);
        setProbleme(props.ProblemeValue);
    }, [props.NameValue, props.EmailIDValue, props.PhoneNoValue, props.ProbtypeValue, props.ProblemeValue]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'Name':
                setName(value);
                break;
            case 'EmailID':
                setEmailID(value);
                break;
            case 'PhoneNo':
                setPhoneNo(value);
                break;
            case 'Probtype':
                setProbtype(value);
                break;
            case 'Probleme':
                setProbleme(value);
                break;
            default:
                break;
        }
        validateInput(name, value);
    }

    const validateInput = (name, value) => {
        switch (name) {
            case 'Name':
                if (!value) {
                    setErrors({ ...errors, [name]: 'Name is required' });
                } else {
                    setErrors({ ...errors, [name]: '' });
                }
                break;
            case 'EmailID':
                if (!value || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    setErrors({ ...errors, [name]: 'Invalid email format' });
                } else {
                    setErrors({ ...errors, [name]: '' });
                }
                break;
            case 'PhoneNo':
                if (!value || value.length !== 10) {
                    setErrors({ ...errors, [name]: 'Phone number must be 10 digits' });
                } else {
                    setErrors({ ...errors, [name]: '' });
                }
                break;
            case 'Probtype':
                if (!value) {
                    setErrors({ ...errors, [name]: 'Problem type is required' });
                } else {
                    setErrors({ ...errors, [name]: '' });
                }
                break;
            case 'Probleme':
                if (!value) {
                    setErrors({ ...errors, [name]: 'Problem description is required' });
                } else {
                    setErrors({ ...errors, [name]: '' });
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const hasErrors = Object.values(errors).some(error => error !== '');
        setIsFormValid(!hasErrors);
    }, [errors]);

    const handleClick = () => {
        // Check for any validation errors before submitting the form
        if (!isFormValid) {
            return;
        }
        const arr = [Name, EmailID, PhoneNo, Probtype, Probleme];
        props.getState(arr);
    }

    return (
        <div style={{ maxWidth: "40%", margin: "0px auto" }}>
            <input
                name="Name"
                value={Name}
                onChange={handleChange}
                className="form-control my-3"
                placeholder="Enter your Name"
            />
            {errors.Name && <div style={{ color: 'red' }}>{errors.Name}</div>}

            <input
                name="EmailID"
                value={EmailID}
                onChange={handleChange}
                className="form-control my-3"
                placeholder="Enter your EmailID"
            />
            {errors.EmailID && <div style={{ color: 'red' }}>{errors.EmailID}</div>}

            <input
                name="PhoneNo"
                value={PhoneNo}
                onChange={handleChange}
                className="form-control my-3"
                placeholder="Is your PhoneNo"
            />
            {errors.PhoneNo && <div style={{ color: 'red' }}>{errors.PhoneNo}</div>}

            <select
                name="Probtype"
                value={Probtype}
                onChange={handleChange}
                className="form-control my-3"
            >
                <option value="">Select Problem Type</option>
                <option value="technical">Technical</option>
                <option value="electrical">Electrical</option>
                <option value="plumbing">Plumbing</option>
                <option value="carpentry">Carpentry</option>
                <option value="mechanic">Mechanic</option>
                <option value="painter">Painter</option>
            </select>
            {errors.Probtype && <div style={{ color: 'red' }}>{errors.Probtype}</div>}

            <input
                name="Probleme"
                value={Probleme}
                onChange={handleChange}
                className="form-control my-3"
                placeholder="Discuss your Probleme Here"
            />
            {errors.Probleme && <div style={{ color: 'red' }}>{errors.Probleme}</div>}

            <button
                onClick={handleClick}
                className="btn btn-success my-3 d-block mx-auto"
                type="submit"
                disabled={!isFormValid}
            >
                {props.children}
            </button>
        </div>
    )
}

export default SupportForm;
