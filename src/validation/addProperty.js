import isEmpty from "./isEmpty";

export default function validateProductAdd(data) {
  let err = {};
  if (isEmpty(data.type)) {
    err.type = "Type Field Is Required";
  }
  if (isEmpty(data.rooms)) {
    err.rooms = "Rooms Field Is Required";
  }
  if (isEmpty(data.location)) {
    err.location = "Location field required";
  }
  if (isEmpty(data.price)) {
    err.price = "Price Field Is Required";
  }
  if (isEmpty(data.description)) {
    err.description = "Description field required";
  }
  if (isEmpty(data.bed)) {
    err.bed = "Bedrooms Field Is Required";
  }
  if (isEmpty(data.bath)) {
    err.bath = "Bathrooms field required";
  }
  if (isEmpty(data.status)) {
    err.status = "Status Field Is Required";
  }

  return {
    err,
    isValid: isEmpty(err),
  };
}
