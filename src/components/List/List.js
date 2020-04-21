import React from 'react';
import ListItem from '../ListItem/ListItem.js';

export default function List() {
    const [items, setItems] = React.useState([

        {
            name: 'Ana',
            age: 26,
            favoriteEmoji: '🌈'
        },

        {
            name: 'Bad Rb',
            age: 32,
            favoriteEmoji: '🔥' 
        },

        {
            name: 'Zarellita',
            age: 22,
            favoriteEmoji: '🎅'
        },
        {
            name: 'Pilar',
            age: 48,
            favoriteEmoji: '❤️'
        },
    ]
);

function displayListItem() {
   return items.map((item, i)=>
       
        <ListItem key={i} listItem={item}/>
    )
};
    return (
        <div div style={{display: 'flex', padding: '10px'}}>
            {displayListItem()}
        </div>
    )
}
