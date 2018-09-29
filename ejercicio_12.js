var convertor={
    convertir:function convertir(medida,unidad,unidadnew,tipo){
        let resultado;
        switch(tipo){
            case 'L':
                if(unidad=='m'){
                    if(unidadnew=='km'){
                        resultado=medida/1000;
                        return resultado+""+unidadnew;
                    }else if(unidadnew=='ft'){
                        resultado=medida*3.28;
                        return resultado+""+unidadnew;
                    }
                    else {
                        resultado=medida*100;
                        return resultado+""+unidadnew;
                    }
                }
                else if(unidad=='km'){
                    resultado=medida*1000;
                    return resultado+""+unidadnew;
                }
                else if(unidad=='ft'){
                    resultado=medida*0.3048;
                    return resultado+""+unidadnew;
                }
                break;
            case 'T':
                if(unidad=='c'){
                    if(unidadnew=='f'){
                        resultado = (medida*(9/5)) + 32;
                        return resultado+""+unidadnew;
                    }
                    else if(unidadnew='k'){
                        resultado = medida + 273.15;
                        return resultado+""+unidadnew;
                    }
                }else if(unidad=='f'){
                    if(unidadnew=='c'){
                        resultado = (medida-32)*(5/9);
                        return resultado+""+unidadnew;
                    }
                    else if(unidadnew='k'){
                        resultado = (medida + 459.67)*(5/9);
                        return resultado+""+unidadnew;
                    }
                }
                else if(unidad=='k'){
                    if(unidadnew=='c'){
                        resultado =medida - 273.15;
                        return resultado+""+unidadnew;
                    }
                    else if(unidadnew='f'){
                        resultado = medida*(9/5) - 459.67;
                        return resultado+""+unidadnew;
                    }
                }
                break;
        }
    }
}
console.log(convertor.convertir(100, 'f', 'c', 'T'));