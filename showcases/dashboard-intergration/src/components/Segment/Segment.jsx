import classNames from "classnames";

/** Segment */
function Segment({ className, numberals = [], ...props }) {
  const totalNumberals = Math.max(...numberals.map(({ value }) => value));
  const _numberals = numberals
    .sort((a, b) => b.value - a.value)
    .map((item, index) => {
      item.percent = (item.value / totalNumberals) * 100;
      return item;
    });

  return (
    <div {...props} className={classNames("segment", className)}>
      <div className="segment__numberal">
        {_numberals?.map((numberal, key) => (
          <span
            key={key}
            className="segment__numberal__range"
            style={{
              bottom: `${numberal.percent - 5}%`,
              color: numberal.color,
            }}
          >
            {numberal.value}
          </span>
        ))}
      </div>
      <div className="segment__info">
        {_numberals?.map((numberal, index) => (
          <div
            key={index}
            className="segment__info__range"
            style={{
              height: `${numberal.percent}%`,
              backgroundColor: numberal.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}
/** End: Segment */

export default Segment;
