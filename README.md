# Project Name
LogBook

## Description
LogBook is an e-commerce website based on a dummy API to fetch some dummies data.

## Installation front-end
1. Clone the repository: `git clone https://github.com/Alexandre-Redon/logbook.git`
2. Navigate to the project directory: `cd logbook`
3. Install the dependencies: `npm install`

## Installation back-end
I have published my backend on Vercel to simplify deployment. If you want to install it locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Alexandre-Redon/logbook_backend.git`
2. Navigate to the project directory: `cd logbook_backend`
3. Install the dependencies: `npm install`

**Note:** If you decide to install the backend locally, you need to make a modification in the code. Open the `Checkout.tsx` file and locate the following lines (58 to 65):

```javascript
const response = await fetch(
  "https://logbook-backend.vercel.app/payments/create-checkout-session",
  {
    method: "POST",
    headers: header,
    body: JSON.stringify(body),
  }
);
```
To
```javascript
const response = await fetch(
  "http://localhost:3000/payments/create-checkout-session",
  {
    method: "POST",
    headers: header,
    body: JSON.stringify(body),
  }
);
```
