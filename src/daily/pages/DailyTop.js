import React, { useState, useEffect } from 'react'
import { getDaily } from '../api/getDaily'
import { DailyContent } from '../components/DailyContent'
import { CategoryList } from '../components/CategoryList'


export const DailyTop = () => {
    const initialState = {
        id: '',
        date: '',
        evaluation: '',   
    };

    const[daily, setDaily] = useState(initialState);
    const[loading, setLoading] = useState(true);

    //console.log(daily)
    useEffect(() => {
        getDaily()
        .then(d => {
            setDaily(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[])

    //console.log(daily)

    return(
        <div className="main">
            {
                loading ?
                <h1>loading...</h1>
                :
                <div className='contents-container'>
                {daily.map( d => <DailyContent {...d}  /> )}
                </div>
            }
            <CategoryList />
        </div>
    )

}