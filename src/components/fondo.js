import { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import AfpContext from '../context/context';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  const { setSelect } = useContext(AfpContext);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Fondo</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" color="secondary" onChange={handleChange}>
          <option aria-label="None" value=""></option>
          <option value={'A'}>A</option>
          <option value={'B'}>B</option>
          <option value={'C'}>C</option>
          <option value={'D'}>D</option>
          <option value={'E'}>E</option>
        </Select>
      </FormControl>

    </div>
  );
}