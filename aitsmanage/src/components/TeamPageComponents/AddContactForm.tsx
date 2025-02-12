import { useState } from "react";

type ContactFormData = {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;  // Renamed from location to role
    photoUrl: string;
    linkedin: string;
};

interface AddContactFormProps {
    onSubmit: (data: ContactFormData) => void;
    onClose: () => void;
    isLeader: boolean;
  }

const AddContactForm: React.FC<AddContactFormProps> = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState<ContactFormData>({
        id: Date.now(),
        name: "",
        email: "",
        phone: "",
        role: "",
        photoUrl: "",
        linkedin: "",
    });

    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            setError("Name, Email, and Phone are required fields.");
            return;
        }

        onSubmit(formData);
        onClose();
    };

    return (
<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
  <div className="bg-black p-8 rounded-lg w-96 border border-gray-800 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-800/50">
    <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Add New Contact</h2>
    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="photoUrl"
        placeholder="Photo URL"
        className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded"
        value={formData.photoUrl}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name *"
        className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone *"
        className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded"
        value={formData.role}
        onChange={handleChange}
      />
      <input
        type="url"
        name="linkedin"
        placeholder="LinkedIn URL"
        className="w-full p-4 bg-gray-900 text-white border border-cyan-500 rounded"
        value={formData.linkedin}
        onChange={handleChange}
      />
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-cyan-500 text-white rounded-lg"
        >
          Add Member
        </button>
      </div>
    </form>
  </div>
</div>

    );
};

export default AddContactForm;
