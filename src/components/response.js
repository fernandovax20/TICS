import { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AfpContext from '../context/context';



export default function SimpleModal() {
    const classes = useStyles();

    const {
        edad,
        getAfp,
        afp,
        select,
        setPensionDeseada,
        getApv,
        apv,
        setDefault
    } = useContext(AfpContext);

    const [apvcheck, setApvcheck] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (select === '') {
            alert("Debes ingresar un Fondo previcional");
        }else if(edad<18){
            alert("Debes ingresar una edad mayor o igual a 18");
        }
        else {
            setOpen(true);
            getAfp();
        }
    };

    const handleClose = () => {
        setOpen(false);
        setDefault();
        setApvcheck('');
    };

    const checkApvInput = (value) => {
        const regex = /\D/g
        value = value.replace(regex, "");
        setPensionDeseada(value);
        setApvcheck(value);
    }

    const checkApv = () => {

        if (apvcheck === '') {
            alert('Si quiere calcular su APV, ingrese su monto esperado')
        } else if (parseInt(apvcheck) <= afp) {
            alert('Debe poner un monto mayor a su pencion actual')
        }else {
            getApv();
        }
    }

    const body = (
        <div className={classes.paper}>
            <h2 id="transition-modal-title">Su Pension mensual es de:</h2>
            <p id="transition-modal-description">{afp + '$'}</p>
            <h2 id="transition-modal-title">Desea calcular su APV para Pension deseada?</h2>

            <TextField
                className={classes.margin}
                fullWidth
                label="Ingrese Pension deseada"
                id="outlined-size-normal"
                variant="outlined"
                color="secondary"
                onChange={({ target: { value } }) => checkApvInput(value)}
                value={apvcheck}
            />

            <Button variant="outlined" color="secondary" onClick={checkApv}>
                Calcular
            </Button>

            {apv !== undefined &&
                <div>
                    <h2 id="transition-modal-title">Tu APV es de:</h2>
                    <p id="transition-modal-description">{apv}$</p>
                </div>
            }

        </div>
    );

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleOpen} >
                Calcular
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "0 auto",
        marginTop: 100,
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }, margin: {
        marginBottom: theme.spacing(3),
    },
    '@media (max-width: 750px)': {
        paper: {
            margin: "0 auto",
            marginTop: 50,
            width: '80%',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }
}));