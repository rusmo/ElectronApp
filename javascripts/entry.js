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


class ImpactRatingsHeader extends React.Component {
    render () {
        return <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>IR</th>
            <th>AIR</th>
            <th>R</th>
            <th>HR</th>
            <th>RBI</th>
            <th>SB</th>
            <th>BA</th>
        </tr>;
    }
}

class PlayerImpactRatings extends React.Component {
    render () {
        return <tr>
            <ImpactRating rating={this.props.Rank}></ImpactRating>
            <ImpactRating rating={this.props.Name}></ImpactRating>
            <ImpactRating rating={this.props.impactRating}></ImpactRating>
            <ImpactRating rating={this.props.wt3yrIR}></ImpactRating>
            <ImpactRating rating={this.props.R}></ImpactRating>
            <ImpactRating rating={this.props.HR}></ImpactRating>
            <ImpactRating rating={this.props.RBI}></ImpactRating>
            <ImpactRating rating={this.props.SB}></ImpactRating>
            <ImpactRating rating={this.props.BA}></ImpactRating>
        </tr>;
    }
}

class ImpactRating extends React.Component {
    render () {
        return <td>{this.props.rating}</td>;
    }
}

ReactDOM.render(
    <table className="myDiv">
        <thead>
            <ImpactRatingsHeader />
        </thead>
        <tbody>
            <PlayerImpactRatings Rank="1" Name="Trout, Mike" impactRating="1200" wt3yrIR="1100" R="1202" HR="789" RBI="888" SB="1280" BA="1492"></PlayerImpactRatings>
            <PlayerImpactRatings Rank="2" Name="Goldschmidt, Paul" impactRating="1200" wt3yrIR="1100" R="1202" HR="789" RBI="888" SB="1280" BA="1492"></PlayerImpactRatings>
            <PlayerImpactRatings Rank="3" Name="Harper, Bryce" impactRating="1200" wt3yrIR="1100" R="1202" HR="789" RBI="888" SB="1280" BA="1492"></PlayerImpactRatings>
        </tbody>
    </table>
    , document.getElementById('content'));

