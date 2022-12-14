import * as Yup from "yup"
export const ModalSchema = Yup.object({
    cate:Yup.string().min(20).required("Please enter your product Category"),
    price:Yup.number().required("Please enter your Price"),
    des:Yup.string().min(30).required("Please enter your Description"),

});