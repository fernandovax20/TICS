import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import GenderRadioGroup from '../components/radioButton'
import Fondo from '../components/fondo';
import Response from '../components/response';
import AfpContext from '../context/context';

import { useContext } from 'react';

export default function Simulador() {
    const classes = useStyles();

    const {
        setEdad,
        setAhorro,
        setSueldo,
        setCotizacion,
        edad,
        ahorro,
        sueldo,
        cotizacion

    } = useContext(AfpContext)

    const checkEdad = (value) => {
        const regex = /\D/g
        value = value.replace(regex, "");

        if (value <= 65 ) {
            setEdad(value)
        } else {
            alert('La edad del usuario debe ser menor a 65');
        }
    }
    const checkAhorro = (value) => {
        const regex = /\D/g
        value = value.replace(regex, "");
        setAhorro(value);
    }
    const checkSueldo = (value) => {
        const regex = /\D/g
        value = value.replace(regex, "");
        setSueldo(value);
    }
    const checkCotizacion = (value) => {
        const regex = /\D/g
        value = value.replace(regex, "");
        value = value.replace('0','');
        if (value <= 12) {
            setCotizacion(value);
        } else {
            alert("Los meses no pueden ser mas de 12")
        }
    }

    return (
        <div className="contenedor" >
            <div className="formulario">
                <h1>Ingrese sus datos</h1>
                <TextField
                    className={classes.margin}
                    fullWidth
                    label="Edad"
                    variant="outlined"
                    onChange={({ target: { value } }) => checkEdad(value)}
                    value={edad}
                    color="secondary"
                />
                <TextField
                    className={classes.margin}
                    fullWidth
                    label="Ahorro acumulado en cuenta obligatoria"
                    variant="outlined"
                    color="secondary"
                    onChange={({ target: { value } }) => checkAhorro(value)}
                    value={ahorro}
                />
                <TextField
                    className={classes.margin}
                    fullWidth
                    label="Remuneracion mensual imponible"
                    variant="outlined"
                    color="secondary"
                    onChange={({ target: { value } }) => checkSueldo(value)}
                    value={sueldo}
                />
                <TextField
                    className={classes.margin}
                    fullWidth
                    label="N° de meses que cotiza al año"
                    variant="outlined"
                    color="secondary"
                    onChange={({ target: { value } }) => checkCotizacion(value)}
                    value={cotizacion}
                />

                <GenderRadioGroup />

                <Fondo />

                <Response />

            </div>
        </div>

    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        marginBottom: theme.spacing(3),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

