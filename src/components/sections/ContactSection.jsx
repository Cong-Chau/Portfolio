import { Github, Mail, Phone } from "lucide-react";

function ContactSection() {
  return (
    <div className="w-full px-4 py-16 flex flex-col items-center justify-center text-center text-white bg-black/10 backdrop-blur-md">
      <h1 className="text-3xl font-bold">Liên hệ với tôi</h1>
      <p className="mt-4 max-w-xl text-sm text-white/80">
        Tôi luôn sẵn sàng thảo luận về các cơ hội mới và dự án thú vị. Hãy liên
        hệ với tôi để cùng tạo ra những điều tuyệt vời!
      </p>
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        <div className="flex flex-col items-center w-60 bg-black/10 backdrop-blur-md rounded-lg py-6 px-4 shadow-lg hover:scale-105 hover:bg-black/20 transition-colors duration-200">
          <Mail className="w-8 h-8 text-white mb-2" />
          <p className="font-semibold text-white">Email</p>
          <span className="text-sm text-white/90 mt-1">
            congchau206@gmail.com
          </span>
        </div>

        <div className="flex flex-col items-center w-60 bg-black/10 backdrop-blur-md rounded-lg py-6 px-4 shadow-lg hover:scale-105 hover:bg-black/20 transition-colors duration-200">
          <Phone className="w-8 h-8 text-white mb-2" />
          <p className="font-semibold text-white">Điện thoại</p>
          <span className="text-sm text-white/90 mt-1">0703-913-350</span>
        </div>

        <div className="flex flex-col items-center w-60 bg-black/10 backdrop-blur-md rounded-lg py-6 px-4 shadow-lg hover:scale-105 hover:bg-black/20 transition-colors duration-200">
          <Github className="w-8 h-8 text-white mb-2" />
          <p className="font-semibold text-white">Github</p>
          <span className="text-sm text-white/90 mt-1">
            github.com/Cong-Chau
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
