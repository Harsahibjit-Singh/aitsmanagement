import { useState } from 'react';
import axios from 'axios'; // Import Axios

const AdminNotification = () => {
  const [name, setName] = useState('');
  const [rank, setRank] = useState('');
  const [message, setMessage] = useState('');
  const [mail, setMail] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/messages', {
        name,
        rank,
        message,
        mail,
      });

      setStatus(response.data.message); // Show success message
      setName('');
      setRank('');
      setMessage('');
      setMail('');
    } catch (error) {
      setStatus('Failed to send notification. Please try again.');
    }
  };

  return (
    <div className="p-4 space-y-4 bg-gray-800 text-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-cyan-400">Send Notification</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded-md bg-gray-700 text-white"
      />
      <input
        type="text"
        placeholder="Rank"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
        className="w-full p-2 rounded-md bg-gray-700 text-white"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 rounded-md bg-gray-700 text-white"
      />
      <input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        className="w-full p-2 rounded-md bg-gray-700 text-white"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
      >
        Send Notification
      </button>
      {status && <p className="text-sm text-center mt-2">{status}</p>}
    </div>
  );
};

export default AdminNotification;
