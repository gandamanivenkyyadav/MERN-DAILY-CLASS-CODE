import React from "react";
import { Component } from "react";

class Registerform extends Component{
    render(){
        return(
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Entername"/> <br /><br />

                <label htmlFor="Email">Email</label>
                <input type="text" placeholder="Email" /><br /><br />

                <label htmlFor="Phone NO">Phone NO</label>
                <input type="text" placeholder="Phone NO" /><br /><br />
                <button type="submit" >submit</button> <br /><br />
                <button type="cancel">resert</button> <br /><br />
            </div>
        )
    }
}
    
export default Registerform;