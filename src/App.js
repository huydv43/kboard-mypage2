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
            toggle:true
        }
    }
    componentDidMount() {
        this.setState({
          mapData: MAP_DATA,
          teamData: TEAM_DATA,
          numberMap: MAP_DATA.length,
          currentMap:MAP_DATA[0],
          numberBookMark: MAP_DATA.filter((map) => map.bookmark === true)
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
        //     numberBookMark: this.state.listMap.filter(
        //         (map) => map.bookmark === true
        //   ),
        });
    }
    handleClickRecentMap = () => {

    }
    handleClickTeam = (x) => {
        console.log("a")
        this.setState({
          mapData: MAP_DATA.filter((map) => map.team === x),
        });
    }
    handleClickToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    handleClickAddNewMap = () => {
        const day = new Date();
        const monthNamesShort = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
        const currentDate = monthNamesShort[day.getMonth()] +" " +day.getDate() + "," + " " + day.getFullYear();
        const currentTime = day.getHours() +":" +day.getMinutes();
        const count = MAP_DATA.length;
        let newMap = {
            id: count + 1,
            title: "New map",
            team: "team1",
            date: currentDate,
            time: currentTime,
            bookmark: false,
        };
        this.setState({
            listMap: MAP_DATA.push(newMap),
            listMap: this.state.listMap,MAP_DATA,
            numberMap: MAP_DATA.length,
            numberBookMark: this.state.mapData.filter((map) => map.bookmark === true),
            teamData: this.state.teamData.map((team) => {
                if (team.id === 1) {
                    team.numberMap += 1;
                }
                return team;
            }),
        });
    }
    handleSetBookMark = (id) =>{
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
    handleOpenMap = (id) =>{
        window.open(
            "https://www.codegrepper.com/code-examples/javascript/open+a+new+tab+when+clicking+on+a+link+react",
            "_blank"
        );
        const day = new Date();
        const monthNamesShort = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
        const currentDate = monthNamesShort[day.getMonth()] +" " +day.getDate() + "," + " " + day.getFullYear();
        const currentTime = day.getHours() +":" +day.getMinutes();
        this.setState({
            mapData: this.state.mapData.map((map) => {
                if (map.id === id) {
                    map.date = currentDate;
                    map.time = currentTime;
                }
                return map;
            }),
        });
    }
    handleGetInfoMap = (id) =>{
        this.setState({
            currentMap: MAP_DATA.find((map) => map.id === id),
        });
    }




    render() {
        const {mapData, teamData, numberBookMark, numberMap,toggle,currentMap} = this.state;
        return (
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
                  />
                )}
              </div>
              <div className="listmap">
                <div className="mypage-nav">
                  <span className="new-map" onClick={this.handleClickAddNewMap}>
                    <i className="fas fa-plus">
                        <div className="form">
                        <span>
                            
                        </span>
                            <form className="form-input">
                                <label className="form-text">New Map</label>
                                <input type="text" className="input-text"/>
                                <select>
                                    <option value="0">team1</option>
                                    <option value="1">team2</option>
                                    <option value="2">team3</option>
                                </select>
                                <div className="btn-form">
                                    <button>Cancel</button>
                                    <button>Ok</button>
                                </div>
                            </form>
                        </div>
                    </i>
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
        );
    }
}
export default App;
