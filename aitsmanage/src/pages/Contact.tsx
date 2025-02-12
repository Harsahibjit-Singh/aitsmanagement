import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // Track loading state

  const developers = [
    {
      name: 'Harsahibjit Singh',
      role: 'Lead Developer',
      image: 'src/assets/images/harsahib.jpg',
      phone: '+916284001212',
      email: 'harsahibjit@gmail.com',
      linkedin: 'https://www.linkedin.com/in/harsahibjit-singh'
    },
    {
      name: 'Aditya Raj',
      role: 'Frontend Developer',
      image: 'src/assets/images/aditya.jpg',
      phone: '+919525544944',
      email: 'biraj.csecu@gmail.com',
      linkedin: 'https://www.linkedin.com/in/adityacsecu'
    },
    {
      name: 'Avreet Kaur',
      role: 'Backend Developer',
      image: 'src/assets/images/avreet.jpg',
      phone: '+919417983500',
      email: 'avreetkaur084@gmail.com',
      linkedin: 'https://www.linkedin.com/in/avreet-kaur'
    },
    {
      name: 'Likhil N Maiya',
      role: 'Full Stack Developer',
      image: 'src/assets/images/likhil.jpg',
      phone: '+919832172970',
      email: 'likhilnm17103@gmail.com',
      linkedin: 'https://linkedin.com/in/likhilnmaiya'
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    setLoading(true); // Set loading to true when form is submitted

    // Define the data to send to Google Apps Script
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);


  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-[1.8]">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Development Team Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative mb-6">
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-1">{dev.name}</h3>
                  <p className="text-cyan-400 mb-4">{dev.role}</p>

                  <div className="space-y-2">
                    <a
                      href={`tel:${dev.phone}`}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {dev.phone}
                    </a>
                    <a
                      href={`mailto:${dev.email}`}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 pb-5"
                    >
                      {dev.email}
                    </a>
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-cyan-400 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-400">
                    Chandigarh University
                    <br />
                    NH-95 Chandigarh-Ludhiana Highway
                    <br />
                    Punjab, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-cyan-400 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:ieeeaits2025@gmail.com" className="text-gray-400 hover:text-cyan-400">
                    ieeeaits2025@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-cyan-400 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 88393 41935</p>
                </div>
              </div>
            </div>
          </div>

          <form action="https://script.google.com/macros/s/AKfycbwp-NsJCtf00WRn1rqZy-94odN5EcR5s-VAkkLqKK24UCwPero2MCGytZDukUJnqQXWNQ/exec" method="POST" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-md py-3 px-6 mt-4 flex justify-center items-center"
            >
              {loading ? (
                <svg
                  className="w-5 h-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v4m0 0v4m0-4h4m-4 0h-4"
                  />
                </svg>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
