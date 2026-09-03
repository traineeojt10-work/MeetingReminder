/**
 * @Todo
 * fix alert() when shown in dialog the form is not clickable
 */


function Toaster() {

}

export const showLoginBoxDiv = () => {

  const lgn_btn = document.querySelector("#lgn_btn") as HTMLButtonElement;
  const login_box = document.getElementById("login_box") as HTMLDivElement;
  const login_box_close_btn = document.getElementById("close_btn") as HTMLButtonElement;

  lgn_btn.addEventListener("click", (event) => {
    if (login_box) {
      login_box.style.display = "flex";
    }
  });

  login_box_close_btn.addEventListener("click", (event) => {
    if (login_box) {
      login_box.style.display = "none";
    }
  });

};

export const ToasterUI = () => {

  const Toaster_ui = document.querySelector(".Toaster") as HTMLDialogElement;

  const close_btn = Toaster_ui.querySelector(".close_toaster") as HTMLButtonElement;

  Toaster_ui.addEventListener("click", (event) => {
    event.preventDefault();
  });

  close_btn.addEventListener("click", (event) => {
    Toaster_ui.close();
  });



}

export const showEmployeeDialog = () => {

  const login_box = document.getElementById("login_box") as HTMLDivElement;

  const employee_button = document.getElementById("employee_button") as HTMLButtonElement;
  const employee_login_dialog = document.getElementById("employee_login_dialog") as HTMLDialogElement;
  const employee_form = employee_login_dialog.querySelector("#employee_form") as HTMLFormElement;
  
  const close_btn = employee_login_dialog.querySelector("#close_btn") as HTMLButtonElement;
  const submit_btn = employee_login_dialog.querySelector("#submit_btn") as HTMLElement  ;

  const Toaster_ui = document.querySelector(".Toaster") as HTMLDialogElement;

  

  employee_button.addEventListener("click", (event) => {
    if (employee_login_dialog) {
      employee_login_dialog.showModal();
    }

    if (login_box) {
      login_box.style.display = "none";
    }

  });

  employee_login_dialog.addEventListener("click", (event) => {

    const thetarget = event.target as HTMLElement;
    if (thetarget.matches("#submit_btn")) {
      if (employee_login_dialog) {
        event.preventDefault();
      }

    }

  });

  employee_login_dialog.addEventListener("keydown", (event) => {
    
    
    if ((event as KeyboardEvent).key === "Enter") {
      event.preventDefault();
      if (submit_btn) {
        submit_btn.click();
        
      }
    }

    if ((event as KeyboardEvent).key === "Escape") {
      event.preventDefault();
      if (close_btn) {
        close_btn.click();
      }
    }

  });

  const parent = document.querySelector("#employee_login_dialog") as HTMLDialogElement;
  parent.addEventListener("click", (event) => {
    event.preventDefault();

    const thetarget = event.target as HTMLElement;
    if(thetarget.matches("#submit_btn")) {
      // console.log(event.target);

      Toaster_ui.showModal();
      const data_content = Toaster_ui.querySelector(".data_content") as HTMLDivElement;
      data_content.innerText = "Login Successfully.";
      
      employee_form.reset();
    }

  });

  submit_btn.addEventListener("click", () => {
      Toaster_ui.showModal();
      const data_content = Toaster_ui.querySelector(".data_content") as HTMLDivElement;
      data_content.innerText = "Login Successfully.";
      employee_form.reset();

      console.log(window.location);
      // window.location.href = "./../pages/dashboard_page/dashboard.html";
      window.location.href = "./src/pages/dashboard_page/dashboard.html";


  });

  close_btn.addEventListener("click", () => {
    if (employee_login_dialog) {
      employee_login_dialog.close();
      employee_form.reset();
    }
    
  });

};

export const showAdminDialog = () => {

  const login_box = document.getElementById("login_box") as HTMLDivElement;
  
  const admin_button = document.getElementById("admin_button") as HTMLButtonElement;
  const admin_login_dialog = document.querySelector("#admin_login_dialog") as HTMLDialogElement;

  const admin_form = admin_login_dialog.querySelector("#admin_form") as HTMLFormElement;

  const close_btn = admin_login_dialog.querySelector("#close_btn") as HTMLButtonElement;
  const submit_btn = admin_login_dialog.querySelector("#submit_btn") as HTMLElement  ;
  const Toaster_ui = document.querySelector(".Toaster") as HTMLDialogElement;

  admin_button.addEventListener("click", () => {
    if (admin_login_dialog) {
      admin_login_dialog.showModal();
    }

    if (login_box) {
      login_box.style.display = "none";
    }
  });

  admin_login_dialog.addEventListener("click", (event) => {

    const thetarget = event.target as HTMLElement;
    if (thetarget.matches("#submit_btn")) {
      if (admin_login_dialog) {
        event.preventDefault();
      }

    }

  });

  admin_login_dialog.addEventListener("keydown", (event) => {
    
    if ((event as KeyboardEvent).key === "Enter") {
      event.preventDefault();
      if (submit_btn) {
        submit_btn.click();
        
      }
    }

    if ((event as KeyboardEvent).key === "Escape") {
      event.preventDefault();
      if (close_btn) {
        close_btn.click();
      }
    }

  });

  const parent = document.querySelector("#admin_login_dialog") as HTMLDialogElement;
  parent.addEventListener("click", (event) => {
    event.preventDefault();

    const thetarget = event.target as HTMLElement;
    if(thetarget.matches("#submit_btn")) {

      Toaster_ui.showModal();
      const data_content = Toaster_ui.querySelector(".data_content") as HTMLDivElement;
      data_content.innerText = "Admin Login Successfully.";
      admin_form.reset();

      

    }

  });

  submit_btn.addEventListener("click", () => {
      Toaster_ui.showModal();
      const data_content = Toaster_ui.querySelector(".data_content") as HTMLDivElement;
      data_content.innerText = "Login Successfully.";
      admin_form.reset();

      console.log(window.location);
      window.location.href = "./src/pages/admin_page/admin_page.html";


  });

  close_btn.addEventListener("click", () => {
    if (admin_login_dialog) {
      admin_login_dialog.close();
      admin_form.reset();
    }
    
  });




}


export const showSignUPDialog = () => {

  const employee_login_dialog = document.getElementById("employee_login_dialog") as HTMLDialogElement;
  const admin_login_dialog = document.querySelector("#admin_login_dialog") as HTMLDialogElement;

  
  const signup_link_employee = employee_login_dialog.querySelector("#signup_link") as HTMLLinkElement;
  const signup_link_admin = admin_login_dialog.querySelector("#signup_link") as HTMLLinkElement;
  
  const signup_dialog = document.querySelector("#signup_dialog") as HTMLDialogElement;
  const signup_form = signup_dialog.querySelector("#signup_form") as HTMLFormElement;
  const close_btn = signup_dialog.querySelector("#close_btn") as HTMLButtonElement;


  signup_link_employee.addEventListener("click", () => {
    signup_dialog.showModal();

  });

  signup_link_admin.addEventListener("click", () => {
    signup_dialog.showModal();

  });

  signup_dialog.addEventListener("click", (event) => {
    event.preventDefault();
  });

  close_btn.addEventListener("click", () => {
    if (signup_dialog) {
      signup_dialog.close();
      signup_form.reset();
    }
    
  });





}






