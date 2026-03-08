/**@import_all_function_here */


import {
    // applyTheme,
    logoutUser,
    displayProfileBox,
    displayNotificationBox,
    displayMessageBox,
    RouteSettings,
    RouteHome
} from "./navigation/ts/navigation.ts";


// applyTheme();
logoutUser();
displayProfileBox();
displayNotificationBox();
displayMessageBox();
RouteSettings();
RouteHome();

// import { 
//     showAddEventDialog
// } from "./ts/dashboard_page.ts";

// showAddEventDialog();

import { 
    initSmallCalendar
} from "./ts/small_calendar.ts";

initSmallCalendar();


import { 
    showMeetingEventDialog,
    showAlarmDialog
} from "./ts/dashboard_page.ts";

showMeetingEventDialog();
showAlarmDialog();