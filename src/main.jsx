import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    onChange = (e) => {
        console.log('value', e.target.value);
        this.setState({ value: e.target.value });
    }
    render() {
        const { value } = this.state;
        return (<div style={styles.page}>
            <div>
                <label htmlFor="name">App containers</label>
                <textarea
                    // ref={(textarea) => this.textarea = textarea}
                    value={this.state.value}
                    onChange={this.onChange} />
                {/* <input type="text" onChange={this.onChange} /> */}
            </div>
            <div>{this.state.value}</div>
        </div>);
    }
}
const styles = {
    page: {
        margin: '20px auto 0',
        textAlign: 'center',
    }
}

export default App;