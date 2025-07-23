import React from "react";
import { Mail, Phone, Github, MapPin, Download, Map } from "lucide-react";
import chaudeptrai from "../../assets/images/chaudeptrai.png";

function HeroSection() {
  return (
    <>
      <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center text-center w-full p-8 bg-black/5 backdrop-blur-md">
        <div className="mb-6">
          <img
            src={chaudeptrai}
            alt=" "
            className="rounded-full w-56 h-56 object-cover shadow-lg"
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl mt-8">PHAN CÔNG CHÂU</h1>
        </div>
        <div className="mt-4">
          <span className="text-lg">Frontend Developer</span>
        </div>
        <div className="flex flex-row items-center mt-24 justify-center space-x-24">
          <div className="flex items-center space-x-2 text-lg hover:scale-105 transition-transform duration-200 hover:bg-black/10 transition-colors duration-200 px-3 py-1 rounded-2xl">
            <Mail className="text-blue-500" />
            <span>congchau206@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-lg hover:scale-105 transition-transform duration-200 hover:bg-black/10 transition-colors duration-200 px-3 py-1 rounded-2xl">
            <Phone className="text-blue-500" />
            <span>0703-913-350</span>
          </div>
          <div className="flex items-center space-x-2 text-lg hover:scale-105 transition-transform duration-200 hover:bg-black/10 transition-colors duration-200 px-3 py-1 rounded-2xl">
            <Github className="text-blue-500" />
            <span>github.com/Cong-Chau</span>
          </div>
          <div className="flex items-center space-x-2 text-lg hover:scale-105 transition-transform duration-200 hover:bg-black/10 transition-colors duration-200 px-3 py-1 rounded-2xl">
            <MapPin className="text-blue-500" />
            <span>TP. Hồ Chí Minh, Việt Nam</span>
          </div>
        </div>
        <div className="mt-16">
          <button className="w-full h-12 flex items-center space-x-2 text-lg px-3 py-1 rounded-2xl border border-3 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200">
            <Download className="" />
            <span>Tải CV</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
