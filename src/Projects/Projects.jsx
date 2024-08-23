import { projects } from "../../utils/data/projects.js";

function Projects() {
  return (
    <div id="projects" className="lg:my-16 mx-8 relative">
      <div className="flex justify-center items-center mb-16 my-5 lg:py-8">
        <span className="w-screen h-[2px] bg-button_color"></span>
        <span className="bg-button_color w-fit text-white p-2 px-5 text-xl rounded-md">
          Projects
        </span>
        <span className="w-screen h-[2px] bg-button_color"></span>
      </div>
      <div className="flex justify-center items-center flex-row">
        <div className="w-full lg:w-2/3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col lg:flex-row md:flex-row justify-start w-full bg-gradient-to-r from-bg_color_2 to-bg_color_3 border-button_color border-2 rounded-lg p-6 shadow-lg mb-8"
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/3 md:w-1/3 flex justify-center items-center mb-4 lg:mb-0 md:mb-0">
                <div className="w-full h-0 pb-[100%] relative">
                  <img
                    src={project.image}
                    // alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="relative isolate flex flex-col gap-4 lg:px-10 md:px-10 w-full lg:w-2/3 md:w-2/3">
                <h2 className="text-2xl font-bold text-white mt-2 lg:mt-0 md:mt-0">
                  {project.name}
                </h2>

                {/* Tools/Tags Section */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tools.split(',').map((tool, index) => (
                    <span
                      key={index}
                      className="bg-pink text-white text-sm px-2 py-1 rounded-full"
                    >
                      {tool.trim()}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 mt-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
