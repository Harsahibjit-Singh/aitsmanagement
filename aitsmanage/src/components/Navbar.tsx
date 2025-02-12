import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell } from 'lucide-react';
import Messages from './Messages';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessages, setShowMessages] = useState(false); // State to control the visibility of messages
  const location = useLocation(); // Get the current URL path
  const [unreadNotifications, setUnreadNotifications] = useState(
    Number(localStorage.getItem("unreadNotifications")) || 0
  ); // Example unread notifications count
  const navigate = useNavigate();
  const notificationRef = useRef<HTMLDivElement | null>(null); // Ref to the notifications panel
  const bellRef = useRef<HTMLButtonElement | null>(null); // Ref to the bell button

  const handleNotificationClick = () => {
    if (unreadNotifications > 0) {
      setUnreadNotifications(0); // Mark notifications as read
      localStorage.setItem("unreadNotifications", "0"); // Save to local storage
    }
    setShowMessages(!showMessages);
  };
  

  // Close the notification panel if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current && 
        !notificationRef.current.contains(event.target as Node) && 
        !bellRef.current?.contains(event.target as Node) // Prevent closing when the bell button is clicked
      ) {
        setShowMessages(false); // Close the notifications if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("unreadNotifications", unreadNotifications.toString());
  }, [unreadNotifications]);




  // Function to check if a link is active
  const isActive = (path: string): string => 
    location.pathname.startsWith("/team")
      ? path === "/team"
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
      : location.pathname === path
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-300 hover:bg-gray-700 hover:text-white";
  

  
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-fl0ex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img className="h-10 w-auto" src="/src/assets/logos/aitslogowhite.png" alt="AITS" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/")}`}>
                  AITS Management
                </Link>
                <Link to="/team" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/team")}`}>
                  Team
                </Link>
                <Link to="/data" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/data")}`}>
                  Data
                </Link>
                <Link to="/info" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/info")}`}>
                  Info
                </Link>
                <Link to="/contact" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/contact")}`}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <input
              type="text"
              className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Search..."
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              <Search className="size-5" />
            </button>
          </div>


          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={handleNotificationClick} // Handle notification click
              ref={bellRef} // Set the bell ref
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <Bell className="size-6" />
              {unreadNotifications > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  
                </span>
              )}
            </button>
          </div>



        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link to="/" className={`block rounded-md px-3 py-2 text-base font-medium ${isActive("/")}`}>
            AITS Management
          </Link>
          <Link to="/team" className={`block rounded-md px-3 py-2 text-base font-medium ${isActive("/team")}`}>
            Team
          </Link>
          <Link to="/data" className={`block rounded-md px-3 py-2 text-base font-medium ${isActive("/data")}`}>
            Data
          </Link>
          <Link to="/info" className={`block rounded-md px-3 py-2 text-base font-medium ${isActive("/info")}`}>
            Info
          </Link>
          <Link to="/contact" className={`block rounded-md px-3 py-2 text-base font-medium ${isActive("/contact")}`}>
            Contact Us
          </Link>
        </div>
      </div>
      {/* Conditionally render the Messages component */}
      {showMessages && (
        <div ref={notificationRef}>
          <Messages />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
