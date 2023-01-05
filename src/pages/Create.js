import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useForm from "../hooks/useForm";
import FormInput from "../components/FormInput";
import noteSchema from "../schemas/noteSchema";

const Create = () => {

    const radios = [
        {
            key: 1,
            label: "Money",
            value: "money"
        },
        {
            key: 2,
            label: "Todo",
            value: "todo"
        },
        {
            key: 3,
            label: "Reminder",
            value: "reminder"
        },
        {
            key: 4,
            label: "Work",
            value: "work"
        }
    ];

    const inputs = [
        {
            key: 1,
            type: "textField",
            label: "Title",
            variant: "outlined",
            size: "small",
            id: "title",
            name: "title",
            fullWidth: true
        },
        {
            key: 2,
            type: "textField",
            label: "Details",
            variant: "outlined",
            size: "small",
            multiline: true,
            id: "details",
            name: "details",
            rows: 4,
            fullWidth: true
        },
        {
            key: 3,
            type: "radioGroup",
            label: "Category",
            name: "category",
            radios: [radios[0], radios[1], radios[2], radios[3]]
        }
    ];

    const { handleSubmit, handleValidation, handleClick, error } = useForm({
        validationSchema: noteSchema,
        onSubmit: (data, e) => {
            //
        }
    });

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form onSubmit={handleSubmit} noValidate autoComplete="true">
                { inputs.map(input => (
                    <FormInput
                        key={input.key}
                        error={error[input.name]}
                        onChange={handleValidation}
                        onBlur={handleValidation}
                        {...input}
                    />
                )) }

                <div onClick={handleClick}>
                    <Button
                        variant="contained"
                        type="Submit"
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{marginTop: 2}}
                        disabled={Object.entries(error).length > 0}
                    >
                        Create
                    </Button>
                </div>
            </form>

        </Container>
    );
}

export default Create;