import React from 'react'

class FormAddMap extends React.Component {
    render() {
        return (
            <div className="form">
                <form>
                    <label>New Map</label>
                    <input type="text" />
                    <select>
                        <option value="0">team1</option>
                        <option value="1">team2</option>
                        <option value="2">team3</option>
                    </select>
                    <button>Cancel</button>
                    <button>Ok</button>
                </form>
            </div>
        )
    }
}