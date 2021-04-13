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
        // console.log(this.state.actionCurrent)
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
                {/* <div className={showFormStatus ? showForm : hiddenForm}>
                    <div className="wrapper">
                        <div className="wrapper-form"></div>
                        <div className="form-content">
                            <span className="container-icon-delete" onClick={this.handleClickCloseForm}>
                                <i className="fas fa-times-circle" ></i>
                            </span> 
                            <form className="form-input" onSubmit={this.handleClickAddNewMap}>
                                
                                <label className="form-text">New Map</label>
                                <input type="text" ref={this.inputName} className="input-text" placeholder="New Map"/>
                                <select className="form-option" ref={(input) => this.inputTeam = input}>
                                    <option value="team1">team1</option>
                                    <option value="team2">team2</option>
                                    <option value="team3">team3</option>
                                </select>
                                <div className="btn-form">
                                    <button className="btn-cancel" onClick={this.handleClickCloseForm}>Cancel</button>
                                    <button className="btn-ok" type="submit" onClick={this.handleClickCloseForm}>Ok</button>
                                </div>
                            </form>
                        </div>
                        </div>  
                </div> */}
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
