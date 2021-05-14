import '../Styling/About.css';
import ProfilePic from '../Images/ProfilePic.png';
import SkillsIcon from '../Images/SkillsIcon.svg';

function About() {
  return (
      <section className="about" id="about">
        <div className="container">
          <figure>
            <img src={ProfilePic} alt="Elliot Glaze"/>
          </figure>
          <h3>About Me</h3>
          <p>As a passionate self-motivated worker with a desire for creative problem solving, I hope to further my career as a professional Computer Science Graduate. I hope to achieve this with a commitment to and experience of constantly developing innovative and creative knowledge and skills. I have gained much technical experience with exposure to a broad range of programming languages and life cycles. Actively looking for a graduate position with a fast-paced and ambitious company that can offer development training.</p>
        </div>

        <div className="container">
          <figure>
            <img src={SkillsIcon} alt="Programming skills"/>
          </figure>
          <h3>Skills (Experience With)</h3>
          <ul>
            <li>Web Development(JavaScript, Node.js, PHP, Jquery, HTML CSS)</li>
            <li>Python</li>
            <li>C++</li>
            <li>Swift(IOS)/Kotlin-Java(Android)</li>
            <li>Databases (SQL, C#)</li>
            <li>TDD (Test Driven Development)</li>
            <li>Design (Photoshop, Illustrator, After effects)</li>
          </ul>
        </div>
      </section>
  );
}

export default About;
