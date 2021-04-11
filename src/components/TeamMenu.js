import React from "react"
class TeamMenu extends React.Component {
    handleClick = () => {
        this.props.handleClickTeam(this.props.team.name)
    }
    render() {
        // let dropDownNone = "item-wrapper";
        // let dropDownBlock = "item-wrapper-block";
        return (
            <div className="item-wrapper" onClick={this.handleClick}>
                <div className="box-name"></div>
                <strong className="team-name">
                    {this.props.team.name}
                </strong>
                <span className="numberMap">
                    ({this.props.team.numberMap})
                </span>
            </div>
        )
    }
}
export default TeamMenu;
