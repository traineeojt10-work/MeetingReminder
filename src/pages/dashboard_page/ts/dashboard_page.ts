

export const showAddEventDialog = () => {

    const add_btn = document.querySelector("#add_btn") as HTMLButtonElement;

    add_btn.addEventListener("click", () => {
        console.log("Displaying Add Event Dialog");
    });
    
}

export const showMeetingEventDialog = () => {


    // successfull event 
    const successfull_meet_btn = document.querySelector("#successfull_meet_btn") as HTMLHeadingElement;
    const meeting_status_dialog = document.querySelector("#meeting_status_dialog") as HTMLDialogElement;
    successfull_meet_btn.addEventListener("click", () => {
        console.log("Showing the Successfull meeting dialog.");

        let meeting_status = "Success";

        meeting_status_dialog.showModal();


    });

    // ongoing event
    const ongoing_meet_btn = document.querySelector("#ongoing_meet_btn") as HTMLHeadingElement;
    ongoing_meet_btn.addEventListener("click", () => {
        console.log("Showing Ongoing Meeting Data");

        let meeting_status = "ongoing";
        meeting_status_dialog.showModal();

    });


    // unsuccessfull event
    const unsuccessfull_meet_btn = document.querySelector("#unsuccessfull_meet_btn") as HTMLHeadingElement;
    unsuccessfull_meet_btn.addEventListener("click", () => {
        console.log("Showing the Unsuccessfull Meeting Data");

        let meeting_status = "failed";
        meeting_status_dialog.showModal();
        
    });


}

export const showAlarmDialog = () => {

    const alarm_dialog = document.querySelector("#alarm_dialog") as HTMLDialogElement;


    // alarm_dialog.showModal();

}