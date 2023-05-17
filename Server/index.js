const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;

// * Middle ware 
app.use(cors());
app.use(express.json());

// MongoDB code are here 


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.zioaowq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // database name
        const database = client.db("volunteerNetwork");
        // collection name
        const collection = database.collection("volunteer");

        app.post('/api/userUpload' , async(req , res)=>{
            const body = req.body; 
            console.log(body)
            const result = await collection.insertOne(body); 
            res.send(result)
        })





        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/api', (req, res) => {
    const data = {
        status: 200,
        message: 'SERVER IS RUNNING SUCCESSFULLY'
    }
    res.send(data)
})


// Listen port 
app.listen(port, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${port}`)
})