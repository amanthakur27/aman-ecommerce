import * as Yup from "yup"
export const loginSchema = Yup.object({
    email:Yup.string().email().required("Please enter your user id"),
    pass:Yup.string().min(6).required("Please enter your password"),
});