
/**!
 * @global_variable_here
 */
const profile_box = document.querySelector("#profile_box") as HTMLDivElement;
const notification_box = document.querySelector("#notification_box") as HTMLDivElement;
const message_box = document.querySelector("#message_box") as HTMLDivElement;


export const applyTheme = () => {
    const theme_btn = document.querySelector("#theme_btn") as HTMLButtonElement;

    theme_btn.addEventListener("click", () => {

        console.log("Displaying Theme Dropdown");

    });


}


export const displayProfileBox = () => {

    const user_icon_btn = document.querySelector("#user_icon_btn") as HTMLButtonElement;
    const profile_box = document.querySelector("#profile_box") as HTMLDivElement;

    user_icon_btn.addEventListener("click", () => {
        console.log("Displaying User Profile Box");

        if (profile_box.style.display === "flex") {
            profile_box.style.display = "none";
        } 
        else {
            profile_box.style.display = " flex";
            notification_box.style.display = "none";
            message_box.style.display = "none";
        }

    });

};


export const logoutUser = () => {
    const logout_btn = document.querySelector("#logout_btn") as HTMLDivElement;

    logout_btn.addEventListener("click", (event) => {
        console.log("Logging out user.");
        const thetarget = event.target as HTMLElement;
        console.log(thetarget);
        console.log(window.location.href);

        window.location.href = "./../../index.html";
        window.close();
    });
}

export const displayNotificationBox = () => {
    
    const notification_icon_btn = document.querySelector("#notification_icon_btn") as HTMLButtonElement;
    const notification_box = document.querySelector("#notification_box") as HTMLDivElement;

    notification_icon_btn.addEventListener("click", () => {
        console.log("Displaying Notififcation Box");


        if (notification_box.style.display === "flex") {
            notification_box.style.display = "none";
        }
        else {
            notification_box.style.display = "flex";
            profile_box.style.display = "none";
            message_box.style.display = "none";
        }


    })

}

export const displayMessageBox = () => {
    const message_icon_btn = document.querySelector("#message_icon_btn") as HTMLButtonElement;
    const message_box = document.querySelector("#message_box") as HTMLDivElement;

    message_icon_btn.addEventListener("click", () => {
        console.log("Displaying MessageBox");

        if (message_box.style.display === "flex") {
            message_box.style.display = "none";
        }
        else {
            message_box.style.display = "flex";
            notification_box.style.display = "none";
            profile_box.style.display = "none";
        }

    });


}

// left menu

export const RouteSettings = () => {

    const setting_icon_c = document.querySelector("#setting_icon_c") as HTMLDivElement;

    setting_icon_c.addEventListener("click", () => {
        console.log("Routing to Settings Page");

        console.log(window.location);
        window.location.href ="./../settings_page/settings_page.html";

        
    });

};

export const RouteHome = () => {
    const home_icon_c = document.querySelector("#home_icon_c") as HTMLDivElement;

    home_icon_c.addEventListener("click", () => {
        console.log("Routing to HomePage");

        
        window.location.href = "./dashboard.html";

    });

}

