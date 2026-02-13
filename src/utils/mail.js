require('dotenv').config(); // load .env
const Mailgen = require('mailgen');
const nodemailer = require('nodemailer');

// Create transporter for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_SMTP_HOST,
  port: Number(process.env.MAILTRAP_SMTP_PORT), // ensure port is a number
  auth: {
    user: process.env.MAILTRAP_SMTP_USER,
    pass: process.env.MAILTRAP_SMTP_PASS,
  },
});

// Function to send email
const sendEmail = async ({ email, subject, mailgenContent }) => {
  try {
    const mailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: "Task Manager",
        link: "https://taskflow.com",
      },
    });

    const emailText = mailGenerator.generatePlaintext(mailgenContent);
    const emailHtml = mailGenerator.generate(mailgenContent);

    const mailOptions = {
      from: "test@example.com", // sender email
      to: email,                // recipient
      subject,
      text: emailText,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
  } catch (error) {
    console.error("❌ Email Service Failed. Check Mailtrap credentials in .env");
    console.error(error);
  }
};

// Generate Mailgen content for email verification
const emailVerificationMailGenContent = (username, verificationUrl) => ({
  body: {
    name: username,
    intro: "Welcome to Taskflow! We're very excited to have you on board.",
    action: {
      instructions: "Click the button below to verify your email:",
      button: {
        color: "#5d0ce8",
        text: "Verify Email",
        link: verificationUrl,
      },
    },
  },
  outro: "Need help? Just reply to this email. We'd love to help you out.",
});

// Generate Mailgen content for forgot password
const forgotPasswordMailGenContent = (username, passwordResetUrl) => ({
  body: {
    name: username,
    intro: "We received a request to reset your password.",
    action: {
      instructions: "Click the button below to reset your password:",
      button: {
        color: "#0b4beb",
        text: "Reset Password",
        link: passwordResetUrl,
      },
    },
  },
  outro: "Need help? Just reply to this email. We'd love to help you out.",
});

module.exports = {
  sendEmail,
  emailVerificationMailGenContent,
  forgotPasswordMailGenContent,
};
