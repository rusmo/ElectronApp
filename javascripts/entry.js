/**
 * Created by wrogers on 10/30/2015.
 */
require('../less/main.less');
'use strict';
import React from 'react';
import ReactDOM from "react-dom";
import Request from 'superagent';

class Welcome extends React.Component {
    render () {
        return <h2> There are {
            this.getDaysBeforeNextXmas()
        } days left until Christmas!</h2>;
    }

    getDaysBeforeNextXmas( ) {
        var oneMinute = 60 * 1000;
        var oneHour = oneMinute * 60;
        var oneDay = oneHour * 24;
        var today = new Date( );
        var nextXmas = new Date( );
        nextXmas.setMonth(11);
        nextXmas.setDate(25);
        if (today.getMonth( ) == 11 && today.getDate( ) > 25) {
            nextXmas.setFullYear(nextXmas.getFullYear( ) + 1);
        }
        var diff = nextXmas.getTime( ) - today.getTime( );
        diff = Math.floor(diff/oneDay);
        return diff;
    }
}

ReactDOM.render(<div className="myDiv"><Welcome message=""/></div>, document.getElementById('content'));

