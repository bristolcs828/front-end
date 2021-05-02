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

export const getTags = (userName: string )=>{
   return new Promise((resolve, reject)=>{
       axios.post(`${baseUrl}/tag`,{userName})
       .then((res)=> { resolve(res) })
       .catch((error)=> { reject(error)})
   })
}

export const setTags = (userName: string, newTags: Array<any>)=>{
    return new Promise((resolve, reject)=>{
        axios.post(`${baseUrl}/tag/update`,{userName, newTags})
        .then((res)=> { resolve(res) })
        .catch((error)=> { reject(error) })
    })
 }

 export const getList = (userName: string )=>{
    return new Promise((resolve, reject)=>{
        axios.post(`${baseUrl}/list`,{userName})
        .then((res)=> { resolve(res) })
        .catch((error)=> { reject(error)})
    })
 }

 export const setList = (userName: string, newList: Array<any>)=>{
    return new Promise((resolve, reject)=>{
        axios.post(`${baseUrl}/list/update`,{userName, newList})
        .then((res)=> { resolve(res) })
        .catch((error)=> { reject(error) })
    })
 }