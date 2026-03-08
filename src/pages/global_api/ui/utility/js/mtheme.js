

export const init_setTheme = () => {
  const main_body = document.body;
  const darkmode_btn = document.getElementById("darkmode_btn");
  const lightmode_btn = document.getElementById("lightmode_btn");
  const highcontrast_btn = document.getElementById("highcontrast_btn");
  const eyecomfort_btn = document.getElementById("eyecomfort_btn");
  const default_theme_btn = document.getElementById("default_theme_btn");

  default_theme_btn.addEventListener("click", (event) => {
    main_body.classList.remove("DarkMode");
    main_body.classList.remove("LightMode");
    main_body.classList.remove("HighContrast");
    main_body.classList.remove("EyeComfort");

    localStorage.setItem("theme_config", "Default");
  });

  darkmode_btn.addEventListener("click", (event) => {
    main_body.classList.remove("LightMode");
    main_body.classList.remove("HighContrast");
    main_body.classList.remove("EyeComfort");

    main_body.classList.toggle("DarkMode");

    localStorage.setItem("theme_config", "DarkMode");
  });

  lightmode_btn.addEventListener("click", (event) => {
    main_body.classList.remove("DarkMode");
    main_body.classList.remove("HighContrast");
    main_body.classList.remove("EyeComfort");

    main_body.classList.toggle("LightMode");

    localStorage.setItem("theme_config", "LightMode");
  });

  highcontrast_btn.addEventListener("click", (event) => {
    main_body.classList.remove("DarkMode");
    main_body.classList.remove("LightMode");
    main_body.classList.remove("EyeComfort");

    main_body.classList.toggle("HighContrast");

    localStorage.setItem("theme_config", "HighContrast");
  });

  eyecomfort_btn.addEventListener("click", (event) => {
    main_body.classList.remove("DarkMode");
    main_body.classList.remove("LightMode");
    main_body.classList.remove("HighContrast");

    main_body.classList.toggle("EyeComfort");

    localStorage.setItem("theme_config", "EyeComfort");
  });

  const themeconfig = localStorage.getItem("theme_config");

  // enrolled subject minizime and expand
  if (themeconfig === "Default") {
    main_body.classList.remove("DarkMode");
    main_body.classList.remove("LightMode");
    main_body.classList.remove("HighContrast");
    main_body.classList.remove("EyeComfort");
  }
  if (themeconfig === "DarkMode") {
    main_body.classList.remove("LightMode");
    main_body.classList.remove("HighContrast");
    main_body.classList.remove("EyeComfort");

    main_body.classList.toggle("DarkMode");
  }
  if (themeconfig === "LightMode") {
    main_body.classList.remove("DarkMode");
    main_body.classList.remove("HighContrast");
    main_body.classList.remove("EyeComfort");

    main_body.classList.toggle("LightMode");
  }
  if (themeconfig === "HighContrast") {
    main_body.classList.remove("DarkMode");
    main_body.classList.remove("LightMode");
    main_body.classList.remove("EyeComfort");

    main_body.classList.toggle("HighContrast");
  }
  if (themeconfig === "EyeComfort") {
    main_body.classList.remove("DarkMode");
    main_body.classList.remove("LightMode");
    main_body.classList.remove("HighContrast");

    main_body.classList.toggle("EyeComfort");
  }


  
};
