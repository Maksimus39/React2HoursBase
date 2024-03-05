import styles from './App.module.scss/'
import {Details} from "./Details.jsx";
import {useEffect, useRef, useState} from "react";


export function App() {
    // новое состояние
    const [details, setDetails] = useState({
        isLoading: true,
        title: 'useEffect',
        description: 'Hello world',
        buttonText: 'Click'
    })
    // // useEffect
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setDetails(prev => ({...prev, isLoading: false}))
    //     }, 1000)
    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, [details.title])
    //
    //
    // useEffect(() => {
    //     console.log('Title has changed')
    //     setDetails(prev => ({
    //         ...prev, description: 'Title has changed'
    //     }))
    // }, [])

    // будем делать декомпозицию
    // const [title,setTitle] = useState('')
    // const [description,setDescription] = useState('')
    // const [buttonText,setButtonText] = useState('')

    // useRef
    const imageRef = useRef(null)
    const onClick = () => {
       if(!imageRef.current)return
        imageRef.current.style.borderRadius='20px'
        imageRef.current.style.boxShadow='0 13px 6px rgba(0,0,0, .5)'
    }
    return (
        <div className={styles.layout}>
            <img ref={imageRef} src='/thumbnail.jpg' width='480' alt={'фото'}/>


            {details.isLoading ? (
                <p>Loading...</p>
            ) : <Details details={details} setDetails={setDetails}/>}
            <button onClick={onClick}>Change img</button>
        </div>
    )
}