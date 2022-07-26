import moment from "moment"
import { v4 as uuidv4 } from "uuid"

class Expense {
    constructor({description = '', amount = 0, note = ''}) {
        this.id = uuidv4()
        this.description = description
        this.amount = amount
        this.note = note
        this.createdAt = moment().valueOf()
    }

    serialize = () => JSON.parse(JSON.stringify(this))
}
export default Expense