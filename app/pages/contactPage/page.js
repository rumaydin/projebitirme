"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#ddc69d] text-[#4B2E2E] min-h-screen p-6">
      <h1 className="text-4xl font-bold underline mb-6">İletişim</h1>
      <p className="text-center mb-6">
        Bize ulaşmak için aşağıdaki formu doldurun veya iletişim bilgilerimizi kullanın.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Ad Soyad:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#4B2E2E]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-posta:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#4B2E2E]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Konu:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#4B2E2E]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mesaj:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#4B2E2E]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#4B2E2E] text-white py-3 rounded-md hover:bg-[#3a2323] transition"
        >
          Gönder
        </button>
      </form>

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold mb-2">İletişim Bilgilerimiz</h2>
        <p>E-posta: <a href="mailto:destek@kultursanat.com" className="underline">destek@kultursanat.com</a></p>
        <p>Telefon: +90 555 555 55 55</p>
        <p>Adres: İstanbul, Türkiye</p>
      </div>
    </div>
  );
}