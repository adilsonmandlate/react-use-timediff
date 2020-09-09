import React from "react";
import { useTimeDiff } from "react-use-timediff";

const App = () => {
  const liveExample = useTimeDiff(new Date(2020, 11, 31, 23, 59, 59), {
    live: true,
  });

  const liveFiveSeconds = useTimeDiff(new Date(2020, 11, 31, 23, 59, 59), {
    live: true,
    interval: 5000,
  });

  const staticDiff = useTimeDiff(new Date(2020, 11, 31, 23, 59, 59));

  return (
    <div className="container">
      <h1 className="title">Time left for new year</h1>

      {/* Live Example */}
      <section>
        <h3 className="subTitle">Updates every second:</h3>
        <div>
          <p>
            <span className="number">{liveExample?.years}</span>
            <span className="label">Years</span>
          </p>
          <p>
            <span className="number">{liveExample?.months}</span>
            <span className="label">Months</span>
          </p>

          <p>
            <span className="number">{liveExample?.days}</span>
            <span className="label">Days</span>
          </p>

          <p>
            <span className="number">{liveExample?.hours}</span>
            <span className="label">Hours</span>
          </p>

          <p>
            <span className="number">{liveExample?.minutes}</span>
            <span className="label">Minutes</span>
          </p>

          <p>
            <span className="number">{liveExample?.seconds}</span>
            <span className="label">Seconds</span>
          </p>
        </div>
      </section>

      {/* Live Example - 5 seconds refresh */}
      <section>
        <h3 className="subTitle">Updates every 5 seconds:</h3>
        <div>
          <p>
            <span className="number">{liveFiveSeconds?.years}</span>
            <span className="label">Years</span>
          </p>
          <p>
            <span className="number">{liveFiveSeconds?.months}</span>
            <span className="label">Months</span>
          </p>
          <p>
            <span className="number">{liveFiveSeconds?.days}</span>
            <span className="label">Days</span>
          </p>

          <p>
            <span className="number">{liveFiveSeconds?.hours}</span>
            <span className="label">Hours</span>
          </p>

          <p>
            <span className="number">{liveFiveSeconds?.minutes}</span>
            <span className="label">Minutes</span>
          </p>

          <p>
            <span className="number">{liveFiveSeconds?.seconds}</span>
            <span className="label">Seconds</span>
          </p>
        </div>
      </section>

      {/* Static Example */}
      <section>
        <h3 className="subTitle">Updates only on load:</h3>
        <div>
          <p>
            <span className="number">{staticDiff?.years}</span>
            <span className="label">Years</span>
          </p>
          <p>
            <span className="number">{staticDiff?.months}</span>
            <span className="label">Months</span>
          </p>
          <p>
            <span className="number">{staticDiff?.days}</span>
            <span className="label">Days</span>
          </p>

          <p>
            <span className="number">{staticDiff?.hours}</span>
            <span className="label">Hours</span>
          </p>

          <p>
            <span className="number">{staticDiff?.minutes}</span>
            <span className="label">Minutes</span>
          </p>

          <p>
            <span className="number">{staticDiff?.seconds}</span>
            <span className="label">Seconds</span>
          </p>
        </div>
      </section>
    </div>
  );
};
export default App;
