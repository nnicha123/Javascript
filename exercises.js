//20
function draw(n) {
            let image = '';
            let newImage = '';
            let count = 1;
            let num = 1;
            for (let z = 1; z <= n; z++) {
                if (count < n) {
                    for (let i = n; i >= 1; i--) { 
                        num++;
                        (i <= count) ? image += (i) : image += ("-") 
                    };
                    count++;
                    newImage += (image + '\n');
                    image = '';
                }
            }
            count = 1
            for (let z = n; z >= 1; z--) {
                for (let i = 1; i <= n; i++) { (i < count) ? image += ("-") : image += ("1") };
                count++;
                newImage += (image + '\n');
                image = '';
            }
            return newImage;
        }
        console.log(draw(4));