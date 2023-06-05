import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover uniques destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="To be added soon"
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="To be added soon"
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="To be added soon"
        />
      </div>
    </div>
  );
}

export default Trip;
