import { FormikHelpers } from "formik";
import { useState } from "react";
import { initialFormValues, resSchema } from "./utils";

type Values = typeof initialFormValues;
export const useContactForm = () => {
    const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any> = async (values, { resetForm }) => {
        try {
            const res = await fetch("/send", {
                method: "POST",
                body: JSON.stringify({ data: values })
            });
            const data = await resSchema.validate(await res.json());
            if (data.status === 200) {
                resetForm();
                setAlert({ type: "success", message: data.message });
            } else {
                setAlert({ type: "error", message: data.message });
            }
        } catch (error) {
            if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
                setAlert({ type: "error", message: error.message });
            } else {
                setAlert({ type: "error", message: "wystąpił błąd podczas wysyłania wiadomości, spróbuj ponownie" });
            }
        }
    };

    return {
        onSubmit,
        alert
    };
};
