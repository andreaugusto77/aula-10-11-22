var data = new Date()
//console.log(data)
var hoje = data.getDay()
//console.log(hoje)

switch(hoje){
            case 0:
            console.log('domingo')
            break;

            case 1:
            console.log('segunda')
            break;

            case 2:
            console.log('terça')
            break;
            
            case 4:
            console.log('quarta')
            break;

            case 5:
            console.log('quinta')
            break;


            case 6:
                console.log('sexta')
                break;

            case 7:
            console.log('sabado')
            break;

            default:
                console.log('data errada')

}