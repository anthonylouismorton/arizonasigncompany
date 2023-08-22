import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


export async function POST(request){
  const formData = await request.formData();

  let name, email, description, phoneNumber, file;
  
  for (const pair of formData.entries()) {
    console.log(pair)
    const [key, value] = pair;
    if (key === 'name') {
      name = value;
    } 
    else if (key === 'email') {
      email = value;
    } 
    else if (key === 'description') {
      description = value;
    } 
    else if (key === 'phoneNumber') {
      phoneNumber = value;
    } 
    else {
      file = value;
    }
  };
  console.log(file, "this is the file")
  const fileBuffer = await file.arrayBuffer();
  const fileBufferUint8Array = new Uint8Array(fileBuffer);
  const fileBufferBuffer = Buffer.from(fileBufferUint8Array);
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
    subject: 'Request for Installation Quote',
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nCrane Lift Description: ${description}`,
    attachments: [
      {
        filename: file.name,
        content: fileBufferBuffer,
        contentType: file.type
      },
    ],
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