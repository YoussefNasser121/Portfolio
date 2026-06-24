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
    <div className="container py-4 py-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="mb-4 text-center">Contact Me</h2>
          
          <div className="mb-5 p-4" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
            <h5 className="mb-3 text-center">Quick Contact Info</h5>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <div className="text-center">
                <p className="text-muted mb-1">📞 Phone</p>
                <a href="tel:+201111008884" className="text-decoration-none" style={{ color: "#051c4f", fontSize: "1.1rem", fontWeight: "bold" }}>
                  01111008884
                </a>
              </div>
              <div className="text-center">
                <p className="text-muted mb-1">✉️ Email</p>
                <a href="mailto:youssefnasserea@gmail.com" className="text-decoration-none" style={{ color: "#051c4f", fontSize: "1.1rem", fontWeight: "bold" }}>
                  youssefnasserea@gmail.com
                </a>
              </div>
            </div>
          </div>

          <h5 className="mb-3 text-center">Send Message</h5>
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
          {status && <p className="mt-3 text-success text-center">{status}</p>}
          {error && <p className="mt-3 text-danger text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
