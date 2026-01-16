// components/WhatsAppButton.jsx
"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+2348032516519"; // Your WhatsApp number
  const message = "Hello! I found your website and want to chat."; // Default message

  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "80px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
