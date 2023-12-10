import { number, object, string } from "yup";

export const initialFormValues = {
    message: "",
    email: ""
};

export const schema = object({
    email: string().required().email(),
    message: string().required()
});

export const resSchema = object({
    status: number().required(),
    message: string().required()
});
