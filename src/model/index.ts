import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const register = (userName: string, passWord:string)=>{
    return new Promise((resolve, reject)=>{
        axios.post(`${baseUrl}/register`, {userName, passWord})
        .then((res)=>{resolve(res)})
        .catch(error=>{reject(error)})
    })

}

export const login = (userName: string, passWord: string)=>{
    return new Promise((resolve, reject)=>{
        axios.post(`${baseUrl}/login`, {userName, passWord})
        .then(res=>{resolve(res)})
        .catch(error=>{reject(error)})
    })
}

export const getTags = (userName: string)=>{
   
}