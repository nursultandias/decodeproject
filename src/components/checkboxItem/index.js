import React from 'react'

function CheckboxItem({item, handleChange, index}) {
    return(
        <div>
            <input type="checkbox" onChange={(e) => handleChange(e, item, index)}/>
            <span>{item}</span>
        </div>
    )
}

export default CheckboxItem