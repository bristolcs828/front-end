import { observable, action } from 'mobx'
import Tag from '../types/Tag'
import { getTags, setTags } from '../model'
import UserStore from './UserStore'
class TagArrayStore {

    @observable tags: Tag[] = []

    @observable selectedTags = [] as Tag[]

    @action initTags = () => {
        getTags(UserStore.getUserName())
            .then((res: any) => this.tags = res.data)
            .catch(error => console.log(error))
    }

    @action changeSelectedTags = (newSelectedTags: Tag[]) => {
        this.selectedTags = newSelectedTags
    }
    @action addTag = (newTag: Tag) => {
        this.tags.push(newTag)
        this.saveTagsinLoacl()
    }
    @action findTag = (id: string) => {
        const tag: Tag = this.tags.filter(tag => tag.id === parseInt(id))[0]
        return tag
    }
    @action delecteTag = (tag: Tag) => {
        const newTags = this.tags.filter(item => item !== tag)
        this.tags = newTags
        const newSelectedTags = this.selectedTags.filter((item) => item !== tag)
        this.selectedTags = newSelectedTags
        this.saveTagsinLoacl()

    }

    @action setTag = (tag: Tag, newName: string) => {
        if (tag === undefined) return
        const targetTag: Tag = this.findTag(tag.id.toString())

        targetTag.name = newName === '' ? targetTag.name : newName
        this.tags = this.tags.map(item => item.id === targetTag.id ? tag = { id: tag.id, name: newName } : item)
        this.saveTagsinLoacl()
    }

    private saveTagsinLoacl = () => {
        setTags(UserStore.getUserName(), this.tags)
            .then(() => { console.log("update success") })
            .catch((error) => console.log(error))
    }


}
export default new TagArrayStore();