
function Projects() {
  return (
    <div id="projects" className=" lg:my-16 mx-8  relative ">
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
                <div key={project.id} className="flex justify-center w-full bg-gradient-to-r from-bg_color_2 to-bg_color_3 border-button_color border-2 rounded-lg p-6 shadow-lg mb-8" >
                    <div className="relative isolate flex flex-col gap-8 w-full">
                        <div className="flex flex-col w-full">
                            <h2 className="text-2xl font-bold text-white mt-2">
                                {project.title}
                            </h2>
                            <p className="text-pink text-lg mt-1">{project.tags}</p>
                            <div className=" w-full text-gray-300 mt-4">
                                {project.description}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        
    </div>
  );
};

export default Projects;