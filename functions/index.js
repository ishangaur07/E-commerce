const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51NjZQzSBvPEKr6NEt2dZU00n6mIOPbK8U5fd4epSkSXX3I3W2cYnvh2dcX75GOOB5m4pCsL0jNTuLbW5yKwKHiHT00aJJCZioP')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello, world!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; // Extract the total from the request query

  console.log("Payment Request Received for this amount:", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      description: 'Software development services',
      amount: total, // Subunits of the currency
      shipping: {
        name: 'Ishan',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      },
      currency: "usd",
      payment_method_types: ['card'],
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    response.status(500).send({
      error: error.message,
    });
  }
});

exports.api = functions.https.onRequest(app);
