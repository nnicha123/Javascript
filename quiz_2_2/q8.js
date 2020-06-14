toChange = (money) => {
    let count1000 = 0; let count500 = 0; let count100 = 0; let count50 = 0; let count20 = 0;
    let count10 = 0; let count5 = 0; let count2 = 0; let count1 = 0;

    while (money > 0) {
        while (money >= 1000) { money -= 1000; count1000++; }
        while (money >= 500) { money -= 500; count500++; }
        while (money >= 100) { money -= 100; count100++; }
        while (money >= 50) { money -= 50; count50++; }
        while (money >= 20) { money -= 20; count20++; }
        while (money >= 10) { money -= 10; count10++; }
        while (money >= 5) { money -= 5; count5++; }
        while (money >= 2) { money -= 2; count2++; }
        while (money >= 1) { money -= 1; count1++; }
    }

    return `“แบงค์พัน ${count1000} ใบ / แบงค์ห้าร้อย ${count500} ใบ / แบงค์ร้อย ${count100} ใบ / แบงค์ห้าสิบ ${count50} ใบ / แบงค์ยี่สิบ ${count20} ใบ / เหรียญสิบ ${count10} เหรียญ / เหรียญห้า ${count5} เหรียญ / เหรียญสองบาท ${count2} เหรียญ / เหรียญบาท ${count1} เหรียญ”`
}
console.log(toChange(788));
console.log(toChange(2340));