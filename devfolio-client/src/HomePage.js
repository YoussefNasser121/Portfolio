import { NavLink } from 'react-router-dom';

const HomePage = () => {
 const skills = [
  'C', 'C++', 'Python', 'Java', 'C#', 'JavaScript', 'SQL', 'VHDL',
  'Arduino', 'ESP32-CAM', 'VHDL/ModelSim', 'Microprocessors', 'MAX7219', 'Servo Control', 'Multisim',
  'TensorFlow', 'Keras', 'MobileNetV2', 'Transfer Learning', 'OpenCV', 'Scikit-learn', 'Data Augmentation',
  'HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'MySQL', 'MongoDB',
  'Git', 'GitHub', 'Docker', 'Linux (Ubuntu/Kali/CentOS)', 'AWS', 'Cisco Packet Tracer', 'Wireshark', 'Android Studio', 'Unity',
  'VS Code', 'Arduino IDE'
];

  return (
    <div className="container py-5">
         <img 
    src="/profile.jpg" 
    alt="Profile" 
    className="rounded-circle d-block mx-auto mb-3" 
    style={{ width: "250px", height: "250px", objectFit: "cover" }}
  />
      <div className="text-center mb-5">
        <h1 className="display-4">Youssef Nasser Ragab Abouelmagd</h1>
        <p className="lead">Fourth-Year Computer Engineering Student</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="YoussefNasser_CV_Optimized.pdf" download className="btn btn-outline-dark btn-lg">
            Download CV
          </a>
          <NavLink to="/projects" className="btn btn-dark btn-lg">
            View Projects
          </NavLink>
        </div>
      </div>

      <h2 className="mb-4 text-center">Skills and Technologies</h2>
      <div className="row justify-content-center">
        {skills.map((skill) => (
          <div className="col-4 col-md-2 text-center mb-3" key={skill}>
            <div className="badge bg-secondary py-2 px-3">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
