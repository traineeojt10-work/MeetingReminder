import { initDialog } from "./dialog.js";
import { initEventForm } from "./event-form.js";
import { initToaster } from "./toaster.js";

export function initEventFormDialog() {
  const dialog = initDialog("event-form");
  const toaster = initToaster(dialog.dialogElement);
  const eventForm = initEventForm(toaster);

  const dialogTitleElement = dialog.dialogElement.querySelector("[data-dialog-title]");
  // console.log(dialog.dialogElement);



  // custom added
  const edit_Title_C = dialog.dialogElement.querySelector("#title_field");
  const title_label = edit_Title_C.querySelector("#e_title");

  const e_title_input = edit_Title_C.querySelector("input#title");
  // console.log(e_title_input);
  // console.log(edit_Title_C);
  // custom added


  document.addEventListener("event-create-request", (event) => {
    dialogTitleElement.textContent = "Add Event";

    title_label.style.display = "flex";
    e_title_input.removeAttribute("readonly");
    e_title_input.setAttribute("autofocus", "true");

    
    eventForm.switchToCreateMode(
      event.detail.date,
      event.detail.startTime,
      event.detail.endTime
      
    );
    dialog.open();
    


    
  });

  document.addEventListener("event-edit-request", (event) => {
    dialogTitleElement.textContent = "Edit Event";


    title_label.style.display = "none";
    e_title_input.setAttribute("readonly", "true");
    e_title_input.removeAttribute("autofocus");


    eventForm.switchToEditMode(event.detail.event);
    dialog.open();
  });

  dialog.dialogElement.addEventListener("close", () => {
    eventForm.reset();
  });

  eventForm.formElement.addEventListener("event-create", () => {
    dialog.close();
  });

  eventForm.formElement.addEventListener("event-edit", () => {
    dialog.close();
  });
}