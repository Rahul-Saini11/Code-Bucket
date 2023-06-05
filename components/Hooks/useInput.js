import { useState } from "react";

const useInput = (validateInput) => {
    const [value, setValue] = useState('');
    const [isTouched, setTouched] = useState(false);

    const isValid = validateInput(value);

    const valueChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const valueBlurHandler = () => {
        setTouched(true);
    }
    const hasError = !isValid && isTouched;

    const reset = () => {
        setValue('');
        setTouched(false);
    }

    return {
        value,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default useInput;