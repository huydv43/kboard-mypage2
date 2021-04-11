import React from "react";

class MapDetail extends React.Component {
    render() {
        let teams = this.props.teamData;
        let currentMap = this.props.currentMap;
        return (
            <div className="wrapper-detail">
                <div className="box-show">

                </div>
                <div className="info-map">
                    <div className="info-name">
                        <label>Name</label>
                        <span>{currentMap.title}</span>
                    </div>
                    <div className="info-team">
                        <label>Team</label>
                        <span>{currentMap.team}</span>
                    </div>
                    <div className="info-update">
                        <label>Update on</label>
                        <span>{currentMap.date}</span>
                    </div>
                    <button>Save as Templates</button>
                </div>
            </div>
        )
    }
}
export default MapDetail;
