import React from "react";

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleStar: true
        }
    }
    handleClickStar = () => {
        this.props.handleSetBookMark(this.props.map.id)
        this.setState({
            toggleStar: !this.state.toggleStar
        })
    }
    handleClickMap = () =>{
        this.props.handleOpenMap(this.props.map.id)
    }
    handleGetInfoMap = () =>{
        this.props.handleGetInfoMap(this.props.map.id)
    }
    render() {
        const {toggleStar} = this.state;
        let star = "fa-star";
        let starYellow = "star-yellow";
        let map = this.props.map;
        return (
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
                        <button className="paral-icon">
                            <span>
                                <i className="fas fa-bars"></i>
                            </span>
                            <div className="trigle2">
                                <div className="action-menu">
                                    <span>Rename</span>
                                    <span>Make a Copy</span>
                                    <span>Delete</span>
                                </div>
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
                
            </div>
        )
    }
}
export default Map;
