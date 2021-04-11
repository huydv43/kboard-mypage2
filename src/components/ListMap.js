import React from "react";
import Map from './Map'
import MapDetail from './MapDetail'

class ListMap extends React.Component {
    render() {
        let maps = this.props.mapData; 
        console.log(maps)       
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
