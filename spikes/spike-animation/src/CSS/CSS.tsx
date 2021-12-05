import React from 'react'
import './CSS.css'
import { ListOfAnimationLibrary } from '../ListOfAnimationLibrary/ListOfAnimationLibrary'

export const CSS = () => {
    return (
        <>
        <ListOfAnimationLibrary/>
        <div className={"css"}>
           <button className='button button--pan'>
               <span>
                    Hola! hover me!
                </span>
           </button>
        </div>
        </>
    )
}
