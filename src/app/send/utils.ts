import { object, string } from "yup";

export const schema = object({
    email: string().required().email(),
    message: string().required()
});

export const generateHtml = (message: string) => {
    return `
  <html>
  <head>
  <style type="text/css">
    span {
      text-decoration: underline;
      font-size: 11px;
    }
    p {
      font-size: 16px;
      white-space: pre-line;
    }
  </style>
  </head>
  <body>
  <span>Dostałeś następującą wiadomość ze strony tesla-system.pl: </span>
  <p>${message}</p>
  </body>
  </html>
`;
};
