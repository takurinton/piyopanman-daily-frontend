import React from 'react'
import hiyoko from '../images/hiyoko2.png'
import { Histories } from './components/Historeis'
import { Skills } from './components/Skills'
import { Works } from './components/Works'
 

export const Profile = () => {
    return(
        <div className="profile">
            <h1 className='profile-title'>ぴよぱんまんのプロフィール</h1>
            <img src={hiyoko} />
            <Histories />
            <Skills />
            <Works />
        </div>
    )
}