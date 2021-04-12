import React from 'react'
import Header from './components/Header'
import ListMap from './components/ListMap'
import MenuLeft from './components/MenuLeft'
import MAP_DATA from "./data/MapData";
import TEAM_DATA from '././data/TeamData'
import './App.css'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mapData: null,
            teamdata: null,
            currentmap: 1,
            numberMap: null,
            numberBookMark: null,
            toggle: true,
            showFormStatus:false,
            recentMaps: []
        }
        this.inputName = React.createRef();
        this.inputTeam = React.createRef();
    }
    componentDidMount() {
        this.setState({
            mapData: MAP_DATA,
            teamData: TEAM_DATA,
            numberMap: MAP_DATA.length,
            currentMap: MAP_DATA[0],
            numberBookMark: MAP_DATA.filter((map) => map.bookmark === true),
            // recentMaps:[]
        });
    }
    handleClickAll = () => {
        this.setState({
            mapData: MAP_DATA
        });
    }
    handleClickBookMarks = () => {
        this.setState({
            mapData: this.state.mapData.filter((map) => map.bookmark === true),
                numberBookMark: this.state.mapData.filter(
                    (map) => map.bookmark === true
              ),
        });
    }
    handleClickRecentMap = () => {

    }
    handleClickTeam = (x) => {
        this.setState({
            mapData: MAP_DATA.filter((map) => map.team === x),
        });
    }
    handleClickToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    handleClickShowForm = () => {
        this.setState({
            showFormStatus: true
        })
    }
    handleClickCloseForm = () => {
        this.setState({
            showFormStatus:false
        })
    }
    handleClickAddNewMap = (event) => {
        event.preventDefault();
        let nameMap = this.inputName.current.value;
        let teamMap = this.inputTeam.value;
        if(nameMap === '') {
            console.log("ban can nhap ten map");
        }
        else{
            const day = new Date();
            const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            const currentDate = monthNamesShort[day.getMonth()] + " " + day.getDate() + "," + " " + day.getFullYear();
            const currentTime = day.getHours() + ":" + day.getMinutes();
            const count = MAP_DATA.length;
            
            let newMap = {
                id: count + 1,
                title: nameMap,
                team: teamMap,
                date: currentDate,
                time: currentTime,
                bookmark: false,
            };
            this.setState({
                listMap: MAP_DATA.push(newMap),
                listMap: this.state.listMap, MAP_DATA,
                numberMap: MAP_DATA.length,
                numberBookMark: this.state.mapData.filter((map) => map.bookmark === true),
                teamData: this.state.teamData.map((team) => {
                    if (team.name === teamMap) {
                        team.numberMap += 1;
                    }
                    return team;
                }),
            });
            
        }
        
    }
    handleSetBookMark = (id) => {
        this.setState({
            mapData: this.state.mapData.map((map) => {
                if (map.id === id) {
                    map.bookmark = !map.bookmark;
                }
                return map;
            }),
            numberBookMark: this.state.mapData.filter((map) => map.bookmark === true),
        });
    }
    handleOpenMap = (id) => {
        window.open(
            "https://www.codegrepper.com/code-examples/javascript/open+a+new+tab+when+clicking+on+a+link+react",
            "_blank"
        );
        const day = new Date();
        const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const currentDate = monthNamesShort[day.getMonth()] + " " + day.getDate() + "," + " " + day.getFullYear();
        const currentTime = day.getHours() + ":" + day.getMinutes();
        this.setState({
          mapData: this.state.mapData.map((map) => {
            if (map.id === id) {
              map.date = currentDate;
              map.time = currentTime;
            }
            return map;
          }),
          recentMap: this.state.recentMaps.push(id),
        });
    }
    handleGetInfoMap = (id) => {
        this.setState({
            currentMap: MAP_DATA.find((map) => map.id === id),
        });
    }
    handleClickRecentMap = () => {
        this.setState({
          // mapData: this.state.recentMaps
        })
    }




    render() {
        const { mapData, teamData, numberBookMark, numberMap, toggle, currentMap,showFormStatus } = this.state;
        let hiddenForm = "form-add-map-none";
        let showForm = "form-add-map-block";
        console.log(this.state.recentMaps);
        return (
            <div>
                <div className="app">
                    <div>
                        <Header />
                    </div>
                    <div className="main">
                        <div className="menu">
                            {teamData && teamData.length > 0 && (
                                <MenuLeft
                                    teamData={teamData}
                                    mapData={mapData}
                                    toggle={toggle}
                                    numberBookMark={numberBookMark}
                                    numberMap={numberMap}
                                    handleClickBookMarks={this.handleClickBookMarks}
                                    handleClickAll={this.handleClickAll}
                                    handleClickTeam={this.handleClickTeam}
                                    handleClickToggle={this.handleClickToggle}
                                    handleClickRecentMap={this.handleClickRecentMap}
                                />
                            )}
                        </div>
                        <div className="listmap">
                            <div className="mypage-nav">
                                <span className="new-map" onClick={this.handleClickShowForm}>
                                    <i className="fas fa-plus"></i>
                                </span>
                                <span className="refresh">
                                    <i className="fas fa-redo-alt"></i>
                                </span>
                            </div>
                            <div className="main-content">
                                {(mapData && mapData.length) > 0 && (
                                    <ListMap
                                        mapData={mapData}
                                        teamData={teamData}
                                        numberBookMark={numberBookMark}
                                        numberMap={numberMap}
                                        handleSetBookMark={this.handleSetBookMark}
                                        currentMap={currentMap}
                                        handleOpenMap={this.handleOpenMap}
                                        handleGetInfoMap={this.handleGetInfoMap}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={showFormStatus ? showForm : hiddenForm}>
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
                </div>
            </div>
        );
    }
}
export default App;
