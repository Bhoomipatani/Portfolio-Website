import { personalData } from "../../utils/data/personalInfo.js";

function Aboutme() {
  return (
    <div id="about" className="relative lg:my-16 mx-10 z-50">
      <div className="flex justify-center items-center mb-16 my-5 lg:py-8">
        <span className="w-screen h-[2px] bg-button_color"></span>
        <span className="bg-button_color w-fit text-white p-2 px-5 whitespace-nowrap text-xl rounded-md">
          About Me
        </span>
        <span className="w-screen h-[2px] bg-button_color"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-32">
        <div className="lg:col-span-1 flex justify-center items-center order-2">
          <div className="w-auto h-60 relative">
            <div className="w-[300px] h-80 bg-bg_color_1 rounded-full absolute filter blur-3xl -z-10 opacity-80"></div>
            <img
              src={personalData.profile}
              alt="Bhoomi Patani"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="lg:col-span-2 px-28 ">
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-200 text-md lg:text-lg mb-4 lg:mb-0">
              {personalData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
