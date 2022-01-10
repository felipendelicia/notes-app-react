import React from 'react'

export const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
            <h1>Notes App</h1>
            <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className='save'>Toggle mode</button>
        </div>
    )
}

export default Header
