import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus('');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || 'Failed to submit message');
      }

      setStatus('Thank you! Your message has been saved to the database.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact submit error:', err);
      setError(err.message || 'Unable to send your message right now. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-control mb-3"
          rows="5"
        />
        <button type="submit" disabled={submitting} className="btn btn-dark btn-lg w-100">
          {submitting ? 'Sending...' : 'Send'}
        </button>
      </form>
      {status && <p className="mt-3 text-success">{status}</p>}
      {error && <p className="mt-3 text-danger">{error}</p>}
    </div>
  );
};

export default Contact;
