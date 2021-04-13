import React from "react";
import Map from './Map'
import MapDetail from './MapDetail'

class ListMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actionCurrent: null,
            actionStatus: false,
        }
    }
    handldeClickAction = (id) =>{
        this.setState({
            actionCurrent: id,
            actionStatus: !this.state.actionStatus
        })
    }
     render() {
        const {actionCurrent,actionStatus} = this.state;
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
                                handldeClickAction={this.handldeClickAction}
                                handleCopy={this.props.handleCopy}
                                actionCurrent={actionCurrent}
                                actionStatus={actionStatus}
                                handleClickShowFormCopy={this.props.handleClickShowFormCopy}
                                handleClickShowFormRename={this.props.handleClickShowFormRename}
                                handleRename={this.props.handleRename}
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
