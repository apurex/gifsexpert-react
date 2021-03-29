import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr></hr>

            <ol>
                { 
                    categories.map( category => {
                        // return <li key={category}>{category}</li>
                        return <GifGrid key={category} category={category}></GifGrid>
                    } )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
