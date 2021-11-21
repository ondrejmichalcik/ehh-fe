import React from "react";
import Notifications from "../patient-page/notifications";

const Topbar = ({ pageTitle, showNotifications = false, showNotificationDetails = () => {} }) => {
    return (
        <div className="pacient-page-header">
            <div className="inner-header">
                <div className="ikem-logo" >
                    <img src="../IKEM.svg" alt="IKEM"/>
                </div>
                <h1 className="page-title">{pageTitle}</h1>
            </div>
            {showNotifications && <Notifications showDetails={showNotificationDetails}/>}
        </div>
    );
};

export default Topbar;
