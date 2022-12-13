import React, {useState} from 'react';

function Clock() {
    const [time, setTime] = useState(new Date())
    setInterval(() => setTime(new Date()), 1000)

return (
    <div>
        <h1>Il est, {time.toLocaleTimeString()}</h1>
    </div>
)
}

// import React from 'react';

// class Clock extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             ()=> this.tick(),
//             1000
//         );
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Il est {this.state.date.toLocaleTimeString()}.</h1>
//             </div>
//         );
//     }
// }

export default Clock
