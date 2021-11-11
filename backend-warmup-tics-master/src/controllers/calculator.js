//constantes de esperanza de vida(edv), edad de jubilacion(edj) hombre y mujeres
const edv_mujer = 82.1;
const edj_mujer = 60;
const edv_hombre = 77.3;
const edj_hombre = 65;
const renta = { a: 6.52, b: 6.58, c: 7.35, d: 4.14, e: 4.11 };

module.exports.remuneracionmensual = (req, res) => {
    const { edad, sexo, ahorroAcumulado, remuneracionMensual, mesesCotizados, fondo } = req.body;

    //Selector de constante de Fondo
    
    const rentabilidad = renta[fondo.toLowerCase()];

    const calculoAfp = (esperanzaVida, edadJubilacion) => {
        return Math.trunc((ahorroAcumulado + (((remuneracionMensual / 10) * mesesCotizados * (edadJubilacion - edad)) * ((100 + rentabilidad) / 100))) / ((esperanzaVida - edadJubilacion) * 12));
    }

    //calculo afp segun sexo y esperanza de vida
    afp = { male: calculoAfp(edv_hombre, edj_hombre), female: calculoAfp(edv_mujer, edj_mujer) }

    const pension = afp[sexo.toLowerCase()];
    
    res.json({ pension: pension });

};



module.exports.apv = (req, res) => {
    const { edad, sexo, ahorroAcumulado, remuneracionMensual, mesesCotizados, fondo, remuneracionDeseada } = req.body;
    
    //Selector de constante de Fondo
    const rentabilidad = renta[fondo.toLowerCase()];

    const calculoAfp = (esperanzaVida, edadJubilacion) => {
        return Math.trunc((ahorroAcumulado + (((remuneracionMensual / 10) * mesesCotizados * (edadJubilacion - edad)) * ((100 + rentabilidad) / 100))) / ((esperanzaVida - edadJubilacion) * 12));
    }

    //calculo afp segun sexo y esperanza de vida
    afp = { 
        male: calculoAfp(edv_hombre, edj_hombre), 
        female: calculoAfp(edv_mujer, edj_mujer) 
    }

    const pension = afp[sexo.toLowerCase()];

    //calculo apv segun sexo y esperanza de vida
    const calculoAPV = (remuneracionDeseada, esperanzaVida, edadJubilacion)=>{
        return Math.trunc(((remuneracionDeseada - pension) * (esperanzaVida - edadJubilacion) * ((100 - rentabilidad) / 100)) / (edadJubilacion - edad));
    }

    apv = {
        male: calculoAPV(remuneracionDeseada, edv_hombre, edj_hombre), 
        female: calculoAPV(remuneracionDeseada, edv_mujer, edj_mujer) 
    }

    const apvNecesario = apv[sexo.toLowerCase()];
    res.json({ apv: apvNecesario });
};
