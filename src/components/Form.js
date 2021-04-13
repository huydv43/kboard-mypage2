import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        
    }
    handleClickForm = (e) => {
        this.props.onChange(e.target.value)
    }
    // handleClickChose = () => { // focus den gia tri cua select option
    //     this.props.inputTeam.focus(); 
    // }
    
    render() {
        const {showFormCopy, hiddenSelectTeam,inputName,} = this.props;
        let hiddenForm = "form-add-map-none";
        let showForm = "form-add-map-block";
        let hiddenFormOption = "form-option-none";
        let showFormOption = "form-option"
        return (
            <div>
                <div className={showFormCopy ? showForm : hiddenForm}>
                    <div className="wrapper">
                        <div className="wrapper-form"></div>
                        <div className="form-content">
                            <span className="container-icon-delete" onClick={this.props.handleClickCloseForm}>
                                <i className="fas fa-times-circle" ></i>
                            </span> 
                            <form className="form-input" onSubmit={this.props.handleClickAddNewMap} type="submit"> 
                                <label className="form-text">New Map</label>
                                <input type="text" ref={inputName} className="input-text" value={this.props.editmap} onChange={this.handleClickForm}/>
                                <select className={hiddenSelectTeam ? hiddenFormOption : showFormOption} ref={this.props.changeInputteam}>
                                    <option value="team1">team1</option>
                                    <option value="team2">team2</option>
                                    <option value="team3">team3</option>
                                </select>
                                <div className="btn-form">
                                    <button className="btn-cancel" onClick={this.props.handleClickCloseForm}>Cancel</button>
                                    <button className="btn-ok" type="submit" onClick={this.props.handleClickCloseForm} >Ok</button>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}
export default Form;