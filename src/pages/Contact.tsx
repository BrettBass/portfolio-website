import * as React from 'react';
import axios from 'axios';
import Nav from '../components/Nav/Nav';
import '../style.css';

const inputHeader =
  'block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 font-semibold';
const inputField =
  'shadow-sm bg-gray-50 border-2 border-gray-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-50 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onSubmit = () => {
    axios.post('/api/contact', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success (e.g., show a success message to the user)
      })
      .catch((error) => {
        console.error('Error sending contact information:', error);
        // Handle error (e.g., show an error message to the user)
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-extrabold text-left text-gray-900 dark:text-slate-50">
          Contact Me
        </h2>
        <form action="#" className="space-y-8">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-3/6">
              <label className={inputHeader}>Name</label>
              <input
                type="text"
                id="name"
                className={inputField}
                placeholder="First Last"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className={inputHeader}>Email</label>
              <input
                type="email"
                id="email"
                className={inputField}
                placeholder="name@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className={inputHeader}>Subject</label>
            <input
              type="text"
              id="subject"
              className={inputField}
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className={inputHeader}>Message Body</label>
            <textarea
              id="message"
              rows={6}
              className={inputField}
              placeholder="Leave a comment"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            onClick={onSubmit}
            className="shadow bg-slate-50 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
            type="button"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}
