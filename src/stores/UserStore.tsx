import { observable, action } from 'mobx'
import { login, register } from '../model'
import Cookie from 'js-cookie'
class UserStore {
    @observable userName: string | undefined = Cookie.get("userName")
    @observable sign: number = 0

    @action setUserName = (userName: string) => {
        this.userName = userName
        Cookie.set('userName', userName, { expires: 1 });
    }


    @action getUserName = () => {
        return this.userName || ''
    }

    @action login = (userName: string, passWord: string) => {
        return new Promise((resolve, reject) => {
            login(userName, passWord)
                .then((data) => {
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    @action register = (userName: string, passWord: string) => {
        return new Promise((resolve, reject) => {
            register(userName, passWord)
                .then((data) => {
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

export default new UserStore()