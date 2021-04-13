import React from 'react'

class Form extends React.Component {
    handleClickForm = (e) => {
        this.props.onChange(e.target.value)
    }
    
    render() {
        const {formRename,inputName,} = this.props;
        let hiddenForm = "form-add-map-none";
        let showForm = "form-add-map-block";
        return (
            <div>
                <div className={formRename ? showForm : hiddenForm}>
                    <div className="wrapper-2">
                        <div className="wrapper-form-rename"></div>
                        <div className="form-content-rename">
                            <span className="container-icon-delete" onClick={this.props.handleClickCloseFormRename}>
                                <i className="fas fa-times-circle" ></i>
                            </span> 
                            <form className="form-input" onSubmit={this.props.handleRename} type="submit"> 
                                <label className="form-text">ReName</label>
                                <input type="text" ref={inputName} className="input-text" value={this.props.editmap} onChange={this.handleClickForm}/>
                                <div className="btn-form">
                                    <button className="btn-cancel" onClick={this.props.handleClickCloseFormRename}>Cancel</button>
                                    <button className="btn-ok" type="submit" onClick={this.props.handleClickCloseFormRename} >Ok</button>
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