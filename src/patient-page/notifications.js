import React, { useEffect, useState } from "react";
import axios from "axios";

const Notifications = ({ showDetails }) => {
    const [notificationCount, setNotificationCount] = useState(0);
    const [notificationsData, setNotificationsData] = useState([])

//////////////////////////////////////////////////////////////////
/* Placeholder endpoint - but basic polling is in place*/
    const getData = () => {
        axios
            .get("https://swapi.dev/api/people/")
            .then((response)=>{
                const data = response.data ? response.data : {};
                setNotificationsData(data.results);
                setNotificationCount(data.results ? data.results.length : -1);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getData();
    }, []);
    setInterval(() => {
        getData();
    }, 10_000);
//////////////////////////////////////////////////////////////////

    return (
        <>
            <div
                className="notifiation-container"
                onClick={() => {showDetails(notificationsData)}}
            >
                <div className="notification">
                    <i className="fas fa-bell" />
                </div>
                <div className="notification-count">
                    <span>{notificationCount}</span>
                </div>
            </div>
        </>
    )
};

export default Notifications;
