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
  const texttooltipContainer = document.querySelector(
    ".--text-option-container"
  );

  const hasActiveclass = (show) => {
    texttooltipContainer.style.display = show ? "inline-flex" : "none";
  };

  const pointertrue = (show) => {
    h1editable.style.cursor = show ? "pointer" : "context-menu";
  };

  const activePointer = (buttons) => {
    buttons.style.opacity = "1";
    buttons.style.pointerEvents = "auto";
    buttons.style.cursor = "pointer";
  };

  const firstbuttonlistener = (button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const parentElement = button?.closest(".--teksten-button-holder");
      parentElement.classList.toggle("active");
      const active = parentElement.classList.contains("active");
      activeFirstbutton(active, parentElement);

      // Assuming isActive is a global or accessible variable
    });
  };
  const activeFirstbutton = (active, parentElement) => {
    if (active) {
      parentElement.innerHTML = `<h1 class="--eentitle">Een titel toevoegen</h1>
      <button class="--plus-icon-container" style="background: #fff; opacity:1;">
        <!-- SVG code here -->
      </button>`;

      // Reattach the click event listener to the button with index 0
      const newButton = parentElement.querySelector(".--plus-icon-container");
      firstbuttonlistener(newButton);
    } else {
      parentElement.innerHTML = `Kies de stijl van de titel...
      <button class="--plus-icon-container">
        <!-- SVG code here -->
      </button>`;

      // Reattach the click event listener to the button with index 0
      const newButton = parentElement.querySelector(".--plus-icon-container");
      firstbuttonlistener(newButton);
    }
  };
  hasactiveContainer.forEach((buttons) => {
    const isActive = buttons.classList.contains("active");
    const toggleTarget = buttons.getAttribute("data-toggle-target");

    if (toggleTarget === "--free-made-teksten") {
      pointertrue(isActive);

      h1editable.addEventListener("click", () => {
        textoptionbuttons.forEach((button, index) => {
          activePointer(button);
          if (index === 0) {
            firstbuttonlistener(button);
          }
        });
      });
      hasActiveclass(isActive);
    } else {
      textoptionbuttons.forEach((button) => {
        button.style.opacity = "0.3";
        button.style.pointerEvents = "none";
        button.style.cursor = "context-menu";
      });

      texttooltipContainer.style.display = "none";
    }
  });
};
//stilj changing font function

const stiljfontChange = () => {
  const cardsContainer = document.querySelectorAll(".--style-card");

  cardsContainer.forEach((changefont) => {
    changefont.addEventListener("click", (event) => {
      event.preventDefault();

      const ptags = changefont.querySelectorAll("p");

      ptags.forEach((fontvalue, index) => {
        const getptyle = window.getComputedStyle(fontvalue);
        const fontfamily = getptyle.fontFamily;
        if (index === 0) {
          const maincontent = document.querySelectorAll(
            ".--hasborder, .--lower-text h3, .--lowertext-content h3"
          );

          maincontent.forEach((transform) => {
            transform.style.fontFamily = fontfamily;
          });
        }
        if (index === 1) {
          const middlecontent = document.querySelectorAll(
            ".--middletext-content p, .--lowertext-content p, .--upper-text p"
          );

          middlecontent.forEach((transform) => {
            transform.style.fontFamily = fontfamily;
          });
        }
      });
    });
  });
};

// initialize functions
toolbarTrigger();
addBorderimg();
textEditoptions();
stiljfontChange();
