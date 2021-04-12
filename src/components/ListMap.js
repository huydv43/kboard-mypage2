import React from "react";
import Map from './Map'
import MapDetail from './MapDetail'

class ListMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
            actionCurrent: null
        }
    }
    handldeClickAction = (id) =>{
        this.setState({
            actionCurrent : id
        })
        
    }
    render() {
        // const {showActionStatus} = this.state;
        const {actionCurrent} = this.state;
        console.log(this.state.actionCurrent)
        let maps = this.props.mapData; 
        return (
            <div className="mypage-content">
                <div className="templates-map">
                    {
                        maps.map((item) => ( 
                            <Map 
                                key={item.id}
                                map={item}
                                handleSetBookMark={this.props.handleSetBookMark}
                                handleOpenMap={this.props.handleOpenMap}
                                handleGetInfoMap={this.props.handleGetInfoMap}
                                // showActionStatus={showActionStatus}
                                handldeClickAction={this.handldeClickAction}
                                actionCurrent={actionCurrent}
                            />
                        ))
                    }
                </div>
                <div className="detail">
                    <MapDetail 
                        currentMap={this.props.currentMap}
                    />
                </div>
                
            </div>
        )
    }
}
export default ListMap;
