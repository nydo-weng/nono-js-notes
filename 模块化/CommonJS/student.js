const name = 'nono';
const motto = 'no stop';

function getTel() {
  return '0413888888';
}

function getHobby() {
  return ['coding', 'work out', 'swim', 'video game'];
}

module.exports = {
  name,
  motto,
  getTel,
};

console.log(arguments.callee.toString());

/*
以下是 student.js 的代码, CommonJS 会把他包装成一个函数, 并传入 exports, reuiqre, module, __filename, __dirname

function (exports, require, module, __filename, __dirname) {
const name = 'nono';
const motto = 'no stop';

function getTel() {
  return '0413888888';
}

function getHobby() {
  return ['coding', 'work out', 'swim', 'video game'];
}

module.exports = {
  name,
  motto,
  getTel,
};

console.log(arguments.callee.toString());

}
*/
