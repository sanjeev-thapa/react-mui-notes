import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";
import ErrorIcon from "@mui/icons-material/Error";

const FormInput = (props) => {
    const {label, type, error, radios, ...input} = props;

    return (
        <>
            <InputLabel htmlFor={input.id} sx={{fontSize: "0.9rem", marginTop:2, marginBottom: 0.5}}>{label}</InputLabel>

            {type.toLowerCase() === "textfield" && <TextField { ...input } />}

            {type.toLowerCase() === "radiogroup" && <RadioGroup {...input}>
                {radios.map(radio => (
                    <FormControlLabel {...radio} control={<Radio />} />
                )) }
            </RadioGroup>}

            {error && <FormHelperText error sx={{display: "flex", alignItems: "center"}}>
                <ErrorIcon sx={{fontSize: "medium", marginTop: -0.25, marginRight: 1}} /> {error}
            </FormHelperText>}
        </>
    );
}

export default FormInput;