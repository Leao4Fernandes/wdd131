const DAYS = 6
const LIMIT = 30
let studentreport = [11, 42, 33, 64, 29, 37, 44]

studentreport.forEach(value) {
    if (value < LIMIT) {
        console.log(`The value ${value} is below the limit of ${LIMIT}.`)
    }
}
