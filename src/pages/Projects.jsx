import React from 'react';

function Project() {
  const projects = [
    {
      title: "LostLink",
      description:
        "A lost and found web app for colleges/offices. Users can post and claim lost items. Admin approves and manages the flow.",
      techStack: ["MERN", "JWT Auth", "Tailwind CSS"],
      github: "https://github.com/yourusername/lostlink",
    },
    {
      title: "JobHunt Web App",
      description:
        "A full-stack job search platform where users can register, upload resumes, search and apply for jobs. Admin can manage resumes.",
      techStack: ["React", "Spring Boot", "MongoDB", "JWT"],
      github: "https://github.com/yourusername/jobhunt",
    },
    {
      title: 'Book Store Management',
      description: 'Manage book inventory, sales, and users in an online bookstore system.',
      techStack: ['Java', 'Spring Boot', 'MySQL'],
      github: "https://github.com/yourusername/bookstore-management",
    },
  ];

  return (
    <div
      id="projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-12 md:mt-24 min-h-screen"
    >
      <h2 className="text-4xl font-bold text-center text-green-600 mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 text-justify text-base">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-600">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;