import '../styles/tailwind.css';
import '/src/styles/About.css';

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/Blue Clean Professional CV Resume_20250718_233420_0000.pdf'; // Update with the correct path to your CV
    link.download = 'Salah_Eddine_Rachik_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    const notification = document.querySelector('.notification');
    setTimeout(() => {
      notification.classList.remove('hidden');  
    }, 1000); 
    setTimeout(() => {
      notification.classList.add('hidden');  
    }, 3000); 

  };

  return (
    <>
    <div className='notification z-200 hidden fixed top-5 left-[45%] text-white  rounded-lg'>
      <p className='notification-text text-2xl'>CV downloaded successfully!</p>
    </div>
    <div className="min-h-screen  md:flex md:flex-row lg:flex-row bg-gradient-to-br from-slate-50 to-blue-50  items-center justify-center w-full" id='about'>
      <div className="w-full max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mt-[70px] sm:mt-[105px] lg:mt-[140px] w-full lg:w-[90%] mx-auto">
  {/* Left Content Section */}
  <div className="flex flex-col justify-center items-center w-full lg:flex-1">
    {/* Title */}
    <div className="w-full mb-4 sm:mb-6 lg:mb-8">
      <h1 className="text-[45px] sm:text-[65px] md:text-[80px] lg:text-[80px] font-roboto font-semibold leading-[60px] sm:leading-[80px] md:leading-[120px] lg:leading-[166px] text-center">
        <span 
          className="bg-gradient-to-b from-[#075985] to-[#48ace3] bg-clip-text text-transparent"
          style={{
            background: 'linear-gradient(180deg, #075985 0%, #48ace3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          W
        </span>
        <span className="text-gray-800">ho am I?</span>
      </h1>
    </div>

    {/* Description Box */}
   <div className="DescriptionBox">
  <p className="">
    Hey, I’m Salah Eddine Rachik — a full-stack developer who loves tech, learning new things, and turning ideas into real projects. I enjoy working with others and tackling challenges along the way.
  </p>
</div>

    {/* Download CV Button */}
    <button
      onClick={handleDownloadCV}
      className="cv-btn"
    >
      <span className="text-[20px] sm:text-[25px] lg:text-[30px] font-roboto-mono font-bold leading-[24px] sm:leading-[32px] lg:leading-[40px] text-center text-button-1">
        Download CV
      </span>
    </button>
  </div>

  {/* Right Image Section */}
 <div className="relative w-full lg:w-[32%] mt-[47px] sm:mt-[70px] lg:mt-[94px] flex justify-center lg:justify-start">
  <div className="image-container">
  <img
    loading="lazy"
    src="/assets/avataaars.svg"
    alt="Background vector"
    className="vector-bg"
  />
  
</div>

</div>
</div>

      </div>
    </div>
    </>
  );
};

export default About;