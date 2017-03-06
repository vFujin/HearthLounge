export const requirementsObj = {
  list_symbol: "◇",
  username: ["start with letter", "be between 3-10 characters", "contain only [a-zA-Z] characters"],
  ['e-mail']: ["look like: example@example.com"],
  ['confirm_e-mail']: ["be the same as e-mail address written above"],
  password: ["be between 8-20 characters", "have at least 1 upper case letter [A-Z]", "have at least 1 numeric character [0-9]", "have at least 1 special character [! @ # $ % ^ & *]"],
  confirm_password: ["be the same as password written above"],
  secret_answer: ["be between 3-10 characters", "contain [a-zA-Z] characters", "contain [0-9] characters"]
};
