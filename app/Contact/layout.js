import React from "react";

export const metadata = {
  title: 'Contact',
  description: 'Contact Us',
  keywords: 'contact, contact us, email, phone, hours of operation'
}

export default function ContactLayout({ children }) {
  return (
      <section>
        {children}
      </section>
  )
}
