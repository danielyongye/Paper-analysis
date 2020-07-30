import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    onChange = (value) => {
        console.log('value', value);
        // this.setState({ value });
    }
    render() {
        const { value } = this.state;
        return (<div style={styles.page}>
            <label htmlFor="name">App containers</label>
            <input type="text"/>
        </div>);
    }
}
const styles={
    page:{
        margin: '20px auto 0',
        textAlign: 'center',
    }
}

export default App;