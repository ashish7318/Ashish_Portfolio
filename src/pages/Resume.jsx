const Resume = () => {
  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <a
        href="/resume.pdf"
        download
        className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;