import React from 'react';

function About() {
  return (
    <div
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-8 md:mt-20 min-h-screen flex items-center"
    >
      <div className="w-full text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-green-600">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide text-justify">
          I&apos;m <span className="font-semibold text-green-700">Ashish Jha</span>, a dedicated and passionate Java Developer with hands-on experience in building full-stack web applications.
          I specialize in backend development using <span className="font-medium text-green-700">Java</span> and <span className="font-medium text-green-700">Spring Boot</span>,
          and I enjoy crafting seamless frontend experiences using <span className="font-medium text-green-700">React</span>.

          <br /><br />

          My current tech stack includes:
          <span className="font-medium text-green-700"> Java, Spring Boot, MongoDB, and React</span>.
          I’m always eager to learn and adopt new tools and best practices that enhance both performance and user experience.

          <br /><br />

          Beyond coding, I stay updated on emerging tech trends and enjoy tackling real-world problems with innovative solutions.
          My goal is to contribute meaningfully to projects that push my limits and help me grow as a developer.
        </p>
      </div>
    </div>
  );
}

export default About;
