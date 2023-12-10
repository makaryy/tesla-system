"use client";
import Loader from "@/components/Loader";
import { Formik } from "formik";
import { twMerge } from "tailwind-merge";
import { initialFormValues, schema } from "./utils";
import { useContactForm } from "./hooks";
import { motion } from "framer-motion";

export const ContactForm = () => {
    const { alert, onSubmit } = useContactForm();
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="mt-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Skontaktuj się</h1>
            <Formik
                initialValues={initialFormValues}
                validationSchema={schema}
                validateOnBlur={false}
                validateOnChange={false}
                validateOnMount={false}
                onSubmit={onSubmit}>
                {({ isSubmitting, values, errors, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <div className="relative">
                            <motion.input
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                id="email"
                                className={twMerge(
                                    "peer w-full px-4 py-2 rounded-md border-2 border-accent-200 focus:outline-accent-100",
                                    errors.email && "border-red-500 focus:outline-red-500"
                                )}
                            />
                            <label
                                htmlFor="email"
                                className={twMerge(
                                    "absolute top-2 left-4 peer-focus:-translate-y-7 peer-focus:-translate-x-[2px] peer-focus:scale-90 transition-transform pointer-events-none",
                                    values.email && "-translate-y-7 scale-90 -translate-x-[2px]"
                                )}>
                                E-mail
                            </label>
                            {errors.email && <div className="ml-4 text-sm first-letter:uppercase text-red-500">{errors.email}</div>}
                        </div>
                        <div className="relative ">
                            <textarea
                                value={values.message}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="message"
                                id="message"
                                cols={30}
                                rows={10}
                                className={twMerge(
                                    "peer w-full px-4 py-2 m-0 rounded-md border-2 border-accent-200 resize-none focus:outline-accent-100",
                                    errors.message && "border-red-500 focus:outline-red-500"
                                )}
                            />
                            <label
                                htmlFor="message"
                                className={twMerge(
                                    "absolute top-2 left-4 peer-focus:-translate-y-7 peer-focus:-translate-x-[2px] peer-focus:scale-90 transition-transform pointer-events-none",
                                    values.message && "-translate-y-7 scale-90 -translate-x-[2px]"
                                )}>
                                Wiadomość
                            </label>
                            {errors.message && <div className="ml-4 text-sm first-letter:uppercase text-red-500">{errors.message}</div>}
                        </div>

                        <button
                            type="submit"
                            className={twMerge(
                                "h-10 px-4 py-2 rounded-md hover:bg-primary-200 bg-primary-100 text-bg-100 transition-colors",
                                isSubmitting && "bg-primary-200"
                            )}>
                            {isSubmitting ? <Loader /> : "Wyślij"}
                        </button>

                        {!!alert && (
                            <p
                                className={twMerge(
                                    "px-6 py-3 border-2 rounded-md text-center text-text-100",
                                    alert.type === "success" ? "border-green-600" : "border-red-500"
                                )}>
                                {alert.message}
                            </p>
                        )}
                    </form>
                )}
            </Formik>
        </motion.div>
    );
};
