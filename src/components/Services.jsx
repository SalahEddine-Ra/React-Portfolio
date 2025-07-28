import '/src/styles/tailwind.css';
const Services = () => {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br  from-slate-50 to-blue-50 flex items-center justify-center" id='services'>
      <div className="lg:w-[90%] md:w-[80%] w-[70%] mx-auto p-6">
        <div className="text-center mb-16">
          <h1 className="text-[45px] sm:text-[65px] md:text-[80px] lg:text-[80px] font-roboto font-semibold leading-[60px] sm:leading-[80px] md:leading-[120px] lg:leading-[120px] text-center">
            <span className="bg-gradient-to-b from-sky-700 to-sky-400 bg-clip-text text-transparent">S</span>
            <span className="text-gray-800">ERVICES</span>
          </h1>
          <p className="text-gray-600 mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl">
          I offer a range of services to help you achieve your goals.
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 w-full" style={{ marginTop: '2.5rem' }}>
          {/* Service Card */}
          <div className="bg-white rounded-3xl shadow-xl  border border-gray-100 "style={{paddingBlock: '2rem', paddingInline: '2rem'}}>
            <div className="flex flex-col gap-[11px] sm:gap-[15px] md:gap-[18px] lg:gap-[22px] justify-start items-center flex-1 mt-[3px] sm:mt-[4px] md:mt-[5px] lg:mt-[6px] mx-[38px] sm:mx-[51px] md:mx-[64px] lg:mx-[76px] mr-[44px] sm:mr-[59px] md:mr-[74px] lg:mr-[88px]" >
                  <img src="/assets/img_3242257_2.png" alt="Web Development" className="w-[54px] sm:w-[29px] md:w-[64px] lg:w-[58px] h-[54px] sm:h-[29px] md:h-[64px] lg:h-[58px]"/>
                  <h3 className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[20px] font-anonymous-pro font-bold leading-[15px] sm:leading-[20px] md:leading-[25px] lg:leading-[30px] text-center text-[#075985]"style={{marginBottom: '15px' }}>
                    Web Development
                  </h3>
                </div>
            <p className="text-global-2 text-lg sm:text-lg md:text-xl lg:text-xl"style={{fontFamily: 'monospace'}}>
              I build complete websites , both front-end and back-end , with clean design, responsive layouts, and smooth functionality.
            </p>
          </div>
          {/* Service Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 border border-gray-100"style={{paddingBlock: '2rem', paddingInline: '2rem'}}>
                <div className="flex flex-col gap-[11px] sm:gap-[15px] md:gap-[18px] lg:gap-[22px] justify-start items-center flex-1 mt-[3px] sm:mt-[4px] md:mt-[5px] lg:mt-[6px] mx-[38px] sm:mx-[51px] md:mx-[64px] lg:mx-[76px] mr-[44px] sm:mr-[59px] md:mr-[74px] lg:mr-[88px]">
                    <img src="/assets/img_1312301_2.png" alt="Business Card" className="w-[54px] sm:w-[29px] md:w-[64px] lg:w-[58px] h-[54px] sm:h-[29px] md:h-[64px] lg:h-[58px]" />
                    <h3 className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[20px] font-anonymous-pro font-bold leading-[15px] sm:leading-[20px] md:leading-[25px] lg:leading-[30px] text-center text-[#075985] mt-[11px] sm:mt-[15px] md:mt-[18px] lg:mt-[22px]"style={{marginBottom: '15px' }}>
                  business card
                </h3>
            </div>
            <p className="text-global-2 text-lg sm:text-lg md:text-xl lg:text-xl"style={{fontFamily: 'monospace'}}>
              Clean and professional business card designs tailored to reflect your brand and leave a lasting impression.
            </p>
          </div>
          {/* Service Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 border border-gray-100"style={{paddingBlock: '2rem', paddingInline: '2rem'}}>
                <div className="flex flex-col gap-[11px] sm:gap-[15px] md:gap-[18px] lg:gap-[22px] justify-start items-center flex-1 mt-[3px] sm:mt-[4px] md:mt-[5px] lg:mt-[6px] mx-[38px] sm:mx-[51px] md:mx-[64px] lg:mx-[76px] mr-[44px] sm:mr-[59px] md:mr-[74px] lg:mr-[88px]">
                    <img src="/assets/img_9414777_2.png" alt="Posters" className="w-[54px] sm:w-[29px] md:w-[64px] lg:w-[58px] h-[54px] sm:h-[29px] md:h-[64px] lg:h-[58px]" />
                <h3 className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[20px] font-anonymous-pro font-bold leading-[15px] sm:leading-[20px] md:leading-[25px] lg:leading-[30px] text-center text-[#075985] mt-[9px] sm:mt-[12px] md:mt-[15px] lg:mt-[18px]"style={{marginBottom: '15px' }}>
                  Posters
                </h3>
            </div>
            <p className="text-global-2 text-lg sm:text-lg md:text-xl lg:text-xl"style={{fontFamily: 'monospace'}}>
              Visually striking posters for events, promotions, or branding — designed to grab attention and communicate clearly.
            </p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Services;
