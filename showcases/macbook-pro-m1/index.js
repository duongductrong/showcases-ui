document.addEventListener("DOMContentLoaded", () => {
  const state = {
    holded: false,
  };

  const selectorContainer = document.querySelector("#macbook-container");
  const selectorToggleBtn = document.querySelector("#toggle-mac");

  const mousedown = (event) => {
    state.holded = true;
  };

  const mouseup = () => {
    state.holded = false;
  };

  const mousemove = (event) => {
    if (state.holded) {
      let xAxis = 0,
        shadowX = 0;
      const screenWidth = window.innerWidth;
      const centralPoint = screenWidth / 2;
      const { clientX } = event;

      // Mouse right
      if (clientX > centralPoint) {
        xAxis = clientX - centralPoint;
        shadowX = -1;
      }
      // Mouse left
      else {
        xAxis = (centralPoint - clientX) * -1;
        shadowX = 1;
      }

      document.documentElement.style.setProperty("--cursor", "grabbing");
      document.documentElement.style.setProperty(
        "--rotateY-element",
        `${xAxis / 6}deg`
      );

      // shadow
      document.documentElement.style.setProperty(
        "--shadow-floor-x",
        `${shadowX}px`
      );
    } else {
      document.documentElement.style.setProperty("--cursor", "pointer");
      document.documentElement.style.setProperty(
        "--rotateY-element",
        `${0}deg`
      );
      document.documentElement.style.setProperty("--shadow-floor-x", `${0}px`);
    }
  };

  const toggleMac = (event) => {
    const el = event.target;
    const isExpanded = el.getAttribute("data-expanded") == "true";

    if (isExpanded) {
      document.documentElement.style.setProperty("--rotate-screen-x", "0deg");

      el.setAttribute("data-expanded", "false");
    } else {
      document.documentElement.style.setProperty("--rotate-screen-x", "80deg");

      el.setAttribute("data-expanded", "true");
    }
  };

  selectorContainer.addEventListener("mousedown", mousedown);
  window.addEventListener("mouseup", mouseup);
  window.addEventListener("mousemove", mousemove);

  selectorToggleBtn.addEventListener("click", toggleMac);
});
