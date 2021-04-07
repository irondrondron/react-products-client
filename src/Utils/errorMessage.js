const errorMessage = (valueName, validationType, errorName) => {
  // console.log(valueName);
  return (
    valueName.isDirty && validationType && <div className="Form__error">{errorName}</div>
  )
}

export default errorMessage