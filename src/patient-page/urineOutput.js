import React from "react";
import Card from "../layout/Card";

const UrineOutput = ({ detail }) => {
    /* Grafana endpoint can be stored in helm config yaml along with the default time window
     * The detail time window should be passed to this component as parameter from the notification object
     */
    let src = "https://monitoring.stxcn.codenow.com/default/grafana/d/QMG0Hkp7k/new-dashboard-copy?viewPanel=6&orgId=1";
    if (detail) {
        src = src + "&from=now-5m&to=now"
    } else {
        src = src + "&from=now-30m&to=now"
    }

    return (
        <div id="urine-output">
            <Card hasPadding={false} title="Urine Output">
                <iframe
                    className="frame"
                    src={src}
                    title="Urine Output Overview"
                    id="urine-output-overview"
                    frameBorder="0"
                    align="baseline"
                    // onLoad={() => {
                            //TODO use CSS to filter out unneeded elements surrounding the diagramm
                    // }}
                />
            </Card>
        </div>
    );
};

export default UrineOutput;