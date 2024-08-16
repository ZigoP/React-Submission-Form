function FormValidation(inputs) {
    const errors = {};
    //firstName
    //console.log(inputs)
    if(inputs.firstName === "") {
        errors.firstName = "First Name is required!";
    }
    //lastName
    if(inputs.lastName === "") {
        errors.lastName = "Last Name is required!";
    }
    //email
    if(inputs.email === "") {
        errors.email = "Email is required!";
    }
    //contact
    if(inputs.contact === "") {
        errors.contact = "Contact is required!";
    }
    //gender
    if(inputs.gender === "") {
        errors.gender = "Gender is required!";
    }
    //upload
    if(inputs.upload === "") {
        errors.upload = "Upload is required!";
    }
    //url
    if(inputs.URL === "") {
        errors.URL = "URL is required!";
    }
    return errors;
}

export default FormValidation;