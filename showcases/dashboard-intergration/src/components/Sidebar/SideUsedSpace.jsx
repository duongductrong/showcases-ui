/** SideUsedSpace */
function SideUsedSpace({ title, desc, progress = 0, ...props }) {
  return (
    <div className="side-usedspace">
      <h3 className="side-usedspace__title">{title}</h3>
      <p
        className="side-usedspace__desc"
        dangerouslySetInnerHTML={{ __html: desc }}
      ></p>

      <div className="side-usedspace__progress">
        <span className="side-usedspace__progress__number">{progress}%</span>
        <div
          className="side-usedspace__progress__proccessing"
          style={{ "--side-used-space-progress": `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
/** End: SideUsedSpace */

export default SideUsedSpace;
