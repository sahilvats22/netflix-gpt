export const checkValidData = (email, password) => {
  const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailvalid) return "Email is not valid";
  if (!isPasswordvalid) return "Password is not valid";
  //  if (!isValidname) return "Name should only contain letters and spaces";
  return null;
};
