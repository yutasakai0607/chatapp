import {sendMail} from "./mailsender.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const info = await sendMail({email, name, clientURL});
};