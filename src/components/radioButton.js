import { useContext } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


import AfpContext from '../context/context';

export default function RadioButtonsGroup() {

  const { radioButton, setRadioButton } = useContext(AfpContext);

  const handleChange = (event) => {
    setRadioButton(event.target.value);
  };

  return (
    <div>
      <FormLabel component="legend">Genero</FormLabel>
      <RadioGroup aria-label="gender" name="gender" value={radioButton} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Femenino" />
        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
      </RadioGroup>
    </div>
  );
}