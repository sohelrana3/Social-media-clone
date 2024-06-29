//email validation create
function emailValidation(email) {
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(email);
}

// username validation
function validLength(text, min, max) {
  console.log(text.length);
  if (text.length < min || text.length > max) {
    return true;
  }
}

module.exports = { emailValidation, validLength };
