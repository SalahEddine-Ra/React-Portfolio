import { Code, Palette, Figma, Brush, Layers } from "lucide-react"
import '/src/styles/skills.css';
import cssimage from '/assets/img_732190_1.png';
import figmaimage from '/assets/img_5968705_1.png';
import iluusimage from '/assets/img_5968472_1.png';
import canvaimage from '/assets/img_canva_icon_1.png';

export default function Skills() {
  const webDevSkills = [
    { name: "HTML5", icon: <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" width="32" height="32" />, color: "bg-orange-100 text-orange-600" },
    { name: "CSS3", icon: <img src={cssimage} alt="CSS3" width="32" height="32" />, color: "bg-blue-100 text-blue-600" },
    { name: "JavaScript", icon: <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" width="32" height="32" />, color: "bg-yellow-100 text-yellow-600" },
    { name: "MySQL", icon: <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" width="32" height="32" />, color: "bg-blue-100 text-blue-700" },
    { name: "Python", icon: <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" width="32" height="32" />, color: "bg-green-200 text-green-600" },
    { name: "React", icon: <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width="32" height="32" />, color: "bg-cyan-100 text-cyan-600" },
    { name: "Bootstrap", icon: <img src="https://cdn.simpleicons.org/bootstrap/7952B3" alt="Bootstrap" width="32" height="32" />, color: "bg-purple-100 text-purple-600" },
    { name: "Tailwind CSS", icon: <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" width="32" height="32" />, color: "bg-sky-100 text-purple-600" },

  ]

  const designSkills = [
    { name: "Figma", icon: <img src={figmaimage} alt="Figma" width="32" height="32" />, color: "bg-purple-100 text-purple-600" },
    { name: "Illustrator", icon: <img src={iluusimage} alt="Illustrator" width="32" height="32" />, color: "bg-orange-100 text-orange-600" },
    { name: "Canva", icon: <img src={canvaimage} alt="Canva" width="32" height="32" />, color: "bg-blue-100 text-blue-600" },
  ]

  return (
    <div className="skills-section min-h-screen bg-gradient-to-br from-slate-50 to-blue-50  w-full justify-center items-center" id="skills">
      <div className="max-w-full mx-auto">
        {/* Skills Title */}
        <div className="text-center mb-16">
          <h1 className="text-[45px] sm:text-[65px] md:text-[80px] lg:text-[80px] font-roboto font-semibold leading-[60px] sm:leading-[80px] md:leading-[120px] lg:leading-[120px] text-center">
            <span className="bg-gradient-to-b from-sky-700 to-sky-400 bg-clip-text text-transparent">S</span>
            <span className="text-gray-800">KILLS</span>
          </h1>
          <p className="text-gray-600 mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl">
            Here are some of my key skills in web development and design.
          </p>
        </div>

        {/* Skills Content */}
        <div className="skills-content flex flex-col w-full gap-10 lg:gap-24 justify-center items-center lg:items-start md:items-start">
          {/* Web Development Section */}
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0 w-[90%]">
            <div className="web-development bg-white rounded-3xl shadow-xl  sm:p-10 lg:p-12 border border-gray-100">
              <div className="skills-title flex items-center gap-4 mb-8">
                <div className="p-3 bg-sky-100 rounded-2xl">
                  <Code className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-700 font-mono">Web Development</h3>
              </div>

              {/* Tech Icons Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {webDevSkills.map((skill, index) => (
                  <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                    <div
                      className={`
                      ${skill.color} 
                      rounded-2xl p-6 sm:p-8 
                      transition-all duration-300 
                      group-hover:scale-110 group-hover:shadow-lg
                      cursor-pointer
                      flex flex-col items-center justify-center
                      min-h-[100px] sm:min-h-[120px]
                    `}
                    >
                      <div className="text-2xl sm:text-3xl mb-2">{skill.icon}</div>
                      <span className="text-xs sm:text-sm font-semibold text-center">{skill.name}</span>
                    </div>                 
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design Section */}
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0 w-[90%]">
            <div className="design bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 border border-gray-100">
              <div className="skills-title flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-700 font-mono">Design</h3>
              </div>

              {/* Design Icons */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {designSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    style={{ animationDelay: `${(index + webDevSkills.length) * 100}ms` }}
                  >
                    <div
                      className={`
                      ${skill.color} 
                      rounded-2xl p-6 sm:p-8 
                      transition-all duration-300 
                      group-hover:scale-110 group-hover:shadow-lg
                      cursor-pointer
                      flex flex-col items-center justify-center
                      min-h-[100px] sm:min-h-[120px]
                    `}
                    >
                      <div className="mb-2">{skill.icon}</div>
                      <span className="text-xs sm:text-sm font-semibold text-center">{skill.name}</span>
                    </div>

                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}
