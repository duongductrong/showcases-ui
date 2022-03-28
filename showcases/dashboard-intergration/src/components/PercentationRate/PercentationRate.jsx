import { Fragment } from "react";

function PercentationRate({
  width,
  height,
  strokeWidth = 12,
  percent = 0,
  ...props
}) {
  const frame = { width, height };

  const radius = frame.width / 2 - strokeWidth;
  const fullSize = radius * Math.PI;
  const currentSize = (radius * Math.PI * percent) / 100;

  return (
    <Fragment>
      <svg
        {...props}
        className="dashboard-rate__performance__process"
        {...frame}
      >
        <circle
          cx={frame.width / 2}
          cy={frame.height / 2}
          r={radius}
          stroke="#2d2d2d"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={radius * Math.PI}
          strokeLinecap="round"
        />

        <circle
          cx={frame.width / 2}
          cy={frame.height / 2}
          r={radius - strokeWidth * 2}
          stroke="#104ad4"
          strokeWidth={2}
          fill="none"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />

        <circle
          cx={frame.width / 2}
          cy={frame.height / 2}
          radius={radius}
          stroke="#104ad4"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${currentSize} ${fullSize}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="dashboard-rate__performance__info">
        <span className="dashboard-rate__performance__info__start">0%</span>
        <div className="dashboard-rate__performance__info__process">
          <span className="dashboard-rate__performance__info__process__percent">
            {percent}%
          </span>
          <span className="dashboard-rate__performance__info__process__text">
            Based on Likes
          </span>
        </div>
        <span className="dashboard-rate__performance__info__end">100%</span>
      </div>
    </Fragment>
  );
}

export default PercentationRate;
