const fs = require("fs");
// module.exports = (id, password) => {
//     fs.read
// };

const teacher = fs.readFileSync('../../학생정보/선생님계정.json');
const student = fs.readFileSync('../../학생정보/학생계정.json');

var id = "whgudqls";
var password = "01028820846";

console.log(JSON.parse(student))