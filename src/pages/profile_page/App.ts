/**@import_all_function_here */


import {
    logoutUser,
    // applyTheme,
    displayProfileBox,
    displayNotificationBox,
    displayMessageBox,
    RouteSettings,
    RouteHome
} from "./navigation/ts/navigation.ts";

logoutUser();
// applyTheme();
displayProfileBox();
displayNotificationBox();
displayMessageBox();
RouteSettings();
RouteHome();


import {
    switchToPersonal,
    switchToPrivacy,
    switchToPreferences

} from "./ts/settings_page.ts";

switchToPersonal();
switchToPrivacy();
switchToPreferences();