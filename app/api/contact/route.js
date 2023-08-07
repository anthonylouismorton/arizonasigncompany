import { NextResponse }from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request){
  const { name, email, subject, message } = await request.json()
  console.log(name, email, subject, message);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.NODEMAILER_EMAIL}`,
      pass: `${process.env.NODEMAILER_PW}`,
    },
  });
    
  const mailOptions = {
    from: 'anthony.morton@prestigeworldwidewebdesignllc.com',
    to: 'anthony.morton@prestigeworldwidewebdesignllc.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
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