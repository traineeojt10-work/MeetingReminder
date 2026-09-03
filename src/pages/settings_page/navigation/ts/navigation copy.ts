

export const applyTheme = () => {
    const theme_btn = document.querySelector("#theme_btn") as HTMLButtonElement;

    theme_btn.addEventListener("click", () => {

        console.log("Displaying Theme Dropdown");

    });


}


export const displayProfileBox = () => {

    const user_icon_btn = document.querySelector("#user_icon_btn") as HTMLButtonElement;

    user_icon_btn.addEventListener("click", () => {

        console.log("Displaying User Profile Box");

    });

};

export const displayNotificationBox = () => {
    
    const notification_icon_btn = document.querySelector("#notification_icon_btn") as HTMLButtonElement;

    notification_icon_btn.addEventListener("click", () => {
        console.log("Displaying Notififcation Box");

    })

}

export const displayMessageBox = () => {
    const message_icon_btn = document.querySelector("#message_icon_btn") as HTMLButtonElement;

    message_icon_btn.addEventListener("click", () => {
        console.log("Displaying MessageBox");

    });


}

// left menu
export const RouteSettings = () => {

    const setting_icon_c = document.querySelector("#setting_icon_c") as HTMLDivElement;

    setting_icon_c.addEventListener("click", () => {
        console.log("Routing to Settings Page");

        window.location.href ="./settings_page.html";
    });

};

export const RouteHome = () => {
    const home_icon_c = document.querySelector("#home_icon_c") as HTMLDivElement;

    home_icon_c.addEventListener("click", () => {
        console.log("Routing to HomePage");

        console.log(window.location);
        window.location.href = "./../dashboard_page/dashboard.html";


    });

}

