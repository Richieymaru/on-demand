//menu bar js

const toolbarTrigger = () => {
  const toolbarListBtns = document.querySelectorAll(".--list-container");

  toolbarListBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const toggleTarget = button.getAttribute("data-toggle-target");
      const targetContainer = document.querySelector(`.${toggleTarget}`);

      if (targetContainer) {
        textEditoptions();
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

  const activeFirstbutton = (active, parentElement) => {
    if (active) {
      parentElement.innerHTML = `<h1 class="--eentitle">Een titel toevoegen</h1>
      <button class="--plus-icon-container" style="background: #fff; opacity:1; pointer-events: auto">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.1875 11.0312C16.5938 11.1562 16.8125 11.5625 16.6875 11.9688C15.8125 14.9375 13.0625 17 9.96875 17C7.5 17 5.21875 15.6562 3.96875 13.5625V16.75C3.96875 17.1875 3.65625 17.5 3.21875 17.5C2.8125 17.5 2.46875 17.1875 2.46875 16.75V11.75C2.46875 11.3438 2.8125 11 3.21875 11H8.21875C8.65625 11 8.96875 11.3438 8.96875 11.75C8.96875 12.1875 8.625 12.5 8.21875 12.5H5.0625C6 14.3125 7.875 15.5 9.96875 15.5C12.4062 15.5 14.5938 13.875 15.25 11.5312C15.375 11.125 15.7812 10.9062 16.1875 11.0312ZM16.75 2.5C17.1562 2.5 17.5 2.84375 17.5 3.25V8.25C17.5 8.6875 17.1562 9 16.75 9H11.75C11.3125 9 11 8.6875 11 8.25C11 7.84375 11.3125 7.5 11.75 7.5H14.875C13.9375 5.71875 12.0625 4.5 10 4.5C7.5625 4.5 5.375 6.15625 4.6875 8.46875C4.59375 8.875 4.1875 9.09375 3.78125 8.96875C3.375 8.875 3.15625 8.4375 3.25 8.0625C4.125 5.09375 6.90625 3 10 3C12.4688 3 14.75 4.375 16 6.46875V3.25C16 2.84375 16.3125 2.5 16.75 2.5Z" fill="#2280D2"/>
      </svg>
      
      </button>`;

      const newButton = parentElement.querySelector(".--plus-icon-container");
      firstbuttonlistener(newButton);
    } else {
      parentElement.innerHTML = `Kies de stijl van de titel...
      <button class="--plus-icon-container" style=" opacity:1; pointer-events: auto">
      <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 10C16.5 10.4375 16.1562 10.75 15.75 10.75H10.75V15.75C10.75 16.1875 10.4062 16.5312 10 16.5312C9.5625 16.5312 9.25 16.1875 9.25 15.75V10.75H4.25C3.8125 10.75 3.5 10.4375 3.5 10.0312C3.5 9.59375 3.8125 9.25 4.25 9.25H9.25V4.25C9.25 3.84375 9.5625 3.53125 10 3.53125C10.4062 3.53125 10.75 3.84375 10.75 4.25V9.25H15.75C16.1562 9.25 16.5 9.59375 16.5 10Z"
        fill="white"
      />
    </svg>
      </button>`;

      const newButton = parentElement.querySelector(".--plus-icon-container");
      firstbuttonlistener(newButton);
    }
  };
  const firstbuttonlistener = (button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const parentElement = button.closest(".--teksten-button-holder");
      if (parentElement) {
        parentElement.classList.toggle("active");
        const active = parentElement.classList.contains("active");
        activeFirstbutton(active, parentElement);
      }
    });
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
stiljfontChange();
