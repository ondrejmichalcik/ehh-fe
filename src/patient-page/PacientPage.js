import React, { useEffect, useState } from "react";
import Card from "../layout/Card";
import Topbar from "../layout/Topbar";
import UrineOutput from "./urineOutput";

const PacientPage = () => {
    const [showNotificationDetails, setShowNotificationDetails] = useState(false);
    const [notificationsData, setnotificationsData] = useState([]);
    const toggleNotifications = (notificationsData) => {
        setnotificationsData(notificationsData);
        setShowNotificationDetails(!showNotificationDetails);
    }

//////////////////////////////////////////////////////////////////
/** Hacks needed only because of mocked redirecting - in a final app there would be real redirecting to real patient pages */
    const [userData, setUserData] = useState({
        name: "Jan Novak",
        age: "61",
        sex: "male",
    });
    const [dashBoardDetail, setDashboardDetail] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("alertDetail") === "true") {
            setUserData({
                name: "Marie Sovakova",
                age: "30",
                sex: "female",
            })
            setDashboardDetail(true);
            sessionStorage.setItem("alertDetail", false);
        }
    }, []);

    useEffect(() => {
        if (window.location.pathname && window.location.pathname === "//") {
            sessionStorage.setItem("alertDetail", true);
            window.location.pathname = "/";
        }
    }, []);

    const url = window.location.href;
//////////////////////////////////////////////////////////////////

    return (
        <div className="page-container">
            <Topbar pageTitle="Patient Page" showNotifications={true} showNotificationDetails={toggleNotifications} />

            <div className="patient-page-body">

                {showNotificationDetails && notificationsData && notificationsData.length > 0 && (
                    <Card bodyClass="alert">
                        <p>Urination below set treshold! <a href={`${url}/#urine-output`}>See dashboard</a></p>
                    </Card>
                )}

                <Card title="Personal Information">
                    <p>Name: {userData.name}</p>
                    <p>Age: {userData.age}</p>
                    <p>Sex: {userData.sex}</p>
                </Card>

                <UrineOutput detail={dashBoardDetail}/>

                <Card title="Heart Pressure">
                    <div className="inner-picture">
                        <div className="mock">
                            <div className="cross"/>
                        </div>
                    </div>
                </Card>

                <Card title="O2 Saturation">
                    <div className="inner-picture">
                        <div className="mock">
                            <div className="cross"/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PacientPage;
