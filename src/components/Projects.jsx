"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { ExternalLink, Github, Code, Palette, Database, Globe } from "lucide-react"
import '/src/styles/Projects.css';
import '/src/styles/tailwind.css';
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern portfolio showcasing my work and skills with interactive elements.",
        image: "/src/assets/projects/portfoliomine.png?height=300&width=500&text=Portfolio+Website",
      technologies: ["Reactjs", "Tailwind CSS", "CSS"],
      sourceUrl: "https://github.com/SalahEddine-Ra/React-Portfolio",
      category: "Front-end",
      icon: <Palette className="w-6 h-6" />,
    },
    {
    
      id: 2,
      title: "E-Commerce Platform",
      description:
        "A static front-end e-commerce website for sports clothing, built with HTML and CSS.",
      image: "/src/assets/projects/elites-style.png?height=300&width=500&text=E-Commerce+Platform",
      technologies: ["HTML", "CSS"],
      liveUrl: "https://elites-style.zertline.com/",
      sourceUrl: "https://github.com/SalahEddine-Ra/Elites-Style",
      category: "Front-end",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A minimalist task management application with real-time updates.",
      image: "/src/assets/projects/clearmind.png?height=300&width=500&text=Task+Management+App",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://salaheddine-ra.github.io/To-do-liste/",
      sourceUrl: "https://github.com/SalahEddine-Ra/To-do-liste",
      category: "Web App",
      icon: <Code className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern website for an education center built with a team",
        image: "/src/assets/projects/edu copy.jpg?height=300&width=500&text=Education+Center",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://groupelexcellence.net/",
      category: "Frontend",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Bank System",
      description:
        "A complete banking system with user authentication and transaction management.",
      image: "/src/assets/projects//mybank.png?height=300&width=500&text=Bank+System",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      sourceUrl: "https://github.com/SalahEddine-Ra/Bank-System",
      category: "Back-end",
      icon: <Database className="w-6 h-6" />,
    }
  ]

  return (
    <div className="projects-section min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 w-full flex justify-center items-center px-2 sm:px-4 md:px-8" id="projects">
      <div className="projects-container w-full max-w-7xl mx-auto">
        {/* Projects Title */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h1 className="text-[45px] sm:text-[65px] md:text-[80px] lg:text-[80px] font-roboto font-semibold leading-[60px] sm:leading-[80px] md:leading-[120px] lg:leading-[120px] text-center">
            <span className="bg-gradient-to-b from-sky-700 to-sky-400 bg-clip-text text-transparent">P</span>
            <span className="text-gray-800">ROJECTS</span>
          </h1>
          <p className="text-gray-600 mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        {/* Projects Content */}
        <div className="projects-content flex justify-center items-center w-full sm:w-[90%] md:w-[80%] lg:w-[90%] mx-auto">
          {/* Swiper for Projects */}
          <Swiper
            spaceBetween={16}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-auto pb-10 sm:pb-14 md:pb-16"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="w-full mx-auto" style={{ padding: '2rem' }}>
                  <div className="bg-white rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-lg lg:h-[600px] flex flex-col"
                    style={{ padding: '1.5rem' }}>
                    {/* Project Image */}
                    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full" style={{ padding: '0.25rem 0.5rem' }}>
                          {project.icon}
                          <span className="text-xs sm:text-sm font-semibold text-gray-800">{project.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800" style={{ marginBlock: '0.5rem' }}>{project.title}</h3>

                      {/* Project Description */}
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed " style={{ marginBottom: '0.5rem' }}>{project.description}</p>

                      {/* Technologies */}
                      <div className="">
                        <div className="flex flex-wrap gap-2" style={{ marginBottom: '1rem' }}>
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className=" bg-gradient-to-r from-sky-100 to-purple-100 text-sky-700 rounded-full text-xs sm:text-sm font-medium"style={{ padding: '0.25rem 0.5rem' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 mt-auto">
                        {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-2xl font-semibold text-center transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ padding: '0.75rem 0.5rem' }}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <ExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
                            <span className="text-sm sm:text-base">View Live Project</span>
                          </div>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </a>
                        )}

                        {project.sourceUrl && (
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 group relative overflow-hidden bg-gray-800 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-center transition-all duration-300 hover:bg-gray-700 hover:shadow-xl hover:scale-105" style={{ padding: '0.75rem 0.5rem' }}
                          >
                            <div className="flex items-center justify-center gap-2">
                              <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                              <span className="text-sm sm:text-base">Source Code</span>
                            </div>
                            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
