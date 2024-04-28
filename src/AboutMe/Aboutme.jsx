import { personalData } from "../../utils/data/personalInfo.js";

function Aboutme() {
    return (
        <div id="about" className="relative lg:my-16 mx-20 z-50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-1 flex justify-center items-center order-1">
                <div className="w-auto h-60 lg:w-auto lg:h-80 relative"> 
                <div className="w-[300px] h-80 bg-bg_color_1 rounded-full absolute filter blur-3xl -z-10 opacity-80"></div>
                <img src={personalData.profile} alt="Bhoomi Patani"  className="w-full h-full rounded-lg"/>
                </div>
            </div>
            <div className="lg:col-span-2 order-2 lg:order-3">
                <div className="flex flex-col justify-center h-full">
                <div className="hidden lg:flex justify-center pb-8">
                    <div className="flex items-center">
                    <span className="w-48 h-[2px] bg-button_color "></span>
                    <span className="bg-button_color w-fit min-w-36 text-center text-white p-2 px-5 text-xl rounded-md">
                        About Me
                    </span>
                    <span className="w-48 h-[2px] bg-button_color"></span>
                    </div>
                </div>
                <p className="text-gray-200 text-md lg:text-lg mb-4 lg:mb-0">
                    {personalData.description}
                </p>
                </div>
            </div>
            </div>
        </div>
    );
  };
  
  export default Aboutme;
  