import { observable, action } from 'mobx'
import Tag from '../types/Tag'
import TagsStore from './TagsStore'
type Record = {
    tags: Tag[],
    notes: string,
    category: '-' | '+'
    amonut: number,
    date: string,
    id: number
}

class RecordsStore {
    @observable recordsList: Record[] = JSON.parse(window.localStorage.getItem('recordsList') || JSON.stringify([]));

    @observable currentRecord: Record = {
        tags: [],
        notes: '',
        amonut: 0,
        date: new Date().toString(),
        category: '-',
        id: 0
    };
    @observable output: string = '0'
    @action setOutput = (newOutput: string) => {
        this.output = newOutput
    }
    @action seTags = () => {
        this.currentRecord.tags = TagsStore.selectedTags
    }
    @action setNotes = (notes: string) => {
        this.currentRecord.notes = notes
    }

    @action setCategory = (category: '-' | '+') => {

        this.currentRecord.category = category

    }

    @action setId = () => {
        const lastId: number = this.recordsList[this.recordsList.length - 1] ? this.recordsList[this.recordsList.length - 1].id : 0
        this.currentRecord.id = lastId + 1
    }

    @action setAmount = () => {

        this.currentRecord.amonut = parseFloat(this.output)

    }

    @action setDate = () => {

        this.currentRecord.date = new Date().toString()

    }
    @action removeCurrentRecord = () => {
        this.currentRecord = {
            tags: [],
            notes: '',
            amonut: 0,
            date: new Date().toString(),
            category: '-',
            id: 0
        }
    }

    @action addRecord = () => {
        this.setAmount()
        this.setDate()
        this.setId()
        this.recordsList.push(this.currentRecord)
        this.saveRecordList()
    }

    @action deleteRecord = (record: Record) => {
        const newList = this.recordsList.filter((item) => item !== record)
        this.recordsList = newList
        this.saveRecordList()
    }
    @action saveRecordList = () => {
        const recordListsStr = JSON.stringify(this.recordsList)
        window.localStorage.setItem('recordsList', recordListsStr)
    }

}

export default new RecordsStore();