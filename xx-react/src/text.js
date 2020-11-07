const obj = {
    a: '张三'


}

const b = obj

obj.a = 'lisi'
console.log('b', b);
console.log(b === obj);