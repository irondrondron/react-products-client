import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CSSTransition } from 'react-transition-group';
import errorMessage from '../../Utils/errorMessage';
import useInput from '../../Utils/useInput';
import { CREATE_ORDER } from '../../GraphQL/Mutations';
import { toggleModalActive } from '../../Redux/Actions/modal';
import { setSelectedObject } from '../../Redux/Actions/object';

const FormOrder = () => {
  const name = useInput('', { isEmpty: true, onlyLetters: true });
  const number = useInput('', { isEmpty: true, onlyNumbers: true, length: 12 });

  const [createOrder] = useMutation(CREATE_ORDER);

  const selectedObject = useSelector((state) => state.object.selectedObject);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.inputValid || !number.inputValid) {
      name.onBlur(e);
      number.onBlur(e);
    } else {
      console.log({
        productId: selectedObject._id,
        name: name.value,
        number: +number.value,
      });
      createOrder({
        variables: {
          productId: selectedObject._id,
          name: name.value,
          number: +number.value,
        },
      });
      setTimeout(() => {
        dispatch(toggleModalActive(false));
        setTimeout(() => {
          dispatch(setSelectedObject(null));
        }, 400);
      }, 100);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <input
        onChange={(e) => {
          name.onChange(e);
        }}
        onBlur={(e) => name.onBlur(e)}
        value={name.value}
        type="text"
        className={
          name.isDirty && name.isError
            ? 'Form__input Form__input--error'
            : 'Form__input'
        }
        placeholder="Name"
      />
      <CSSTransition
        in={name.isDirty && name.isError}
        timeout={500}
        unmountOnExit
        classNames="alert"
      >
        <>
          {errorMessage(name, name.isEmpty, name.errorMessageIsEmpty) ||
            errorMessage(
              name,
              name.onlyLettersError,
              name.onlyLettersErrorMessage
            )}
        </>
      </CSSTransition>

      <input
        onChange={(e) => number.onChange(e)}
        onBlur={(e) => number.onBlur(e)}
        value={number.value}
        type="text"
        className={
          number.isDirty && number.isError
            ? 'Form__input Form__input--error'
            : 'Form__input'
        }
        placeholder="Number"
      />
      <CSSTransition
        in={number.isDirty && number.isError}
        timeout={500}
        unmountOnExit
        classNames="alert"
      >
        <>
          {errorMessage(number, number.isEmpty, number.errorMessageIsEmpty) ||
            errorMessage(
              number,
              number.onlyNumbersError,
              number.onlyNumbersErrorMessage
            ) ||
            errorMessage(number, number.lengthError, number.lengthErrorMessage)}
        </>
      </CSSTransition>
      <button type="submit" className="Form__button">
        Order
      </button>
    </form>
  );
};

export default FormOrder;
