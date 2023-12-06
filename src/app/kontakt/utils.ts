import { object, string } from "yup";

export const initialFormValues = {
    message: "",
    email: ""
};

export const schema = object({
    email: string().email().required(),
    message: string().required()
});
