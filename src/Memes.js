import React from "react"

export default function Memes(){
    const [meme, setMeme]= React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [memesData, setMemesData]= React.useState("")
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            setMemesData(data.data.memes)
        })
    },[])
    
        
    function getMemeImage(){
        const random= Math.floor(Math.random() * memesData.length)
        const url= memesData[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })
    )}
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme =>{
            return{
                ...prevMeme,
                [name] : value
            }
        })
    }
    return(
        <div className="form">
            <input className="form--input"
                    type="text" 
                    placeholder="Top Text"
                    name= "topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
            <input className="form--input"
                    type="text" 
                    placeholder="Bottom Text"
                    name= "bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
            <button className="button"
                    onClick={getMemeImage}>
                        Click Me!
            </button>
            <div className="meme-img">
                <img src={meme.randomImage} alt="random-meme" />
                <p className="meme-text top">{meme.topText}</p>
                <p className="meme-text bottom">{meme.bottomText}</p>
            </div>
        </div>
    )
}
// import {useState, useEffect} from 'react'

// export default function Memes(){
//     const [meme, setMeme]= useState({
//         topText: '',
//         bottomText: '',
//         img: ''
//     })
//     function handleChange(e){
//           const { name, value} = e.target
//            console.log(e.target.value)
//            setMeme( (preMeme) => {
//             return{
//                 ...preMeme,
//                 [name] : value
//             }
//         }
//         )
            
            
//     }

//     return(
//         <div className='form'>
//             <input type='text' 
//             placeholder='Enter the top text'
//             name= 'topText'
//             value={meme.topText}
//             className='form--input' 
//             onChange={handleChange}/>
//             <input type='text' 
//             placeholder='Enter the top text'
//             value={meme.bottomText}
//             className='form--input'
//             name= 'bottomText'
//             onChange={handleChange} />
//             <button className='button'>Click Me</button>
//             <div className='meme-img'>
//             <img src='' alt= 'meme-img' />
//             <p className='meme-text top'></p>
//             <p className='meme-text bottom'></p>
//             </div>

//         </div>
        
//     )
// }