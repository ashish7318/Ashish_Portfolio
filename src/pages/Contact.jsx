import React from 'react';

function Contacts() {
  return (
    <div
      id="contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-12 md:mt-24 min-h-screen flex flex-col justify-between"
    >
      <div>
        <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
          Contact Me
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Have a project in mind or want to connect? Feel free to reach out!
        </p>

        <form
          action="https://getform.io/f/bgdlvvra"
          method="POST"
          className="max-w-2xl mx-auto bg-white shadow-md p-8 rounded-lg space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            aria-label="Send your message"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
