import React from "react";
import { useLocation } from "react-router-dom"; 
import FooterWithLogo from "../components/Footer";
import ComplexNavbar from "../components/Navbar"; 
import { TimelineWithIcon } from "../components/TimelineWithIcon"; 
import DefaultPagination from "../components/DefaultPagination";
import SpeedDialWithTextOutside from "../components/SpeedDialWithTextOutside";

const TrackingStatus = () => {
    const location = useLocation();
    const trackingData = location.state?.trackingData;

    if (!trackingData) {
        return <div>No tracking data available.</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-black relative">
            <ComplexNavbar />

            <div className="flex-grow flex items-center justify-center">
                <div className="max-w-3xl w-full p-8 bg-white shadow-lg rounded-lg mt-8">
                    <h2 className="text-xl font-bold mb-10 text-center">สถานะการติดตาม</h2>
                    <p className="text-lg mb-2"><strong>ผู้ส่ง:</strong> {trackingData.sender.name}</p>
                    <p className="text-lg mb-2"><strong>ผู้รับ:</strong> {trackingData.recipient.name}</p>
                    <p className="text-lg mb-2"><strong>เลขพัสดุ:</strong> {trackingData.trackingCode}</p>
                    <p className="text-lg mb-4"><strong>บริษัทขนส่ง:</strong> {trackingData.shippingCompany}</p>

                    <h3 className="text-xl font-semibold mb-4">การติดตามการเดินทาง:</h3>
                    <TimelineWithIcon trackingCode={trackingData.trackingCode} />
                </div>
            </div>

            <div className="fixed bottom-16 right-8 z-10">
                <SpeedDialWithTextOutside />
            </div>

            <div className="mt-10 flex flex-col items-center">
                <DefaultPagination />
            </div>
            <div className="mt-10">
                <FooterWithLogo />
            </div>
        </div>
    );
};

export default TrackingStatus;
