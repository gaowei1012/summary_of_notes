import React, {useEffect} from 'react'
import '../styles/app.scss'
import axios from 'axios'

const App = () => {
    useEffect(() => {
        
    }, [])
    const post_login = () => {
        const data = {
            "username": '小龚',
            "password": '123456'
        }
        axios({
            method: 'POST',
            url: 'http://39.99.241.232:7071/api/user/login',
            data: data,
            withCredentials: true
        })
        .then(res => {
            console.log('response', res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='app'>
            app1q
            <div onClick={post_login}>按钮</div>
        </div>
    )
}

export default App
