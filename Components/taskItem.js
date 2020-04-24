import React from 'react';

function taskItem(props) {
    const taskItem = props;

    return (
        <li className="list-group-item list-item">
            <div className="list-item__column--title">
                {props.title}
            </div>
            <div className="list-item__column--columnName">
                {props.column}
            </div>
            <div className="list-item__column--type">
                {props.type}
            </div>
        </li>

    )
}
export default taskItem;