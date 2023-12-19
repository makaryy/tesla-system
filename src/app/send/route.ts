import { NextRequest } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { generateHtml, schema } from "./utils";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const data = await schema.validate(body.data);

        const mailgun = new Mailgun(formData);
        const mg = mailgun.client({ username: "api", key: process.env.MAILGUN_API_KEY! });

        const { status } = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
            to: "biuro@teslasystem.pl",
            from: data.email,
            subject: "Wiadomość ze strony teslasystem.pl",
            html: generateHtml(data.message)
        });

        console.log(`Message sent --> sender: ${data.email}`);
        return Response.json({ status, message: "Wiadomość wysłana." });
    } catch (error) {
        console.error(error);
        return Response.json({ status: 500, message: "Wystąpił błąd podczas wysyłania wiadomości." });
    }
}
