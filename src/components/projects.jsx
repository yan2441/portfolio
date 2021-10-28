import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects';

const Projects = () => {
  return (
    <div className="text-blueGray-700">
      <div className="container items-center px-5 py-8 mx-auto lg:px-24">
        <h2 className="text-2xl font-bold text-blue-600">Projects</h2>
        {/* cards container effect*/}
        <div className="flex flex-wrap mb-12 text-left">
          {/* project card */}
          {projects.map((item) => <ProjectCard item={item} />)}
          {/* project card */}
        </div>
      </div>
    </div>
  );
}

export default Projects;