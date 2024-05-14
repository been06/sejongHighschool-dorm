const xlsx = require('xlsx');

const workbook = xlsx.readFile('./student_information.xlsx'); //액셀 파일 가져오기
const firstSheetName = workbook.SheetNames[0]; // 첫 번째 시트 이름 가져오기-1학년
const firstShee = workbook.Sheets[firstSheetName]; // 첫  번째 시트 가져오기
const secondSheetName = workbook.SheetNames[0]; // 두 번째 시트 이름 가져오기-2학년
const secondShee = workbook.Sheets[secondSheetName]; // 두 번째 시트 가져오기
const thirdSheetName = workbook.SheetNames[0]; // 세 번째 시트 이름 가져오기-3학년
const thirdShee = workbook.Sheets[thirdSheetName]; // 세 번째 시트 가져오기

const firstSheeJson = xlsx.utils.sheet_to_json(firstShee); // 첫 번째 시트 내용을 json 데이터로 변환
const secondSheeJson = xlsx.utils.sheet_to_json(secondShee); // 두 번째 시트 내용을 json 데이터로 변환
const thirdSheeJson = xlsx.utils.sheet_to_json(thirdShee); // 세 번째 시트 내용을 json 데이터로 변환

console.log(firstSheeJson);
console.log(secondSheeJson);
console.log(thirdSheeJson); 
