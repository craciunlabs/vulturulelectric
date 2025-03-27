
import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-1">Nume</label>
            <input
              type="text"
              id="nume"
              name="nume"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="subiect" className="block text-sm font-medium text-gray-700 mb-1">Subiect</label>
          <input
            type="text"
            id="subiect"
            name="subiect"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
          <textarea
            id="mesaj"
            name="mesaj"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vultur-red focus:border-transparent"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full px-6 py-3 bg-vultur-red hover:bg-red-800 transition-colors rounded-lg font-medium text-white"
        >
          Trimite mesajul
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
