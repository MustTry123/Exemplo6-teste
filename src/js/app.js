const users = [
  {
    username: "Vera",
    password: "123",
    allowedFunctions: ["function2", "function3"],
  },
  {
    username: "Tomas",
    password: "123",
    allowedFunctions: ["function3"],
  },
  {
    username: "Jorge",
    password: "123",
    allowedFunctions: [],
  },
];

const callToDB = (obj) => {
  //conector ao mongodb
  console.log("callToDB");
};
const function1 = (obj) => {
  callToDB(obj);
};

const verifyUserAuthorization = (username, password, function_name) => {
  const resp = users.find(
    (user) =>
      user.username === username &&
      user.password === password &&
      user.allowedFunctions.includes(function_name)
  );
  console.log(resp /*!= undefined*/);
  return resp;
};
const function2 = (_userCredentialed, obj) => {
  const function_name = "function2";
  const { username, password } = _userCredentialed;
  if (!verifyUserAuthorization(username, password, function_name)) return;
  callToDB(obj);
};

function1();
function2({ username: "Vera", password: "123" }, {});
function2({ username: "Tomas", password: "123" }, {});
function2({ username: "Jorge", password: "123" }, {});
