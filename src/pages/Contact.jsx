// src/pages/Contact.jsx
import React from 'react';
import { Typography, Button, Textarea } from "@material-tailwind/react";
import ComplexNavbar from '../components/Navbar'; // นำเข้าคอมโพเนนต์ ComplexNavbar
import FooterWithLogo from '../components/Footer';
import SpeedDialWithTextOutside from '../components/SpeedDialWithTextOutside';
const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <ComplexNavbar /> {/* แสดง Navbar ที่นี่ */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <Typography variant="h3" color="blue-gray" className="mb-4">
          ติดต่อเรา
        </Typography>
        <Typography variant="paragraph" className="mb-8 text-center">
          เราต้องการที่จะได้ยินจากคุณ! กรุณากรอกแบบฟอร์มด้านล่างและเราจะติดต่อกลับคุณโดยเร็วที่สุด
        </Typography>
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              ชื่อ
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="ชื่อของคุณ"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="อีเมลของคุณ"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              ข้อความ
            </label>
            <Textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="ข้อความของคุณ"
              required
              rows={4}
            />
          </div>
          <Button type="submit" color="blue" className="w-full">
            ส่งข้อความ
          </Button>
        </form>
      </div>
      <div className="fixed bottom-16 right-8 z-10">
            <SpeedDialWithTextOutside />

          </div>
      <div className="mt-10">
      <FooterWithLogo />

    </div>
    </div>
     
  );
};

export default Contact;
