import useStores from '../stores'
import Tag from '../types/Tag'
// const 
class OperateTags {
    onAddTag = (tags: Tag[], addTag: Function) => {
        const newTagName = window.prompt('要添加的新标签')
        if (newTagName !== null) {
            const lastId: number = tags.length >= 1 ?
                tags[tags.length - 1].id : 0
            addTag({ id: lastId + 1, name: newTagName })
        }
    }
    onDeleteTag = (item: Tag, delecteTag: Function, fn?: Function) => {
        let confirmDelete: boolean = window.confirm(`是否删除'${item.name}'这个标签`)
        if (confirmDelete) {
            delecteTag(item)
            if (fn) { fn() }
        }
        return false;
    }

}

export default new OperateTags()