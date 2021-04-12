import React from "react";

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleStar: true,
            showActionStatus: false,
        }
    }
    handleClickStar = () => {
        this.props.handleSetBookMark(this.props.map.id)
        this.setState({
            toggleStar: !this.state.toggleStar,
        })
    }
    handleClickMap = () =>{
        this.props.handleOpenMap(this.props.map.id)
    }
    handleGetInfoMap = () =>{
        this.props.handleGetInfoMap(this.props.map.id)
    }
    handleClickAction = () => {
        this.props.handldeClickAction(this.props.map.id);
        this.setState({
            showActionStatus:!this.state.showActionStatus
        })
    }
    render() {
        const {toggleStar} = this.state;
        let star = "fa-star";
        let starYellow = "star-yellow";
        let map = this.props.map;
        let actionCurrent = this.props.actionCurrent;
        // let actionStatus = this.props.showActionStatus;
        let showAction = "action-menu";
        let hiddenAction = "action-menu-block";
        return (
            // <div></div>
            <div className="item" onClick={this.handleGetInfoMap}>
                <div className="icon">
                    <span>
                        <i className={toggleStar ?
                           `far ${star}` : `far fa-star ${starYellow}`} 
                           onClick={this.handleClickStar}></i>
                    </span>
                </div> 
                <div className="content-map">
                    <div className="content-title">
                        <h3>
                            {map.title}
                        </h3>
                        <div className="content-truncate">
                            <div className="box"></div>
                            <span className="name-team">
                                {map.team}
                            </span>
                        </div>
                    </div>
                    
                </div>
                
                <div className="action">
                    <div className="action-map">
                        <button className="paral-icon" onClick={this.handleClickAction}>
                            <span>
                                <i className="fas fa-bars"></i>
                            </span>
                            <div className="trigle2">
                                
                            </div>
                        </button>
                        <div className="paral">
                            <div className="paral-text">
                                <span>NEW</span>
                            </div>
                        </div>
                    </div>
                    <div className="action-right">
                        <div className="date-time">
                            <div className="date">
                                {map.date}
                            </div>
                            <div className="time">
                                {map.time}
                            </div>
                        </div>
                        
                    </div>
                    <div className="open-new-map">
                            <button className="open-map" onClick={this.handleClickMap}>
                                Open the Map
                            </button>
                    </div>
                    
                </div>
                <div className={ actionCurrent === this.props.map.id ? hiddenAction : showAction}>
                        <span className="rename">Rename</span>
                        <span className="copy">Make a Copy</span>
                </div>
            </div>
        )
    }
}
export default Map;
