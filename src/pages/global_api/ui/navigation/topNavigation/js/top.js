/**
 * @variable here
 */

const my_notif_btn = document.getElementById("my_notif_btn");
const mynotif_box = document.getElementById("mynotif_box");

const dropdown_notif_btn = document.getElementById("dropdown_notif_btn");
const elipsis_notif_content = document.getElementById("elipsis_notif_content");

const notif_list = document.querySelectorAll("#notif_list li");
const number_of_notification = notif_list.length.toString();
const notif_num = document.getElementById("notif_num");

// const message_list = document.querySelectorAll("#message_list li");
// const number_of_message = message_list.length.toString();
// const message_num = document.getElementById("message_num");

// const my_message_btn = document.getElementById("my_message_btn");
// const mymessage_box = document.getElementById("mymessage_box");

// const dropdown_message_btn = document.getElementById("dropdown_message_btn");
// const elipsis_message_c = document.getElementById("elipsis_message_c");

const my_profile_btn = document.getElementById("my_profile_btn");
const profile_summary_box = document.getElementById("profile_summary_box");

const main_element = document.getElementById("main_element");

export const ShowProfileSummaryPanel = () => {
  my_profile_btn.addEventListener("click", (event) => {
    if (profile_summary_box.style.display === "flex") {
      profile_summary_box.style.display = "none";
      // elipsis_message_c.style.display = "none";
    } else {
      profile_summary_box.style.display = "flex";
      // mymessage_box.style.display = "none";
      // elipsis_message_c.style.display = "none";
      mynotif_box.style.display = "none";
    }
  });
};

export const HideTopNavPanel = () => {
  main_element.addEventListener("click", (event) => {
    profile_summary_box.style.display = "none";
    // mymessage_box.style.display = "none";
    mynotif_box.style.display = "none";
  });
};

export const ShowNotificationPanel = () => {
  my_notif_btn.addEventListener("click", (event) => {
    if (mynotif_box.style.display === "flex") {
      mynotif_box.style.display = "none";
      // elipsis_message_c.style.display = "none";
    } else {
      mynotif_box.style.display = "flex";
      // mymessage_box.style.display = "none";
      // elipsis_message_c.style.display = "none";
      profile_summary_box.style.display = "none";
    }
  });
};

export const ShowNotifAllDropDown = () => {
  dropdown_notif_btn.addEventListener("click", (event) => {
    if (elipsis_notif_content.style.display === "flex") {
      elipsis_notif_content.style.display = "none";
    } else {
      elipsis_notif_content.style.display = "flex";
    }

    // hide theme dropdown
    window.onclick = function (event) {
      if (!event.target.matches("#notif_dropdown_image")) {
        // console.log(event.target);
        if (elipsis_notif_content.style.display === "flex") {
          elipsis_notif_content.style.display = "none";
        }
      }
    };
    // window.onclick end
  });
};

export const NotifCounter = () => {
  notif_num.innerHTML = number_of_notification;
};

export const init_MessageDialog = () => {
  const message_icon = document.querySelector("#my_message_btn");

  const message_dialog = document.querySelector("[send_message_dialog]");
  const send_btn = message_dialog.querySelector("#submit_message_btn");
  const close_di = message_dialog.querySelector("#dialog_close_btn");

  message_dialog.addEventListener("click", (event) => {
    if (event.target.matches("#submit_message_btn")) {
      event.preventDefault();
    }
  });

  message_dialog.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      send_btn.click();
    }

    if (event.key === "Escape") {
      close_di.click();
    }
  });

  message_icon.addEventListener("click", (event) => {
    message_dialog.showModal();
  });

  close_di.addEventListener("click", (event) => {
    event.preventDefault();
    message_dialog.close();
  });
};



