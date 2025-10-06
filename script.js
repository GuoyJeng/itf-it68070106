const bal_acc = document.getElementById("bal_acc")
const bal_cash = document.getElementById("bal_cash")
const process_type = document.getElementById("process_type")
const process_amt = document.getElementById("process_amt")
const log = document.getElementById("log")

let curr_id = 1
let curr_acc = Number(bal_acc.value)
let curr_cash = Number(bal_acc.value)

function changeBalance() {
    curr_acc = Number(bal_acc.value)
    curr_cash = Number(bal_cash.value)
    showBalance()
}

function proceedOperation() {
    if (process_type.value == "deposit") {
        if (curr_cash >= Number(process_amt.value)) {
            curr_acc += Number(process_amt.value)
            curr_cash -= Number(process_amt.value)
            showBalance()
        } else {
            addLog("Couldn't deposit entered balance. (Insufficient cash balance)")
        }
    } else if (process_type.value == "withdraw") {
        if (curr_acc >= Number(process_amt.value)) {
            curr_acc -= Number(process_amt.value)
            curr_cash += Number(process_amt.value)
            showBalance()
        } else {
            addLog("Couldn't withdraw entered balance. (Insufficient account balance)")
        }
    }
}

function showBalance() {
    bal_acc.value = Number(curr_acc)
    bal_cash.value = Number(curr_cash)
    addLog("Current account balance: " + curr_acc + ", Current cash balance: " + curr_cash)
}

function addLog(text) {
    log.value = (curr_id++ + ", " + text + "\n" + log.value).trim()
}

showBalance()

// ให้เริ่มทำงานอัตโนมัติเมื่อ DOM พร้อม (ไม่ต้องมีปุ่มใด ๆ)
document.addEventListener('DOMContentLoaded', playMusic);