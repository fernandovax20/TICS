import AfpContext from "./context"
import apiCall from "../api/api";

import { useState } from 'react';

export default function AfpProvider({ children }) {

    const [edad, setEdad] = useState('');
    const [ahorro, setAhorro] = useState('');
    const [sueldo, setSueldo] = useState('');
    const [cotizacion, setCotizacion] = useState('');
    const [radioButton, setRadioButton] = useState('female');
    const [select, setSelect] = useState('');

    const [pensionDeseada, setPensionDeseada] = useState('');
    const { apv } = pensionDeseada;

    const [afp, setAfp] = useState('Cargando...');
    

    const getAfp = async () => {
        try {
            const data = {
                edad: parseInt(edad),
                sexo: radioButton,
                ahorroAcumulado: parseInt(ahorro),
                remuneracionMensual: parseInt(sueldo),
                mesesCotizados: parseInt(cotizacion),
                fondo: select
            }
            const response = await apiCall({
                url: "https://simulador-afp.herokuapp.com/api/remuneracionmensual",
                body: data
            });
            
            setAfp(response.pension);
        } catch (error) {
            Promise.reject(error);
        }
    }

    const getApv = async () => {
        try {
            const data = {
                edad: parseInt(edad),
                sexo: radioButton,
                ahorroAcumulado: parseInt(ahorro),
                remuneracionMensual: parseInt(sueldo),
                mesesCotizados: parseInt(cotizacion),
                fondo: select,
                remuneracionDeseada: parseInt(pensionDeseada)
            }

            const response = await apiCall({
                url: "https://simulador-afp.herokuapp.com/api/apv",
                body: data
            });

            setPensionDeseada(response);
        } catch (error) {
            Promise.reject(error);
        }
    }
    
    const setDefault = async () =>{
        setEdad('');
        setAhorro('');
        setSueldo('');
        setCotizacion('');
        setRadioButton('female');
        setPensionDeseada('');
        setAfp('');
    }

    return (
        <AfpContext.Provider value={{
            setEdad,
            setAhorro,
            setSueldo,
            setCotizacion,
            edad,
            ahorro,
            sueldo,
            cotizacion,
            radioButton,
            setRadioButton,
            select,
            setSelect,
            getAfp,
            afp,
            setPensionDeseada,
            pensionDeseada,
            getApv,
            apv,
            setDefault
        }}
        >
            {children}
        </AfpContext.Provider>
    );
}