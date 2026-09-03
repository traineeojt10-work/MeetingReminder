
/**!
 * @global_variable_here
 */

const personal_box = document.querySelector("#personal_box") as HTMLDivElement;
const privacy_box = document.querySelector("#privacy_box") as HTMLDivElement;
const preferences_box = document.querySelector("#preferences_box") as HTMLDivElement;



export const switchToPersonal = () => {
    const personal_btn = document.querySelector("#personal_btn") as HTMLDivElement;

    personal_btn.addEventListener("click", (event) => {
        console.log("Switching to Personal");

        personal_box.style.display = "flex";
        privacy_box.style.display = "none";
        preferences_box.style.display = "none";




    });
}


export const switchToPrivacy = () => {

    const privacy_btn = document.querySelector("#privacy_btn") as HTMLDivElement;
    
    privacy_btn.addEventListener("click", (event) => {
        console.log("Switching to Privacy");

        personal_box.style.display = "none";
        privacy_box.style.display = "flex";
        preferences_box.style.display = "none";

    });
    
    
    
}

export const switchToPreferences = () => {

    const preferences_btn = document.querySelector("#preferences_btn") as HTMLDivElement;


    preferences_btn.addEventListener("click", (event) => {
        console.log("Switching to Preferences");

        personal_box.style.display = "none";
        privacy_box.style.display = "none";
        preferences_box.style.display = "flex";

    });

};
