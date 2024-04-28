import { personalData } from "../../utils/data/personalInfo.js";

function Aboutme() {
  return (
    <div id="about" className="my-12 lg:my-16 mx-20 relative">
        <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
                <span className="w-48 h-[2px] bg-button_color"></span>
                    <span className="bg-button_color w-fit text-white p-2 px-5 text-xl rounded-md">
                        About Me
                    </span>
                <span className="w-48 h-[2px] bg-button_color"></span>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex justify-center items-center order-1">
                <img
                src={personalData.profile}
                width={280}
                height={280}
                alt="Bhoomi Patani"
                className="rounded-lg transition-all duration-1000 cursor-pointer"
                />
            </div>
            <div className="order-2 flex items-center justify-center">
                <p className="text-gray-200 text-sm lg:text-lg text-center">
                {personalData.description}
                </p>
            </div>
        </div>

    </div>
  );
};

export default Aboutme;