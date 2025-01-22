import {NotificationManager} from "react-notifications";

export const errorMsg = (msg) => {
    NotificationManager.error(msg);
}

export const successMsg = (msg) => {
    NotificationManager.success(msg);
}