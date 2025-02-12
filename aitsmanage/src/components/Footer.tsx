const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white">About AITS</h2>
            <p className="mt-3 text-gray-400 text-sm">
              The All India Technology Summit is a premier platform that unites tech enthusiasts,
              researchers, and industry leaders to innovate and inspire the next generation.
            </p>
            <div className="mt-4 flex space-x-4">
            <a href="https://www.ieeeaits.org/index/" className="text-gray-400 hover:text-cyan-400 transition" target="_blank">
                <img src="/src/assets/logos/aitslogowhite.png" alt="IEEE AITS" className="w-28 h-14" />
              </a>
              <a href="https://edu.ieee.org/in-cu/" className="text-gray-400 hover:text-cyan-400 transition" target="_blank">
                <img src="/src/assets/logos/ieeecusblogo.png" alt="IEEE" className="w-36 h-14" />
              </a>
              <a href="https://www.cuchd.in/" className="text-gray-400 hover:text-cyan-400 transition" target="_blank">
                <img src="https://www.cuchd.in/research/assets/uploads/logo-white.png" alt="CU" className="w-28 h-12" />
              </a>
              </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              <li><a href="/team" className="hover:text-cyan-400 transition">Team</a></li>
              <li><a href="/info" className="hover:text-cyan-400 transition">Info</a></li>
              <li><a href="/contact" className="hover:text-cyan-400 transition">Contact Us</a></li>
              <li><a href="/volunteer-application" className="hover:text-cyan-400 transition">Apply for Volunteering</a></li>
              {/* <li><a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a></li> */}
              {/* <li><a href="#" className="hover:text-cyan-400 transition">Feedback</a></li> */}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <p className="mt-3 text-gray-400 text-sm">
              <a href="https://edu.ieee.org/in-cu/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                IEEE Chandigarh University Student Branch
              </a>
            </p>

            <p className="text-gray-400 text-sm">
              Email: 
              <a href="mailto:ieeeaits2025@gmail.com" className="hover:text-cyan-400"> ieeeaits2025@gmail.com</a>
            </p>

            <p className="text-gray-400 text-sm">
              Phone: 
              <a href="tel:+918839341935" className="hover:text-cyan-400"> +91 88393 41935</a>
            </p>


            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/share/1KqcA1bN7i/?mibextid=wwXIfr" className="text-gray-400 hover:text-cyan-400 transition" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.818c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.238.194 2.238.194v2.46h-1.26c-1.243 0-1.63.774-1.63 1.567v1.885h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@IEEE_AITS" className="text-gray-400 hover:text-cyan-400 transition" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
                </svg>
              </a>
              <a href="https://x.com/ieeeaits2025?s=21" className="text-gray-400 hover:text-cyan-400 transition" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
                {/* Instagram */}
              <a href="https://www.instagram.com/ieee.aits.2025?igsh=MWlyZXk2Z2RyeHBhcA%3D%3D&utm_source=qr" className="text-gray-400 hover:text-pink-400 transition" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 3a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ieee-aits-6508a534a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-blue-400 transition" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5A2.5 2.5 0 012.5 6v12a2.5 2.5 0 002.48 2.5h12a2.5 2.5 0 002.5-2.5V6a2.5 2.5 0 00-2.5-2.5h-12zm0 1.5h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-12c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm2.5 2a1.25 1.25 0 100 2.5A1.25 1.25 0 007.5 7zm-.75 3h1.5v7h-1.5v-7zm4.75 0h1.5v1.05c.39-.67 1.13-1.05 2.02-1.05 1.39 0 2.48 1.09 2.48 2.43v4.57h-1.5v-4.07c0-.67-.55-1.18-1.23-1.18-.7 0-1.27.51-1.27 1.18v4.07h-1.5v-7z" />
                </svg>
              </a>

              {/* Threads */}
              <a href="https://www.threads.net/@ieee.aits.2025?igshid=NTc4MTIwNjQ2YQ==" className="text-gray-400 hover:text-black transition" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0110 10 10 10 0 11-10-10zm.28 3.28a4.25 4.25 0 00-4.23 4.23c0 1.72 1.08 3.16 2.58 3.75a6.1 6.1 0 01-1.83-4.42 1.5 1.5 0 112.72.8 3 3 0 00-.54 1.85 3.5 3.5 0 007 .18 3 3 0 00-1.6-2.6 4.25 4.25 0 00-4.1-3.06zm-.65 7.72a1.5 1.5 0 011.94 0 3 3 0 01.18 4.26c-1.25 1.44-3.55 1.54-4.94.18a3 3 0 01.82-4.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © 2025 AITS | All Rights Reserved | Designed by IEEE CUSB
        </div>
      </div>
    </footer>
  );
};

export default Footer;