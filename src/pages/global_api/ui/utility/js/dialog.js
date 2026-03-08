
export const init_OpenNotifDialog = () => {


    const notification_dialog = document.querySelector("[notification_dialog]");
    const follow_link = notification_dialog.querySelector("#follow_link");
    const dialog_close_btn = notification_dialog.querySelector("#dialog_close_btn");

    const notif_link_ui = notification_dialog.querySelector("#notif_link");


    notification_dialog.addEventListener("click", (event) => {
        if (event.target.matches("#follow_link")) {
            event.preventDefault();
        }
    });

    follow_link.addEventListener("click", (event) => {
        window.location.href = notif_link_ui.value;
    });
    
    const parent = document.querySelector("#notif_list");
    parent.addEventListener("click", (event) => {

        // personal notofication
        if (event.target.matches("#notif_main_paragraph")) {
            event.preventDefault();
            notification_dialog.showModal();

            const notification_card = event.target.closest("#notification_card");
            const notif_author = notification_card.querySelector("#user_real_name");
            const notif_id = notification_card.querySelector("#m_notif_id");
            const notif_body = notification_card.querySelector("#notif_main_paragraph");
            const notif_date = notification_card.querySelector("#notif_date");
            const notif_link = "./../calendar_page/calendar.php";
            
            const notif_author_ui = notification_dialog.querySelector("#notif_author_ui");
            const notif_content_body = notification_dialog.querySelector("#notif_content > p:nth-child(1)");
            const notif_content_date = notification_dialog.querySelector("#notif_content > p:nth-child(2)");
            

            notif_author_ui.textContent = notif_author.textContent;
            notif_content_body.textContent = notif_body.textContent;
            notif_content_date.textContent = notif_date.textContent;
            notif_link_ui.value = notif_link;

           

        }

        // quiz notofication
        if (event.target.matches("#notifquiz_main_paragraph")) {
            event.preventDefault();
            notification_dialog.showModal();

            const notification_card = event.target.closest("#notification_card");
            const notif_author = notification_card.querySelector("#quiz_author");
            const notif_body = notification_card.querySelector("#notifquiz_main_paragraph");
            const notif_date = notification_card.querySelector("#notif_date");

            const quiz_subject = notification_card.querySelector("#quiz_subject");
            const quiz_id_notif = notification_card.querySelector("#quiz_id_notif");
            const notif_link = "./../01SubjectView/subject_name_view.php?TheSubjectCode=" + quiz_subject.value + 
            "&TheQuizID=" + quiz_id_notif.value;


            const notif_author_ui = notification_dialog.querySelector("#notif_author_ui");
            const notif_content_body = notification_dialog.querySelector("#notif_content > p:nth-child(1)");
            const notif_content_date = notification_dialog.querySelector("#notif_content > p:nth-child(2)");

            notif_author_ui.textContent = notif_author.value;
            notif_content_body.textContent = notif_body.textContent;
            notif_content_date.textContent = notif_date.textContent;
            notif_link_ui.value = notif_link;

        }

        // activity notofication
        if (event.target.matches("#notifact_main_paragraph")) {
            event.preventDefault();
            notification_dialog.showModal();

            const notification_card = event.target.closest("#notification_card");
            const notif_author = notification_card.querySelector("#activity_author");
            const notif_body = notification_card.querySelector("#notifact_main_paragraph");
            const notif_date = notification_card.querySelector("#notif_date");

            const activity_subject = notification_card.querySelector("#activity_subject");
            const activity_id_notif = notification_card.querySelector("#activity_id_notif");
            const notif_link = "./../01SubjectView/subject_name_view.php?TheSubjectCode=" + activity_subject.value + 
            "&TheActivityID=" + activity_id_notif.value;


            const notif_author_ui = notification_dialog.querySelector("#notif_author_ui");
            const notif_content_body = notification_dialog.querySelector("#notif_content > p:nth-child(1)");
            const notif_content_date = notification_dialog.querySelector("#notif_content > p:nth-child(2)");

            notif_author_ui.textContent = notif_author.value;
            notif_content_body.textContent = notif_body.textContent;
            notif_content_date.textContent = notif_date.textContent;
            notif_link_ui.value = notif_link;



        }


    });

    
    notification_dialog.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            follow_link.click();
        }

        if (event.key === "Escape") {
            dialog_close_btn.click();
        }

    });

    dialog_close_btn.addEventListener("click", (event) => {
        event.preventDefault();
        notification_dialog.close();
    });


};

