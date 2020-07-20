class NumberUtil {
	float2moeda(num) {

		let x = 0;
		let cents;
		let ret;

		if(num<0) {
			num = Math.abs(num);
			x = 1;
		}

		if(isNaN(num)) num = "0";
			cents = Math.floor((num*100+0.5)%100);

		num = Math.floor((num*100+0.5)/100).toString();

		if(cents < 10) cents = "0" + cents;
			for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
				num = num.substring(0,num.length-(4*i+3))+'.'
					+num.substring(num.length-(4*i+3));

		ret = num + ',' + cents;
		if (x == 1) ret = ' - ' + ret;
		return ret;
	}

	moeda2float(moeda){
		moeda = moeda.replace(/[.]/g,"");
		moeda = moeda.replace(",",".");
		return parseFloat(moeda);
    }
    
    // Passar Datediff (diferença entre o dia de hj e o dia da data)
    dataFormatada = (data) => {
        if(data == null || data == ""){
            return ""
        }
        else if(data == 0){
            return "Hoje"
        }
        else if(data == 1){
            return "Ontem"
        }
        else if(data < 7){
            return data+"d"
        }
        else if(data >= 7 && data < 30){
            return Math.round(data/7)+"s"
        }
        else if(data >= 30 && data < 365){
            return Math.round(data/30)+"m"
        }
        else{
            return Math.round(data/365)+"a"
        }
    }
}

var number = new NumberUtil();
global.number = number;
export var number;
