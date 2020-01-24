import React, { Component } from 'react';

export default class Events2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: []
        };
    }

    handleChange = (event) => {
        //this.setState({
        //    name: event.target.value
        //});
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log('STATE', this.state)
    }

    insertToData = () => {
        const arr = this.state.data;
        arr.push(this.state.name);
        this.setState({
            name: '',
            data: arr
        });

        //this.state.data.push(this.state.name);
        console.log(this.state)
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {this.state.name1}
                {this.state.name2}
                <input type="text" onChange={this.handleChange} name="name1" id="name1" placeholder="Enter your name" />
                <input type="text" onChange={this.handleChange} name="name2" id="name2" placeholder="Enter your name" />
                <button type="button">Ok</button>
                <br></br>
                <input type="text" onChange={this.handleChange} name="name" id="name" placeholder="Enter your name" />
                <button type="button" onClick={this.insertToData}>Ok</button>
                <ul>
                    {data.map(item => (
                        <li key={item}>{item}</li>
                    ))
                    }
                </ul>
            </div>
        );
    }
}