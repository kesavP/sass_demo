    import React, { Component } from 'react';
    import '../styles/RedChildCompStyle.scss';

    class RedChildComp extends Component{
        render(){
            return(
                <div className="RedChildCompStyle">
                    <h2>THIS IS RED</h2>
                    <input type="text" value="mnekdj"/>
                </div>
            );
        }
    }

    export default RedChildComp;