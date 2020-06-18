changeStringtoThaiDate = (date) => {
   
    let day = date.slice(0, 2);
    let month = date.slice(3, 5);
    let year = Number(date.slice(6)) + 543;

    let month31Days = month == '1' || month == '3' || month == '5' || month == '7' || month == '8' || month == '10' || month == '12';
    let month30Days = month == '4' || month == '6' || month == '9' || month == '11';
    
    // convert to thai month;
    switch(month){
        case '01': month = 'มกราคม';break;
        case '02': month = 'กุมภาพันธ์';break;
        case '03': month = 'มีนาคม';break;
        case '04': month = 'เมษายน';break;
        case '05': month = 'พฤษภาคม';break;
        case '06': month = 'มิถุนายน';break;
        case '07': month = 'กรกฎาคม';break;
        case '08': month = 'สิงหาคม';break;
        case '09': month = 'กันยายน';break;
        case '10': month = 'ตุลาคม';break;
        case '11': month = 'พฤศจิกายน';break;
        case '12': month = 'ธันวาคม';break;
    }
    // check validity
    if (((month31Days) && (Number(day) <= 31)) || ((month30Days) && (Number(day) <= 30)) || ((month == 'กุมภาพันธ์') && (Number(day) <= 28))) {
        return `วันที่ ${day} เดือน ${month} พ.ศ. ${year}`
    }
    else{
        return 'Error';
    }

}
console.log(changeStringtoThaiDate('12-11-1996'));
console.log(changeStringtoThaiDate('31-11-2000'));
console.log(changeStringtoThaiDate('12-13-2000'));
console.log(changeStringtoThaiDate('12-02-2000'));
// console.log('12-11-1996'.slice(0,2));