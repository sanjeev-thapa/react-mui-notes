import * as yup from "yup";

const noteSchema = yup.object({
    title: yup.string().required().min(5).max(255),
    details: yup.string().required().min(10).max(255),
    category: yup.string().required()
});

export default noteSchema;