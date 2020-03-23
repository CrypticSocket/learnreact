import React from "react"

class LoggedInOut extends React.Component{

    constructor()
    {
        super()
        this.state = {
            loggedStatus:true
        }
    }

    render(){
        return(
            <div>
                <p>You are currently logged {this.state.loggedStatus ? "in":"out"}</p>
            </div>
        )
    }
}

export default LoggedInOut