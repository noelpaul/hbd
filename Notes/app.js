const theme = JSON.parse(localStorage.getItem("Theme-React")),
  firstInstall = JSON.parse(localStorage.getItem("FirstInstall")),
  reloadConfirm =
    "New update have been installed. let's Activate the update by reloading the page";

const APPinit = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (firstInstall === null) {
        localStorage.setItem("FirstInstall", false);
      }

      if (firstInstall === false) {
        if (confirm(reloadConfirm)) window.location.reload();
      }
    });
    
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("Service-Worker Registered"))
      .catch((err) => console.log("Service-Worker Not Registered", err));
  }

  if (theme !== null) {
    const elmnt = document.querySelector(".root");
    if (!theme) elmnt.classList.add("dark");
    else elmnt.classList.remove("dark");
  }
};

document.addEventListener("DOMContentLoaded", APPinit);