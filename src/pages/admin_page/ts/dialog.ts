

export const showCreateDialog = () => {
    const create_dialog = document.querySelector("#create_dialog") as HTMLDialogElement;

    const create_btn = document.querySelector("#create_btn") as HTMLButtonElement;

    create_btn.addEventListener("click", () => {

        create_dialog.showModal();

    });
}

export const showUpdateDialog = () => {
    const update_btn = document.querySelector("#update_btn") as HTMLButtonElement;
    const update_dialog = document.querySelector("#update_dialog") as HTMLDialogElement;

    update_btn.addEventListener("click", () => {
        update_dialog.showModal();
    });
}

export const showReadDialog = () => {

    const read_btn = document.querySelector("#read_btn") as HTMLButtonElement;
    const read_dialog = document.querySelector("#read_dialog") as HTMLDialogElement;

    read_btn.addEventListener("click", () => {
        read_dialog.showModal();
    });
    
}


export const showDeleteDialog = () => {

    const delete_btn = document.querySelector("#delete_btn") as HTMLButtonElement;
    const delete_dialog = document.querySelector("#delete_dialog") as HTMLDialogElement;

    delete_btn.addEventListener("click", () => {
        delete_dialog.showModal();
        
    });
    

}