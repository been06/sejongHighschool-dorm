const xlsx = require('xlsx');

const workbook = xlsx.readFile('./student_imformation.xlsx'); // 액샐 파일 읽어오기
const firstSheetName = workbook.SheetNames[0]; // 첫 번째 시트 이름 가져오기
const firstShee = workbook.Sheets[firstSheetName]; // 시트 이름을 이용해 엑셀 파일의 첫 번째 시트 가져오기

const firstSheeJson = xlsx.utils.sheet_to_json(firstShee); // 첫 번째 시트 내용을 json 데이터로 변환

console.log(firstSheeJson);
