import React from 'react';
import {getPointScore} from './common';
import './layout.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            configValue: '',
            scoreValue: '',
            value: '',
        }
    }
    onChangeConfig = (e) => {
        console.log('configValue', e.target.value);
        this.setState({ configValue: e.target.value });
    }
    onChangeScore = (e) => {
        console.log('scoreValue', e.target.value);
        this.setState({ scoreValue: e.target.value });
    }
    confirm=()=>{
        const {configValue,scoreValue}=this.state;
        const resultList=[];
        if(scoreValue){
            const scoreList=scoreValue.split(',');
            if(scoreList&&scoreList.length>0){
                scoreList.map((item,index)=>{
                    const param=getPointScore(index, item);
                    resultList.push(param);
                });

            }
            this.setState({value:resultList});
        }

    }
    render() {
        const { value } = this.state;
        return (
        <div style={styles.page}>
            <ul>
                <li>
                    <label htmlFor="name" style={styles.label}>Stardrds Config</label>
                    <textarea
                        // ref={(textarea) => this.textarea = textarea}
                        style={styles.textAreaContent}
                        value={this.state.configValue}
                        onChange={this.onChangeConfig} />
                </li>
                <li>
                    <label htmlFor="name" style={styles.label}>Score Config</label>
                    <input
                        type="text"
                        value={this.state.scoreValue}
                        onChange={this.onChangeScore}
                        style={styles.textAreaContent}
                    />
                </li>
                <li style={styles.btnWrap}>
                    <button onClick={this.confirm}>Confirm</button>
                </li>
            </ul>
            <div>{this.state.value}</div>
        </div>
        )
    };
};

const styles = {
    page: {
        margin: '20px auto 0',
        textAlign: 'center',
    },
    label: {
        // marginRight: 20,
    },
    textAreaContent: {
        width: 400,
    },
    btnWrap: {
        marginTop: 20,
    },
}

export default App;