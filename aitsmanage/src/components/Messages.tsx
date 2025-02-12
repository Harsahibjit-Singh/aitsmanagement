import  { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
// Example structure of a message
interface Message {
  rank: string;
  name: string;
  message: string;
  mail: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/messages')
      .then((response) => {
        setMessages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
        setError('Failed to load messages. Please try again later.');
        setLoading(false);
      });
  }, []);


  return (
<div
  className="absolute top-16 right-5 bg-gray-800 text-white p-4 rounded-lg shadow-2xl w-96 transform transition-all duration-500 ease-in-out flex-col overflow-hidden"
  style={{ width: '400px', height: '400px', zIndex: 1000, boxShadow: '0 10px 15px rgba(0, 255, 255, 0.2), 0 4px 6px rgba(0, 255, 255, 0.1)' }}
> 



  <div className="text-xl font-semibold mb-3 text-cyan-400">Notifications</div>
  {!loading && messages.length === 0 && <div className="text-gray-400">No notifications available.</div>}
{error && <div>{error}</div>}

{/*  Scroolable and Scrollbar content */}
<div 
  className="overflow-y-auto flex-grow"
  style={{ 
    maxHeight: 'calc(100% - 50px)',
    scrollbarWidth: 'thin', /* Firefox */
    scrollbarColor: '#06b6d4 #1e293b', /* Thumb and Track Color (Firefox) */
  }}
>

    {messages.map((msg, index) => (
      <div
        key={index}
        className="bg-gray-700 p-3 rounded-md mb-3 hover:bg-gray-600 hover:shadow-lg transform transition-shadow duration-300"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-semibold text-cyan-300">{msg.rank} - {msg.name}</div>
          <div className="text-xs text-cyan-500">{new Date().toLocaleDateString()}</div>
          {/* <div className="text-xs text-cyan-500">
             {new Date(msg.timestamp || Date.now()).toLocaleString()}
        </div> */}
        </div>
        <div className="text-sm mb-2 text-cyan-200">{msg.message}</div>
        <div className="flex justify-end">
          <a
            href={`mailto:${msg.mail}`}
            className="text-blue-400 hover:text-blue-500 text-sm underline"
          >
            {msg.mail}
          </a>
        </div>
      </div>
    ))}
  </div>
</div>



  );
};

export default Messages;