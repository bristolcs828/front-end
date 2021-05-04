import Tag from '../types/Tag'
// const 
class OperateTags {
    onAddTag = (tags: Tag[], addTag: Function) => {
        const newTagName = window.prompt('New tags to be added: ')
        if (newTagName !== null) {
            const lastId: number = tags.length >= 1 ?
                tags[tags.length - 1].id : 0
            addTag({ id: lastId + 1, name: newTagName })
        }
    }
    onDeleteTag = (item: Tag, delecteTag: Function, fn?: Function) => {
        let confirmDelete: boolean = window.confirm(`Are you sure to delete tag: '${item.name}'`)
        if (confirmDelete) {
            delecteTag(item)
            if (fn) { fn() }
        }
        return false;
    }

}

export default new OperateTags()
