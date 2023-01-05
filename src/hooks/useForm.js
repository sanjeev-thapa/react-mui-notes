import { useState } from "react";

const useForm = ({ validationSchema, onSubmit }) => {
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = Object.fromEntries(new FormData(e.target));

        validationSchema
            .validate(formData, {abortEarly: false})
            .then(data => onSubmit(data, e))
            .catch(err => {
                err.inner.map(e => !!!error[e.path] ? error[e.path] = e.errors[0] : null);
                setError({...error});
                focusErrorInput();
            });
    }

    const handleValidation = (e) => {
        if (e.type === "blur" && error[e.target.name])
            return;
        if (e.type === "change" && !error[e.target.name])
            return;

        validationSchema
            .validateAt(e.target.name, {[e.target.name]: e.target.value})
            .then(data => {
                delete error[e.target.name];
                setError({...error});
            })
            .catch(err => setError({...error, [err.path]: err.message}));
    }

    const handleClick = () => focusErrorInput();

    const focusErrorInput = () => {
        if (Object.entries(error).length > 0)
            document.querySelector(`[name="${Object.keys(error)[0]}"`).focus();
    }

    return { handleSubmit, handleValidation, handleClick, error, setError };
}

export default useForm;