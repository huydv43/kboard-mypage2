import React from "react"
import TeamMenu from './TeamMenu'

class MenuLeft extends React.Component {
    render() {
        let teams = this.props.teamData
        let toggleTrigle1 = "toggle-trigle-1";
        let toggleTrigle2 = "toggle-trigle-2";
        let dropDownNone = "team-item";
        let dropDownBlock = "team-item-block";
        return(
            <div className="wrapper-menu">
                <div className="menu-top">
                    <div className="all-map" onClick={this.props.handleClickAll}>
                        <span >
                            <img src="./image/all-icon.svg" alt="all-icon" className="icon-all"/>
                        </span>
                        <strong className="text-all">
                            All
                        </strong>
                        <span className="total-all-map">
                            ({this.props.numberMap})
                        </span>
                    </div>
                    <div className="recent-maps" onClick={this.props.handleClickRecentMap}>
                        <span>
                            <img src="./image/ic-recentmap.svg" alt="recents-map" className="icon-recent-map" />
                        </span>
                        <strong className="text-recent">
                            Recent Maps
                        </strong>
                        <span className="total-recent-map">
                            ({this.props.recentMaps.length})
                        </span>
                    </div>  
                    <div className="bookmarks" onClick={this.props.handleClickBookMarks}>
                        <span>
                            <img src="./image/ic-bookmark.svg" alt="bookmarks" className="icon-bookmarks" />
                        </span>
                        <strong className="text-bookmark">
                            BoookMarks
                        </strong>
                        <span className="total-bookmark">
                            ({this.props.numberBookMark.length})
                        </span>
                    </div>            
                </div>
                <div className="menu-bottom">
                        <div className="header-menu-bottom" onClick={this.props.handleClickToggle}>
                            <div className="wrapper-box">
                                <div 
                                    className={this.props.toggle ? 
                                    toggleTrigle2 : toggleTrigle1}>
                                </div>
                            </div>
                            <strong className="text-header">TEAMS</strong>
                        </div>
                        <div className={this.props.toggle ? dropDownBlock : dropDownNone}>
                            {
                                teams.map((team) => 
                                <TeamMenu 
                                    toggle={this.props.toggle}
                                    key={team.id}
                                    team={team}
                                    handleClickTeam={this.props.handleClickTeam}
                                />)
                            }
                        </div>
                    </div>
            </div>
            
        );
    }
}
export default MenuLeft;
