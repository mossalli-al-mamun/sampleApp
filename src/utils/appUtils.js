import { Toast } from "native-base";

export const validateEmail = (email) => {
  var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

export const showNotification = (type, message='') => {
 return Toast.show({
  text: message,
  buttonText: "Okay",
  duration: 3000
})}