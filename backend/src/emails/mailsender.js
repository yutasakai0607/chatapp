import nodemailer from "nodemailer";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";
import "dotenv/config"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,          // 自分のGmailアドレス
    pass: process.env.SEND_MAILER_PASS_KEY // アプリパスワード
  }
});

export const sendMail = async ({email, name, clientURL}) => {
  const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,          // 実際に届くか確認したい宛先
      subject: "テストメール",
      text: createWelcomeEmailTemplate(name, clientURL)
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("送信エラー:", error);
    } else {
      console.log("送信成功:", info.response);
    }
  });
}
