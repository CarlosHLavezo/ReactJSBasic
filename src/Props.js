import React, { Component } from 'react'
import Panel from './Panel'

export default class Props extends Component {
    constructor(props) {
        super(props);
        const { attr, attr2, attr3 } = this.props;
        console.log(attr, attr2, attr3);
    }

    render() {
        const { attr, attr2, attr3 } = this.props;
        return (
            <div>
                {attr === 'p' ? <p>PROPS</p> : <h1>Props</h1>}
                <Panel headercolor="red" headertext="This is a Header" bordercolor="blue" data="Teste Carlos" />
            </div>
        );
    }
}