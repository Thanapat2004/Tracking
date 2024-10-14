const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}" // เพิ่มไฟล์ที่ต้องการรวม
  ],
  darkMode: 'class', // เปิดใช้งาน dark mode แบบ class
  theme: {
    extend: {
      screens: {
        'sm': '640px',   
        'md': '768px',   
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px', 
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // ฟอนต์หลัก
      },
      // คุณสามารถเพิ่มการปรับแต่งเพิ่มเติมได้ที่นี่ เช่น สีใน dark mode
      colors: {
        dark: {
          background: '#1a202c',  // สีพื้นหลังเมื่อเปิด dark mode
          text: '#ffffff',        // สีตัวอักษรเมื่อเปิด dark mode
        },
        light: {
          background: '#f7fafc',  // สีพื้นหลังเมื่อเปิด light mode
          text: '#000000',        // สีตัวอักษรเมื่อเปิด light mode
        },
      }
    },
  },
  plugins: [],
});
