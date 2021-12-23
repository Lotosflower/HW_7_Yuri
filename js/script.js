

let Bulblight = function () {
 
    this.get = function () {
        
        this.power = +prompt('Введите мощность лампочки, Вт');
       

        if (confirm('Оплата производиться по временному тарифу. Нажмите "Да", если лампочка работала с 17 до 22 часов?')) {
            this.workingTime = +prompt('Сколько времени работала лампочка? , ч');
            this.energyCost = 0.3556;
        } else if (confirm('Оплата производиться по временному тарифу. Нажмите "Да", если лампочка работала с 22 до 17 часов?')) {
            this.workingTime = +prompt('Сколько времени работала лампочка? , ч');
            this.energyCost = 0.1245;
        }else {
            this.workingTime = 0;
            this.energyCost = 0;
        };
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = (this.power / 1000) * this.energyCost * this.workingTime;
 
        this.show();
    };
 
    this.show = function () {
 
        if (this.workingTime == 0 || this.workingTime == undefined) {
            console.log('Лампочка была выключена');
        } else {
            console.log('Лампочка проработала - ' + this.workingTime + ' ч, стоимость затраченой электроэнергии составила = ' + this.result  + ` byn`);
        }
    };
};
 
let bulblight = new Bulblight();
bulblight.get();
 
let totalCost = ( bulblight.result.toFixed(1) )



/*let Aboutcar = function () {
 
    this.get = function () {

    this.averageUse = 10;  

        this.fuelKind = alert('Пожалуйста, выберите вид топлива');
       

        if (confirm('Нажзмите "Да", если выбираете топливо АИ-95')) {
            this.fuelQuantity = +prompt('Введите количествотоплива, л');
            this.fuelCost = 2.1;
        } else if (confirm('Нажзмите "Да", если выбираете топливо АИ-92')) {
            this.fuelQuantity = +prompt('Введите количествотоплива, л');
            this.fuelCost = 2.0;
        } else if (confirm('Нажзмите "Да", если выбираете топливо ДТ')) {
            this.fuelQuantity = +prompt('Введите количествотоплива, л');
            this.fuelCost = 2.1;
        }else {
            this.fuelQuantity = 0;
            this.fuelCost = 0;
        };


        this.distance = alert('Произведем расчет пройденого расстояния.');

       
            this.beggining = +prompt('Введите начальные показания, км.');
           
        
            this.ending = +prompt('Введите конечные показания, км.');
            
       
            this.info = alert('Так же в конце мы расчитаем средний расход топлива за пройденый путь.');
           
        
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = this.fuelCost * this.fuelQuantity;
        this.summ = this.ending - this.beggining;
        this.averageRide = ((this.ending - this.beggining)*this.averageUse)/100 ;

        this.show();
    };
 
    this.show = function () {
 
        if (this.fuelQuantity == 0 || this.fuelQuantity == undefined) {
            console.log('Вы не ввели количество топлива.');
        } else {
            console.log('Вы заправили - ' + this.fuelQuantity + ' л топлива, стоимость заправки составила = ' + this.result  + ` byn.`);
        }

        if (this.beggining > this.ending || this.beggining == undefined) {
            console.log('Введенные данные неверны, введите показания занова.');
        } else {
            console.log('Вы проехали - ' + this.summ + ` км.`);
        }


        if (this.beggining > this.ending || this.begging == undefined) {
            console.log('Введенные данные неверны, введите показания занова.');
        } else {
            console.log('Вы израсходовали - ' + this.averageRide + ` л топлива проехав ` + this.summ + ` км.`);
        }


    };
};
 
let aboutCar = new Aboutcar();
aboutCar.get();
 
let totalCost = aboutCar.result;
let totalSumm = aboutCar.summ;
let totalAм = aboutCar.averageRide;*/
