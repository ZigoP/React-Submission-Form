import { useEffect, useState, useRef } from "react";
import "./App.css";
import FormValidation from "./FormValidation";

function App() {

    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "Male",
        subject: {
            english: false,
            maths: false,
            physics: false
        },
        upload: "",
        URL: "",
        selectBox: "Food",
        about: ""
    });

    const inputRefs = useRef({})

    const [errors, setErrors] = useState({});

    const setGivenInfo = (event) => {
        //console.log(event.target)
        setPersonalInfo(
            info => ({
                ...info, [event.target.name]: event.target.value
            })
        )
        inputRefs.current[event.target.name] = event.target.value;
    }
    const handleCheckboxChange = (event) => {
        setPersonalInfo(
            info => ({
                ...info, subject: {
                    ...info.subject, [event.target.name]: event.target.checked
                }
            })
        )
    }
    const submitForm = (event) => {
        event.preventDefault();
        setErrors(FormValidation(personalInfo));

    }

    const resetForm = () => {
        setPersonalInfo({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            gender: "Male",
            subject: {
                english: false,
                maths: false,
                physics: false
            },
            upload: "",
            URL: "",
            selectBox: "Food",
            about: ""
        })
    }

    const isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };

    useEffect(() => {
        Object.entries(errors).map(([key, value]) =>
            //console.log("key: "+ key + " value: " + value);
            //console.log(inputRefs.current[key])
            //inputRefs.current[key].className += "focusedInput"
            //console.log(inputRefs.current[key].value)
            inputRefs.current[key].value === "" ? inputRefs.current[key].classList.add("focusedInput") : inputRefs.current[key].classList.remove("focusedInput")
        )

    })

    return (
        <div id="wrapperDiv">
            <h1>Form in React</h1>
                <form>
                    {/*First Section: TextInputs*/}
                    <label>First Name<span className={"requiredField"}>*</span></label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={personalInfo.firstName}
                        onChange={setGivenInfo}
                        ref={(el) => (inputRefs.current['firstName'] = el)}/>
                    {errors.firstName && personalInfo.firstName === "" &&  <p className="errorMessage">{errors.firstName}</p>}
                    <label>Last Name<span className={"requiredField"}>*</span></label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={personalInfo.lastName}
                        onChange={setGivenInfo}
                        ref={(el) => (inputRefs.current['lastName'] = el)}/>
                    {errors.lastName && personalInfo.lastName === "" &&  <p className="errorMessage">{errors.lastName}</p>}
                    <label>Email<span className={"requiredField"}>*</span></label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={personalInfo.email}
                        onChange={setGivenInfo}
                        ref={(el) => (inputRefs.current['email'] = el)}/>
                    {errors.email && personalInfo.email === "" &&  <p className="errorMessage">{errors.email}</p>}
                    <label>Contact<span className={"requiredField"}>*</span></label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={personalInfo.contact}
                        onChange={setGivenInfo}
                        ref={(el) => (inputRefs.current['contact'] = el)}/>
                    {errors.contact && personalInfo.contact === "" &&  <p className="errorMessage">{errors.contact}</p>}
                    {/*Second Section: RadioButtons*/}
                    <label>Gender<span className={"requiredField"}>*</span></label>
                    <div className="group">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value={"Male" || personalInfo.gender}
                            checked={personalInfo.gender === "Male"}
                            onChange={setGivenInfo}/>Male
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value={"Female" || personalInfo.gender}
                            checked={personalInfo.gender === "Female"}
                            onChange={setGivenInfo}/>Female
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value={"Other" || personalInfo.gender}
                            checked={personalInfo.gender === "Other"}
                            onChange={setGivenInfo}/>Other
                    </div>
                    <label>Best Subject</label>
                    <div className="group">
                    <input
                        type="checkbox"
                        name="english"
                        id="english"
                        checked={personalInfo.subject.english}
                        onChange={handleCheckboxChange}/>English
                    <input
                        type="checkbox"
                        name="maths"
                        id="maths"
                        checked={personalInfo.subject.maths}
                        onChange={handleCheckboxChange}/>Maths
                    <input
                        type="checkbox"
                        name="physics"
                        id="physics"
                        checked={personalInfo.subject.physics}
                        onChange={handleCheckboxChange}/>Physics
                    </div>
                    {/*Third Section: Upload*/}
                    <label>Upload Resume<span className={"requiredField"}>*</span></label>
                    <input
                        type="file"
                        id="upload"
                        name="upload"
                        value={personalInfo.upload}
                        onChange={setGivenInfo}
                        ref={(el) => (inputRefs.current['upload'] = el)}/>
                    {errors.upload && personalInfo.upload === "" &&  <p className="errorMessage">{errors.upload}</p>}
                    <label>Enter URL<span className={"requiredField"}>*</span></label>
                    <input
                        type="text"
                        id="URL"
                        name="URL"
                        value={personalInfo.URL}
                        onChange={setGivenInfo}
                        ref={(el) => (inputRefs.current['URL'] = el)}/>
                    {errors.URL && personalInfo.URL === "" &&  <p className="errorMessage">{errors.URL}</p>}
                    <label>Select your choice</label>
                    <select
                        name="selectBox"
                        id="selectBox"
                        value={personalInfo.selectBox}
                        onChange={setGivenInfo}>
                        <option value="Food">Food</option>
                        <option value="Drink">Drink</option>
                        <option value="Other">Other</option>
                    </select>
                    {/*Fourth Section: TextArea*/}
                    <label>About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        placeholder="Something about you"
                        value={personalInfo.about}
                        onChange={setGivenInfo}>
                </textarea>
                    {/*Fifth Section: Buttons*/}
                    <label>Submit or Reset</label>
                    <input
                        type="submit"
                        value="Submit"
                        onClick={submitForm}/>
                    <input
                        type="button"
                        value="Reset"
                        onClick={resetForm}/>
                </form>
        </div>
    )
}

export default App;