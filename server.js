// casquette
// price_1M8NbhFdXSlraEJ4jusCMSd8

// tshirt 
// price_1M8NaVFdXSlraEJ4TjHV6B3C

// Mug
// price_1M8Nb0FdXSlraEJ4nwIc80l8

const express = require('express')
var cors = require('cors');
const stripe = require('stripe')('sk_test_51M8NSZFdXSlraEJ4QIzJbgXUJu4C4CBqKAG4cYTwKAvJt6AgoYBSSUBv1LQTumkzonJDBxSRyBgYuYMa1utsRnaq00VYiIXkSL')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/achat",
        cancel_url: "http://localhost:3000/annulation"
    })

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000,()=>console.log("Listening on port 4000"))