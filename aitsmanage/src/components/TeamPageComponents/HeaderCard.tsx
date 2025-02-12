// // src/components/DynamicTeamPage/HeaderCard.tsx

// interface HeaderCardProps {
// 	id: number;
// 	name: string;
// 	phone: string;
// 	email: string;
// 	photoUrl?: string;
// 	linkedin: string;
//   }
  
//   const HeaderCard: React.FC<HeaderCardProps> = ({
// 	name,
// 	phone,
// 	email,
// 	photoUrl = "https://randomuser.me/api/portraits/men/1.jpg",
// 	linkedin,
//   }) => {
// 	return (
// 	  <div className="container mx-auto max-w-4xl">
// 		<div className="bg-black shadow-md rounded-lg p-6 m-4 flex">
// 		  <div className="w-1/3">
// 			<a
// 			  href={linkedin}
// 			  target="_blank"
// 			  rel="noopener noreferrer"
// 			  className="block w-full h-full"
// 			>
// 			  <img
// 				src={photoUrl}
// 				alt={name}
// 				className="rounded-full w-full h-full object-cover aspect-square hover:opacity-80 transition-opacity"
// 			  />
// 			</a>
// 		  </div>
// 		  <div className="w-2/3 pl-6 flex flex-col justify-center">
// 			<div className="mb-4">
// 			  <h2 className="text-2xl font-bold">{name}</h2>
// 			  <p className="text-gray-600">{phone}</p>
// 			  <p className="text-gray-600">{email}</p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	);
//   };
  
//   export default HeaderCard;
  // src/components/DynamicTeamPage/HeaderCard.tsx

interface HeaderCardProps {
	id: number;
	name: string;
	phone: string;
	email: string;
	photoUrl?: string;
	linkedin: string;
  }
  
  const HeaderCard: React.FC<HeaderCardProps> = ({
	name,
	phone,
	email,
	photoUrl = "https://randomuser.me/api/portraits/men/1.jpg",
	linkedin,
  }) => {
	return (
	  <div className="container mx-auto max-w-md">
		<div className="relative bg-black border-t-2 shadow-lg rounded-xl p-8 flex flex-col items-center border-yellow-700  shadow-yellow-400/25 transition-transform hover:scale-105 hover:border-yellow-300 duration-300 ease-in-out hover:shadow-yellow-400/50">

  
		  <a
			href={linkedin}
			target="_blank"
			rel="noopener noreferrer"
			className="block w-40 h-40"
		  >
			<img
			  src={photoUrl}
			  alt={name}
			  className="rounded-full w-full h-full object-cover aspect-square hover:opacity-80 transition-opacity"
			/>
		  </a>
  
		  <div className="text-center mt-4">
			<h2 className="text-2xl font-bold text-white">{name}</h2>
			<p>
			  <a href={`tel:${phone}`} className="text-yellow-400 hover:text-yellow-300 transition-colors">
				{phone}
			  </a>
			</p>
			<p>
			  <a href={`mailto:${email}`} className="text-yellow-400 hover:text-yellow-300 transition-colors">
				{email}
			  </a>
			</p>
			<p className="mt-2 text-lg font-semibold text-yellow-400">Team Lead</p>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default HeaderCard;
