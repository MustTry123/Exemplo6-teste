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

// public BankAccount createBankAccount(String accountNumber, String accountType,
//   String accountName, String accountSSN, double balance) {
//   BankAccount account = new BankAccount();
//   account.setAccountNumber(accountNumber);
//   account.setAccountType(accountType);
//   account.setAccountOwnerName(accountName);
//   account.setAccountOwnerSSN(accountSSN);
//   account.setBalance(balance);

//   return account;
//   }
crypto.generateKeyPair("rsa", {
  modulusLength: 2048, // Compliant
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
}); // Compliant

function1();
function2({ username: "Vera", password: "123" }, {});
function2({ username: "Tomas", password: "123" }, {});
function2({ username: "Jorge", password: "123" }, {});
