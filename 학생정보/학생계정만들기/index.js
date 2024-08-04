const xlsx = require("xlsx")
const fs = require("fs")
const workbook = xlsx.readFile('../학생정보.xlsx')
const firstSheetName = workbook.SheetNames[0];
const firstSheet = workbook.Sheets[firstSheetName];
const Json = xlsx.utils.sheet_to_json(firstSheet);
fs.writeFileSync("../학생계정.json", JSON.stringify(Json))

console.log(Json);