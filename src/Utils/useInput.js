import { useEffect, useState } from "react";
// import useValidation from "./useValidation";

const useValidation = (value, validations) => {
  const [isError, setError] = useState(false)

  const [isEmpty, setEmpty] = useState(true);
  const [errorMessageIsEmpty, setErrorMessageIsEmpty] = useState('')

  const [minLengthError, setMinLengthError] = useState(false);
  const [minLengthErrorMessage, setMinLengthErrorMessage] = useState('')

  const [lengthError, setLengthError] = useState(false);
  const [lengthErrorMessage, setLengthErrorMessage] = useState('')

  const [maxLengthError, setMaxLengthError] = useState(false);
  const [maxLengthErrorMessage, setMaxLengthErrorMessage] = useState('')

  const [onlyLettersError, setOnlyLettersError] = useState(false)
  const [onlyLettersErrorMessage, setOnlyLettersErrorMessage] = useState('')

  const [onlyNumbersError, setOnlyNumbersError] = useState(false)
  const [onlyNumbersErrorMessage, setOnlyNumbersErrorMessage] = useState('')

  const [inputValid, setInputValid] = useState(false)


  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          if (value) {
            setEmpty(false)
            setError(false)
            setErrorMessageIsEmpty('')
          } else {
            setEmpty(true)
            setError(true)
            setErrorMessageIsEmpty(`Should not be empty`)
          }
          break;
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthError(true)
            setError(true)
            setMinLengthErrorMessage(`Should be at least ${validations[validation]} characters`)
          } else {
            setMinLengthError(false)
            setError(false)
            setMinLengthErrorMessage('')
          }
          break;
        case 'length':
          if (value.length !== validations[validation]) {
            setLengthError(true)
            setError(true)
            setLengthErrorMessage(`Should contain ${validations[validation]} characters`)
          } else {
            setLengthError(false)
            setError(false)
            setLengthErrorMessage('')
          }
          break;
        case 'maxLength':
          if (value.length > validations[validation]) {
            setMaxLengthError(true)
            setError(true)
            setMaxLengthErrorMessage(`Should be no more than ${validations[validation]} characters`)
          } else {
            setMaxLengthError(false)
            setError(false)
            setMaxLengthErrorMessage('')
          }
          break;
        case 'onlyLetters':
          const regexLetter = /[^a-zA-Z]/
          if (regexLetter.test(String(value).toLowerCase())) {
            setOnlyLettersError(true)
            setError(true)
            setOnlyLettersErrorMessage("Only letters allowed")
          } else {
            setOnlyLettersError(false)
            setOnlyLettersErrorMessage('')
          }
          break;

        case 'onlyNumbers':
          const regexNumber = /^\d+$/
          if (!regexNumber.test(String(value).toLowerCase())) {
            setOnlyNumbersError(true)
            setError(true)
            setOnlyNumbersErrorMessage("Only numbers  allowed")
          } else {
            setOnlyNumbersError(false)
            setOnlyNumbersErrorMessage('')
          }
          break;
        // default: null
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLengthError || lengthError || maxLengthError || onlyLettersError || onlyNumbersError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, minLengthError, lengthError, maxLengthError, onlyLettersError, onlyNumbersError])

  return {
    isError,
    isEmpty,
    errorMessageIsEmpty,
    minLengthError,
    minLengthErrorMessage,
    lengthError,
    lengthErrorMessage,
    maxLengthError,
    maxLengthErrorMessage,
    onlyLettersError,
    onlyLettersErrorMessage,
    onlyNumbersError,
    onlyNumbersErrorMessage,
    inputValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
    // console.log(e);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {

    value,
    onChange,
    onBlur,
    // errorMessage,
    isDirty,
    ...valid,
  };
};

export default useInput