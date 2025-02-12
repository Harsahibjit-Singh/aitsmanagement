// interface Contact {
// 	id: number;
// 	name: string;
// 	email: string;
// 	phone: string;
// 	role: string;
// 	photoUrl: string;
// 	linkedin: string;
//   }
  
//   interface ContactCardProps {
// 	contact: Contact;
//   }
  
//   const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
// 	return (
// 	  <div className="bg-black rounded-lg shadow-lg overflow-hidden">
// 		<div className="p-4 flex justify-center">
// 		  <a
// 			href={contact.linkedin}
// 			target="_blank"
// 			rel="noopener noreferrer"
// 			className="w-40 h-40"
// 		  >
// 			<img
// 			  src={contact.photoUrl}
// 			  alt={contact.name}
// 			  className="w-full h-full rounded-full object-cover hover:opacity-75 transition-opacity"
// 			/>
// 		  </a>
// 		</div>
// 		<div className="p-4">
// 		  <h3 className="font-bold text-lg">{contact.name}</h3>
// 		  <p className="text-gray-600">{contact.email}</p>
// 		  <p className="text-gray-600">{contact.phone}</p>
// 		  <p className="text-gray-600">{contact.role}</p>
// 		</div>
// 	  </div>
// 	);
//   };
  
//   export default ContactCard;


import { motion } from "framer-motion";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  photoUrl: string;
  linkedin: string;
}

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg rounded-2xl p-6 flex flex-col items-center transition-all duration-500 ease-in-out border border-gray-700 hover:shadow-cyan-400/50"
    >
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
      >
        <img
          src={contact.photoUrl}
          alt={contact.name}
          className="w-full h-full object-cover"
        />
      </a>
      <h3 className="text-xl font-bold mt-4 text-center transition duration-300 group-hover:text-cyan-400">
        {contact.name}
      </h3>
      <p className="text-sm text-gray-400 mt-1">{contact.role}</p>
      <div className="mt-3 space-y-1 text-center">
        <a
          href={`mailto:${contact.email}`}
          className="text-xs text-cyan-300 hover:text-cyan-400 transition duration-300"
        >
          {contact.email}
        </a>
        <br />
        <a
          href={`tel:${contact.phone}`}
          className="text-xs text-purple-300 hover:text-purple-400 transition duration-300"
        >
          {contact.phone}
        </a>
      </div>
    </motion.div>
  );
};

export default ContactCard;