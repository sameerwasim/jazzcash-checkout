# Jazzcash Checkout

JazzCash Checkout is a nodejs library which help you to integrate JazzCash in your node application. 

## Installation

Use the npm package manager to install JazzCash Checkout.

```bash
npm install jazzcash-checkout
```

## Usage

```javascript
const Jazzcash = require('jazzcash-checkout')

# initializes your jazzcash
Jazzcash.credentials({
  config: {
    merchantId: "", // Merchant Id
    password: "", // Password
    hashKey: "", // Hash Key
  },
  environment: 'sandbox' // available environment live or sandbox
});

# set jazzcash data fields according to your request
Jazzcash.setData({
  pp_Amount: 1 * 100,
  pp_BillReference: "billRef123",
  pp_Description: "Test Payment",
  pp_MobileNumber: "03123456789",
  pp_CNIC: "345678",
});

# returns jazzcash response
# REQUEST TYPES (PAY, WALLET, INQUIRY, REFUND)
Jazzcash.createRequest("WALLET").then((res) => {
  res = JSON.parse(res); // don't parse for PAY
  console.log(res);
});
```

## Contributing

Pull requests are welcome. For significant changes, please open an issue first
to discuss what you would like to change.

## Extra

PHP Library: [Jazzcash-php](https://github.com/rafayhingoro/jazzcash). 
(I was trying to find if someone made Jazzcash NodeJS library. I didn't found any but i did found PHP one.)

## License

[MIT](https://choosealicense.com/licenses/mit/)
