const Jazzcash = require("../");

Jazzcash.credentials({
  config: {
    merchantId: "", // Merchant Id
    password: "", // Password
    hashKey: "", // Hash Key
  },
});

Jazzcash.setData({
  pp_ReturnURL: "",
  pp_Amount: 1 * 100,
  pp_BillReference: "billRef123",
  pp_Description: "Test Payment",
  pp_MobileNumber: "",
  pp_CNIC: "",
});

Jazzcash.createRequest("WALLET").then((res) => {
  res = JSON.parse(res);
  console.log(res);
});
