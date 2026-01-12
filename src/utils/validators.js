function validateUsername(value) {
    if (!value || value.trim() === "") {
        return "โปรดใส่ชื่อของคุณ";
    } 
}

function validateEmail(value) {
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!value || value.trim() === "") {
        return "โปรดใส่อีเมลของคุณ";
    } else if (!emailValidate.test(value)) {
        return "รูปแบบอีเมลไม่ถูกต้อง";
    } 
}

function validateMovie(value) {
    if (!value || value.trim() === "") {
        return "กรุณาเลือกหนังที่คุณชอบ";
    } 
}

function validateData(username,email,movie){
    const newErrors = {}
    const usernameErrorMessage = validateUsername(username)
    const emailErrorMessage = validateEmail(email)
    const movieErrorMessage = validateMovie(movie)

    if (usernameErrorMessage) newErrors.username = usernameErrorMessage;
    if (emailErrorMessage) newErrors.email = emailErrorMessage;
    if (movieErrorMessage) newErrors.movie = movieErrorMessage;

    if (Object.keys(newErrors).length === 0) {
        return {validation: true, errorMessage: newErrors}
    } else {
        return {validation: false, errorMessage: newErrors}
    }
}

export default validateData
