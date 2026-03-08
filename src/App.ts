

//

import { 
    myFunction
} from "./navigation/ts/navigation.ts";
myFunction();

import { 
    showLoginBoxDiv, 
    showEmployeeDialog,
    showAdminDialog,
    ToasterUI,
    showSignUPDialog
} from "./ts/dialog.ts";




showLoginBoxDiv();
showEmployeeDialog();
showAdminDialog();
ToasterUI();
showSignUPDialog();



// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
