import React, { Component } from 'react';
import axios from 'axios';

import Card from '../Widgets/Card';

class DashBoard extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isGetActivitiesButtonClicked: false,
            user: {
                id: '',
                username: 'dshekhar17',
                firstName: '',
                lastName: '',
                gender: '',
                country: '',
                city: '',
                followers: 0,
                friends: 0,
                profileURL: '',
            },
            showUser: '',
        }
        this.getActivities = this.getActivities.bind(this);
    }
    

    getActivities = async () => {
        const access_token = '1b22801e86b2ee85c221e8d22df05700063c0efb ';
        const id = '61978';
        const url = `https://www.strava.com/api/v3/athlete?access_token=${access_token}`;
        const headers = {'Authorization': `Bearer ${access_token}`, 'Content-Type': 'application/json'};
        console.log('Button clicked');
        await axios.get(url)
        .then((res) => {
            console.log(res);
            this.setState({
                isGetActivitiesButtonClicked: true,
                user : {
                id: res.data.id,
                username: 'dshekhar17',
                firstName: res.data.firstname,
                lastName: res.data.lastname,
                followers: res.data.followers,
                friends: res.data.friends,
                country: res.data.country,
                city: res.data.city,
                gender: res.data.sex,
                profileURL: res.data.profile,
                }
            });
        }, (error) => {
            console.log(error);
        });
    };

    render() {
        return (
            <>
                <h2>DashBoard</h2>
                <button onClick={this.getActivities}>Get Activities</button>
                {this.state.isGetActivitiesButtonClicked == true ?
                    <Card user={this.state.user} /> : 
                    null
                }
            </>
        )
    }
}

export default DashBoard;
