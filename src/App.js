import React from 'react'
import Header from './components/Header'
import ListMap from './components/ListMap'
import MenuLeft from './components/MenuLeft'
import MAP_DATA from "./data/MapData";
import TEAM_DATA from '././data/TeamData'
import Form from './components/Form'
import FormRename from './components/FormRename'
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
            showFormAdd: false,
            showFormCopy: false,
            formRename: false,
            hiddenSelectTeam: false,
            recentMaps: [],
            editMap: "",
            
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
        });
    }
    changeInputteam = (select) => {
        this.inputTeam = select;
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
            showFormCopy: true,
            hiddenSelectTeam: false
        })
    }
    handleClickCloseForm = () => {
        this.setState({
            showFormCopy:false
        })
    }
    handleClickCloseFormRename = () => {
        this.setState({
            formRename:false
        })
    }
    
    handleClickAddNewMap = (event) => {
        event.preventDefault();
        let nameMap = this.inputName.current.value;
        let teamMap = this.inputTeam.value;
        console.log(nameMap)
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
    handleClickShowFormCopy = (title) => {
        this.setState({
            editMap: title,
            showFormCopy: true,
            formRename: false,
            hiddenSelectTeam: true
        })
        
    }
    handleClickShowFormRename = (title) => {
        this.setState({
            editMap: title,
            formRename: true,
            showFormCopy:false,
            showFormAdd: false
        })
    }
    handleRename = (e) => {
        e.preventDefault();
        let title = this.state.editMap;
        let newNameMap = this.inputName.current.value;
        this.state.mapData.filter((map) => {
            if(map.title === title){
                map.title = newNameMap
            }
          })
          this.setState({
              mapData:this.state.mapData
          })
          


    }
    onChangeMapTitle = value => {
        this.setState({
            editMap: value
        })
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
          recentMaps: this.state.recentMaps.concat(this.state.mapData.filter((map) => map.id === id))
        });
    }
    handleGetInfoMap = (id) => {
        this.setState({
            currentMap: MAP_DATA.find((map) => map.id === id),
        });
    }
    handleClickRecentMap = () => {
        this.setState({
            mapData: this.state.recentMaps
        })
    }




    render() {
        const { mapData, teamData, numberBookMark, numberMap, toggle, currentMap,showFormCopy,recentMaps, hiddenSelectTeam, editMap,formRename } = this.state;
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
                                handleClickRecentMap={this.handleClickRecentMap}
                                recentMaps={recentMaps}
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
                                    handleCopy={this.handleCopy}
                                    mapData={mapData}
                                    teamData={teamData}
                                    numberBookMark={numberBookMark}
                                    numberMap={numberMap}
                                    handleSetBookMark={this.handleSetBookMark}
                                    currentMap={currentMap}
                                    handleOpenMap={this.handleOpenMap}
                                    handleGetInfoMap={this.handleGetInfoMap}
                                    handleClickShowFormCopy={this.handleClickShowFormCopy}
                                    handleClickShowFormRename={this.handleClickShowFormRename}
                                    handleRename={this.handleRename}
                                    
                                />
                            )}
                        </div>
                    </div>
                </div>
                <Form 
                    onChange={this.onChangeMapTitle}
                    handleClickShowForm={this.handleClickShowForm}
                    showFormCopy={showFormCopy}
                    handleClickCloseForm={this.handleClickCloseForm}
                    hiddenSelectTeam={hiddenSelectTeam}
                    editmap={editMap}
                    handleRename={this.handleRename}
                    handleClickAddNewMap={this.handleClickAddNewMap}
                    inputTeam={this.inputName}           
                    inputName={this.inputName}
                    changeInputteam={this.changeInputteam}
                />
                <FormRename 
                    formRename={formRename}
                    inputName={this.inputName}
                    editmap={editMap}
                    handleClickCloseFormRename={this.handleClickCloseFormRename}
                    inputName={this.inputName}
                    onChange={this.onChangeMapTitle}
                    handleRename={this.handleRename}
                />
            </div>
        );
    }
}
export default App;
