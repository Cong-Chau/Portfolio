import ProjectCard from "../cards/ProjectCard";

function ProjectSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center w-full p-8 mt-16 mb-16">
        <h1 className="font-bold text-3xl">Dự án nổi bật</h1>
        <div className="grid grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          <ProjectCard
            title="Restaurant Management System"
            completeTime="11/2024 - 12/2024"
            description="Ứng dụng quản lý nhà hàng với đặt món, đặt bàn, quản lý thực đơn và thống kê doanh thu. Dự án nhóm 5 người thực hiện theo mô hình MVC."
            contribution="Hệ thống xác thực người dùng, đăng nhập/đăng ký"
            skills={["Handlebars", "Express.js", "Node.js", "MySQL"]}
            link="https://github.com/Cong-Chau/Restaurant"
          />
          <ProjectCard
            title="Generate Video"
            completeTime="5/2025 - 7/2025"
            description="Nền tảng tạo video ngắn tự động bằng AI từ văn bản, tích hợp Text-to-Speech (TTS), chuyển ảnh thành video, và sinh phụ đề tự động"
            contribution=" Thiết kế trang đăng ký/đăng nhập, trình tạo nội dung và preview video."
            skills={["React", "Tailwind CSS", "Python", "MongoDB"]}
            link="https://github.com/Cong-Chau/GenerateVideo"
          />
          <ProjectCard
            title="Agent Management System"
            completeTime="11/2024 - 12/2024"
            description="Ứng dụng quản lý hàng hóa của đại lý, thống kê doanh thu. Dự án nhóm 4 người thực hiện theo mô hình MVC."
            contribution=" Hệ thống xác thực người dùng, đăng nhập/đăng ký, thông kê doanh thu."
            skills={["Handlebars", "Express.js", "Node.js", "MySQL"]}
            link="https://github.com/Cong-Chau/AgentManager"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
