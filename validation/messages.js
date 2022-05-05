const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateJobInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  data.body = validText(data.body) ? data.body : "";
  if (Validator.isEmpty(data.body)) {
    errors.body = "Body field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};