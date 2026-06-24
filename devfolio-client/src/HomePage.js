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
    <div className="container py-4 py-md-5">
         <img 
    src="/Profile.jpg" 
    alt="Profile" 
    className="rounded-circle d-block mx-auto mb-3 profile-image" 
    style={{ width: "300px", height: "300px", aspectRatio: "1/1", objectFit: "cover", maxWidth: "80vw", maxHeight: "80vw" }}
  />
      <div className="text-center mb-4 mb-md-5">
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

      <h2 className="mb-3 text-center">Skills and Technologies</h2>
     
      <div className="skills-section p-4 rounded-4 mb-5">
        <div className="row g-3 justify-content-center">
          {skills.map((skill) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={skill}>
              <div className="skill-pill text-center">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
