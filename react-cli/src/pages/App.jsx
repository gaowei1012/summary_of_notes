import React, {useEffect} from 'react'
import '../styles/app.scss'

const App = () => {
    useEffect(() => {
        console.log('hello')
    }, [])
    return (
        <div className='app'>
            app1q
        </div>
    )
}

export default App
