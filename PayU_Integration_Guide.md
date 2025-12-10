# PayU Backend Integration Guide

This guide explains how to implement the backend logic required for PayU payment gateway integration in your Node.js/Express `Jobstorm-Backend`.

## 1. Prerequisites

Ensure you have your **PayU Merchant Key** and **Salt** available.

- **TEST MODE**: Use the test credentials provided by PayU.
- **LIVE MODE**: Use the production credentials from your PayU dashboard.

## 2. Environment Variables

Add your PayU credentials to your backend `.env` file.

**File:** `.env`

```env
# ... existing variables
PAYU_KEY=your_merchant_key_here
PAYU_SALT=your_merchant_salt_here
```

---

## 3. Create the Payment Controller

This controller will handle the security hash generation required by PayU.

**File:** `controllers/paymentController.js`
(Create this file if it doesn't exist)

```javascript
const crypto = require("crypto");

/**
 * Generate Hash for PayU Payment
 * POST /api/payment/hash
 */
exports.generateHash = (req, res) => {
  try {
    const { txnid, amount, productinfo, firstname, email } = req.body;

    // 1. Get credentials from env
    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    if (!key || !salt) {
      return res
        .status(500)
        .json({ message: "PayU configuration missing in server" });
    }

    // 2. Validate input
    if (!txnid || !amount || !productinfo || !firstname || !email) {
      return res
        .status(400)
        .json({ message: "Missing required payment details" });
    }

    // 3. Construct the Hash Sequence
    // Formula: key|txnid|amount|productinfo|firstname|email|udf1|udf2|...|udf10|salt
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;

    // 4. Create SHA-512 Hash
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    // 5. Return hash to frontend
    res.status(200).json({ hash, key });
  } catch (error) {
    console.error("Hash Generation Error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
```

---

## 4. Create the Payment Route

Define the API route that the frontend will call.

**File:** `routes/paymentRoutes.js`
(Create this file if it doesn't exist)

```javascript
const express = require("express");
const router = express.Router();
const { generateHash } = require("../controllers/paymentController");

// Route to generate hash
router.post("/hash", generateHash);

module.exports = router;
```

---

## 5. Register Routes in Server

Import and use the new payment routes in your main server file.

**File:** `server.js` (or `app.js` / `index.js`)

```javascript
const express = require("express");
const cors = require("cors");
// ... other imports
const paymentRoutes = require("./routes/paymentRoutes"); // <--- Import this

const app = express();

app.use(cors());
app.use(express.json());

// ... other middleware

// Register Payment Routes
app.use("/api/payment", paymentRoutes); // <--- Add this line

// ... existing routes (e.g., /api/jobs, /api/auth)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## 6. Frontend Integration

Once the backend is ready, update your frontend `PricingPage.jsx` to fetch the real hash.

**File:** `src/Components/User/pricing/PricingPage.jsx`

Find the `handlePayment` function and update the hash generation part:

```javascript
// ... inside handlePayment function

try {
  const txnid = "Txn" + new Date().getTime();
  const amount = plan.price.toFixed(2);
  const productinfo = plan.name;
  const firstname = "User Name"; // Dynamic user name
  const email = "user@example.com"; // Dynamic user email

  // 1. CALL YOUR NEW BACKEND API
  const response = await fetch('http://localhost:5000/api/payment/hash', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      txnid,
      amount,
      productinfo,
      firstname,
      email
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to generate hash");
  }

  const { hash, key } = data; // Get securely generated hash

  // 2. Submit to PayU with the hash
  const form = document.createElement("form");
  form.action = "https://test.payu.in/_payment"; // Use https://secure.payu.in/_payment for LIVE
  form.method = "POST";

  const params = {
    key: key, // Use key from backend or env
    txnid: txnid,
    amount: amount,
    productinfo: productinfo,
    firstname: firstname,
    email: email,
    phone: "9999999999", // User phone
    surl: "http://localhost:5173/payment/success",
    furl: "http://localhost:5173/payment/failure",
    hash: hash // <--- The hash from backend
  };

  // ... (rest of the form submission logic remains the same)
```
