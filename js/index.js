//menu bar js

const toolbarTrigger = () => {
  const toolbarListBtns = document.querySelectorAll(".--list-container");

  toolbarListBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const toggleTarget = button.getAttribute("data-toggle-target");
      const targetContainer = document.querySelector(`.${toggleTarget}`);

      if (targetContainer) {
        toolbarListBtns.forEach((otherButton) => {
          if (otherButton !== button) {
            const otherToggleTarget =
              otherButton.getAttribute("data-toggle-target");
            const otherTargetContainer = document.querySelector(
              `.${otherToggleTarget}`
            );

            if (otherTargetContainer) {
              otherButton.classList.remove("active");
              otherTargetContainer.style.display = "";
            }
          }
        });

        button.classList.toggle("active");
        targetContainer.style.display =
          targetContainer.style.display === "flex" ? "" : "flex";

        textEditoptions();
      }
    });
  });
};
// add border active to images below
const addBorderimg = () => {
  const containers = document.querySelectorAll(".--img-container");

  let lastClickedContainer = null;

  containers.forEach((container) => {
    container.addEventListener("click", () => {
      if (lastClickedContainer) {
        lastClickedContainer.classList.remove("--black-border");
      }

      container.classList.add("--black-border");
      lastClickedContainer = container;
    });
  });
};

//text-option js

const textEditoptions = () => {
  const hasactiveContainer = document.querySelectorAll(".--list-container");
  const textoptionbuttons = document.querySelectorAll(".--plus-icon-container");
  const h1editable = document.querySelector("#editexth1");

  const hasActiveclass = (show) => {
    const texttooltipContainer = document.querySelector(
      ".--text-option-container"
    );

    texttooltipContainer.style.display = show ? "inline-flex" : "none";
  };
  const pointertrue = (show) => {
    h1editable.style.cursor = show ? "pointer" : "context-menu";
  };
  hasactiveContainer.forEach((buttons) => {
    const isActive = buttons.classList.contains("active");
    const toggleTarget = buttons.getAttribute("data-toggle-target");

    if (toggleTarget === "--free-made-teksten") {
      pointertrue(isActive);
      h1editable.addEventListener("click", () => {
        textoptionbuttons.forEach((buttons) => {
          console.log(buttons);
          buttons.style.pointerEvents = "auto";
          buttons.style.opacity = "1";
          buttons.addEventListener("click", (event) => {
            event.preventDefault();
            console.log(buttons);
          });
        });
        hasActiveclass(isActive);
      });
    } else {
      const texttooltipContainer = document.querySelector(
        ".--text-option-container"
      );
      texttooltipContainer.style.display = "none";
    }
  });
};
// initialize functions
toolbarTrigger();
addBorderimg();
