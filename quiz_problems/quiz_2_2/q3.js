thaiTypeof = (variable) => {
    if(typeof variable == 'string') return 'ข้อความ';
    else if(typeof variable == 'number') return 'ตัวเลข';
    else if(typeof variable == 'object') return 'ออปเจ็คต์';
    else return 'อย่างอื่น';
}
console.log(thaiTypeof('Hello'));
console.log(thaiTypeof(2));
console.log(thaiTypeof({name : 'Hello'}));