import { observable, action } from 'mobx'
import Tag from '../types/Tag'
class TagArrayStore {
    private initTags = [
        { id: 1, name: '衣' },
        { id: 2, name: '食' },
        { id: 3, name: '住' },
        { id: 4, name: '行' }
    ]
    @observable tags: Tag[] = JSON.parse(window.localStorage.getItem('tags') || JSON.stringify(this.initTags))

    @observable selectedTags = [] as Tag[]

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
        const tagsStr = JSON.stringify(this.tags)
        window.localStorage.setItem('tags', tagsStr)
    }


}
export default new TagArrayStore();