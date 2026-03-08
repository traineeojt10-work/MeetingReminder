/**@import_all_function_here */


import {
    // applyTheme,
    logoutUser,
    displayProfileBox,
    displayNotificationBox,
    displayMessageBox,
    RouteHome
} from "./navigation/ts/navigation.ts";


// applyTheme();
logoutUser();
displayProfileBox();
displayNotificationBox();
displayMessageBox();
RouteHome();



import { 
    showCreateDialog,
    showUpdateDialog,
    showReadDialog,
    showDeleteDialog
} from "./ts/dialog.ts";

showCreateDialog();
showUpdateDialog();
showReadDialog();
showDeleteDialog();