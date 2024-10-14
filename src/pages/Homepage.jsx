import React, { useState } from 'react';
import { Textarea } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { products } from '../components/Product';
import ComplexNavbar from "../components/Navbar";
import CarouselWithContent from "../components/CarouselWithContent";
import FooterWithLogo from "../components/Footer";
import NotBotDialog from "../components/NotBotDialog";
import CommentBoxTextarea from '../components/masages';
import { useMediaQuery } from 'react-responsive';
import DefaultPagination from '../components/DefaultPagination';
import SpeedDialWithTextOutside from '../components/SpeedDialWithTextOutside';
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const Homepage = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setTrackingCode(e.target.value);
  };

  const handleTrack = () => {
    if (trackingCode.length !== 10) {
      setError('กรุณากรอกรหัสติดตามให้ครบ 10 หลัก');
      return;
    }

    const foundData = products.find(item => item.trackingCode === trackingCode);
    setTrackingData(foundData);
    setError(foundData ? '' : 'ไม่พบรหัสติดตามนี้ในระบบ');
    setOpenDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-black">
      <ComplexNavbar />
      <div className="flex w-full justify-center items-start mt-8 gap-6">
        <div className="flex-grow flex flex-col items-center justify-start py-2 max-w-3xl">
          <CarouselWithContent />

          <h2 className="text-4xl font-bold mb-4 text-center mt-10">ติดตามพัสดุของคุณ</h2>
          <p className="text-xl mb-10 text-center mt-4">ป้อนรหัสติดตาม 10 หลักด้านล่าง</p>

          <div className="max-w-lg w-full p-6 shadow-lg rounded-lg bg-white">
            <input
              type="text"
              value={trackingCode}
              onChange={handleInputChange}
              placeholder="Enter 10-digit tracking code"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 bg-white"
            />
            <button
              onClick={handleTrack}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Track Package
            </button>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="p-6 rounded-lg shadow-lg bg-white flex items-center space-x-4 mb-6">
              <InformationCircleIcon className="h-6 w-6 text-blue-500" />
              <div>
                <h3 className="text-xl font-bold mb-2">การติดตามแบบเรียลไทม์</h3>
                <p>รับข้อมูลอัปเดตเกี่ยวกับตําแหน่งของพัสดุภัณฑ์ของคุณขณะที่พัสดุผ่านกระบวนการจัดส่ง</p>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-white flex items-center space-x-4 mb-6">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-xl font-bold mb-2">เข้าถึงได้ง่าย</h3>
                <p>ติดตามพัสดุของคุณด้วยการคลิกเพียงไม่กี่ครั้งโดยใช้อินเทอร์เฟซที่เรียบง่ายของเรา</p>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-white flex items-center space-x-4 mb-6">
              <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
              <div>
                <h3 className="text-xl font-bold mb-2">สนับสนุนลูกค้า</h3>
                <p>ทีมสนับสนุนของเราพร้อมช่วยเหลือคุณหากมีคําถามหรือปัญหาใด ๆ</p>
              </div>
            </div>
          </div>


          <CommentBoxTextarea className="mt-10 mb-10" />
          <div className="mt-10 flex flex-col items-center">
            <DefaultPagination />
          </div>
          <div className="fixed bottom-16 right-8 z-10">
            <SpeedDialWithTextOutside />
          </div>

          <div className="mt-10">
            <FooterWithLogo />
          </div>
        </div>
      </div>

      <NotBotDialog
        open={openDialog}
        setOpen={setOpenDialog}
        trackingData={trackingData}
      />
    </div>
  );
};

export default Homepage;
