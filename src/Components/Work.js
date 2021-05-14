import '../Styling/Work.css';

import Minesweeper from '../Images/MinesweeperEasy.png';
import WhoGame from '../Images/WhoGame.png';
import PhysicsEngine from '../Images/PhysicsEngine.png';
import WebScraping from '../Images/webScraping.gif';

function Work() {
  return(
    <section className="work" id="work">
      <h1>Some of My Favourite Projects</h1>

      <ul title="Click to open">
        <a href="https://github.com/ElliotG98/Physics-Engine" target="_blank" rel="noopener noreferrer">
          <li>
            <figure>
              <img src={PhysicsEngine} alt="Ball Falling in a Physics Engine"/>
            </figure>
            <h3>Physics Engine(C++/SFML)</h3>
            <p>This project summarises the fundamental mechanics necessary to build a simulation demonstrating rigid body dynamics and the forces/constraints subjected to it. Aswell as a full implementation of the best practices and techniques using C++ and the framework SFML.</p>
          </li>
        </a>

        <a href="https://github.com/ElliotG98/WebScraping" target="_blank" rel="noopener noreferrer">
          <li>
            <figure>
              <img src={WebScraping} alt="News Articles being scraped"/>
            </figure>
            <h3>Web Scraping(Python)</h3>
            <p>A tough project but with a great result, This tool allows the user to have a collection of all recent news stories from multiple sources not just one. The returned story gives the user the title of the article the link and the publish date.</p>
          </li>
        </a>

        <a href="https://github.com/ElliotG98/WhoGame" target="_blank" rel="noopener noreferrer">
          <li>
            <figure>
              <img src={WhoGame} alt="Title page of Who game"/>
            </figure>
            <h3>Guess Who Game(Kotlin/Java/Firebase)</h3>
            <p>Based on the classic Who game where the user elimiates players based on the answer to a question asked. A social media account (Facebook) is linked and makes it easier to connect and play with friends.</p>
          </li>
        </a>

        <a href="https://github.com/ElliotG98/Minesweeper/blob/master/Minesweeper.py" target="_blank" rel="noopener noreferrer">
          <li>
            <figure>
              <img src={Minesweeper} alt="Minesweeper on Easy difficulty"/>
            </figure>
            <h3>Minesweeper(Python/tkinter)</h3>
            <p>Classic Minesweeper game made with Python and tkinter GUI library. The game has 3 levels of difficulty which increases the mine count and screen size.</p>
          </li>
        </a>

      </ul>
    </section>
  );
}
export default Work;
