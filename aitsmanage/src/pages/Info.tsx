const Info = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About AITS 2025</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-400">Our Vision</h2>
            <p className="text-gray-300">
              The All India Technology Summit 2025 aims to be the premier platform for technological innovation,
              bringing together the brightest minds from across the nation to shape the future of technology.
            </p>
            
            <h2 className="text-2xl font-semibold text-cyan-400">Mission</h2>
            <p className="text-gray-300">
              To foster collaboration between industry leaders, academics, and students,
              creating opportunities for knowledge sharing and innovation in technology.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-400">What to Expect</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Keynote speeches from industry leaders</li>
              <li>Technical workshops and hands-on sessions</li>
              <li>Networking opportunities with professionals</li>
              <li>Project showcases and competitions</li>
              <li>Career guidance and mentorship programs</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Date & Time</h3>
              <p className="text-gray-300">March 24<sup>th</sup> to 26<sup>th</sup>, 2025</p>
              <p className="text-gray-300">9 AM to 6 PM</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Venue</h3>
              <p className="text-gray-300">Chandigarh University</p>
              <p className="text-gray-300">NH-95 Chandigarh-Ludhiana Highway</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Registration</h3>
              <a href="https://www.ieeeaits.org/buy/ticket" target="_blank" className="text-cyan-400 hover:underline">Early Bird Registration: Open</a>
              {/* <p className="text-gray-300">Early Bird Registration: Open</p> */}
              <p className="text-gray-300">Limited seats available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;