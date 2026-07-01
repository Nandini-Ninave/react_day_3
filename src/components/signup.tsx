import * as yup from 'yup';
export const signup = yup.object({
    username:yup.string().min(4, "Username must be atleast 4 characters").required("Username is required"),
    email:yup.string().email("Invalid email format").required("Email is required"),
    password:yup.string().min(4, "Password must be atleast 4 characters").required("Password is required")
})

