import React from "react";
import s from './Music.module.css';

// const Music = (props) => {
//     return(
//         <div>
//             Music
//         </div>
//     )
// }

class Music extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className={s.smt}>
                Music2
            </div>
        )
    }
}

export default Music;