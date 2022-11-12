
import './Enovous.css';

function Enovous() {
  return (
      <div className="main">
      <div className="objects">
        <ul className="box">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="box1">
        <div id="image">
          <img
            src="./enovous_logo.png"
            height={600}
            width={600}
            alt=""
          />
        </div>
      </div>
      <div id="box2">
        <div id="text">E-NOVUS '22</div>
      </div>
    </div>
  );
}

export default Enovous;
