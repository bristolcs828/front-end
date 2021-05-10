import { observable, action } from 'mobx'
import { getSign, setSign } from '../model'
import UserStore from './UserStore'
import signMap2 from '../const/signMap'
class SignStore {
  @observable sign:any 
  
  @observable signMap :Array<any> = []
  @action initSign = ()=>{
      getSign(UserStore.userName|| '')
        .then((res: any)=> {
            this.sign = res && res.data})
        .catch((e)=>console.log(e))
  }
  @action addSign =()=>{
     this.sign += 1
     setSign(UserStore.userName||'', this.sign)
  }

  @action setSignMap=()=>{
     this.signMap = signMap2.filter((item => item.day <= this.sign))
  }
}

export default new SignStore();