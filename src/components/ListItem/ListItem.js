import React from 'react'


export default function ListItem(props) {
const {listItem} = props;
console.log(props)
    // const displayListItem =() => {
    // props.listItem.map((item)=> {
    //     return
    //     <div>
    //         <h3>{item.name}</h3>
    //         <h3>{item.age}</h3>
    //         <h3>{item.emoji}</h3> 
    //     </div>
    //     })}
    return (

            <div style={{border: '2px solid rebeccapurple', width: '200px', height: '200px'}} className="itemContainer">
                <div>
            <h3>Name: {listItem.name}</h3>
            <h3>Age: {listItem.age}</h3>
            <h3>Favorite Emoji: {listItem.favoriteEmoji}</h3> 
        </div>
            </div>
        )
    }
