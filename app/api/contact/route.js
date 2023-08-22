import { NextResponse }from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request){
  const { name, email, subject, message } = await request.json()
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.NODEMAILER_EMAIL}`,
      pass: `${process.env.NODEMAILER_PW}`,
    },
  });
    
  const mailOptions = {
    from: `${process.env.NODEMAILER_EMAIL}`,
    to: `${process.env.ARIZONA_SIGN_EMAIL}`,
    subject: `Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "email sent"
    },{
      status: 200
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({
      message: error
    },{
      status: 404
    })
  }
}