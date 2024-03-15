# MongoDB Operations

MongoDB is a popular NoSQL database that offers high performance, scalability, and flexibility. In this document, we'll cover basic MongoDB operations using the MongoDB Node.js driver.

## Installation
You can download and install MongoDB from the [official MongoDB website](https://www.mongodb.com/try/download/community).

To interact with MongoDB from a Node.js application, you'll need to install the MongoDB Node.js driver. You can install it using npm:

`npm install mongodb`

## Connecting to MongoDB

To connect to MongoDB from your Node.js application, you need to create a `MongoClient` object and pass the MongoDB connection URI to it. 

```JS
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const newDb = new MongoClient(uri);

```
### Creating a Database and Collection
You can create a database and a collection within that database:

```JS
async function connect() {
    try {
        // Connect to MongoDB
        await newDb.connect();
        console.log('Connected to MongoDB');
        
        // Create a database
        const db = newDb.db("SampleDB");
        console.log("DB is created");

        // Create a collection
        const collectionName = "Sample-Doc";
        const collection = await db.createCollection(collectionName);
        console.log(`${collection.collectionName} Collection is created in the ${db.databaseName}`);
    } catch (error) {
        console.error("Error in connect", error);
    }
}

connect();

```

### Inserting Documents
You can insert documents into a collection using the insertOne method:

```JS
async function addDocument(db, collectionName) {
    try {
        const collection = db.collection(collectionName);
        await collection.insertOne({"Name": "user2", "Age":32});
        console.log(`User is added to "${collectionName}" collection in the "${db.databaseName}" database`);
    } catch (error) {
        console.log("Error in addDocument", error);
    }
}

```

```JS
//To insert many documents in collection
const documents = [
            {"Name": "user1", "Age": 30},
            {"Name": "user2", "Age": 32},
            {"Name": "user3", "Age": 28}
        ];
 // Prevent additional documents from being inserted if one fails
const options = { ordered: true };

 await collection.insertMany(documents,options);
```

### Viewing Data
You can view data in a collection using the find method:
```JS
//To view all documents in an collection 
async function viewData(collection) {
    try {
        const documents = await collection.find({}).toArray();
        console.log(documents);
        console.log("Data in our database");
    } catch (error) {
        console.log("Error in viewData", error);
    }
}

```

```JS
//To view only one document in an collection 
const findOne={"Name":'user2',"Age":32} 
const dbName= db.collection(collectionName)
const documents=await collection.findOne(findOne)
```

### Updating Documents
You can update documents in a collection using the findOneAndUpdate method:

### findOneAndUpdate()
`=>`This method finds a single document that matches the specified filter criteria, applies the update operation to it, and returns the original document (or the modified document, depending on the options used).

`=>`It atomically finds and modifies the document, ensuring that only one document is updated.

### updateOne():
`=>`This method updates a single document that matches the specified filter criteria with the provided update operation.

`=>`It does not return the document by default. It only returns a result object indicating the number of matched documents and modified documents.

`<--->`In summary, findOneAndUpdate() is more suitable when you need to both find and update a document in one atomic operation, possibly returning the original or modified document, while updateOne() is used when you only need to update a single document without returning it.`<--->`

```JS
async function findOneUpdate(db, collectionName) {
    try {
        const collection = db.collection(collectionName);   
        const filter = {"Age": 32};
        const update = {$set: {"Name": "Naomi"}};
        const result = await collection.findOneAndUpdate(filter, update);
        console.log("Changed:", result);
    } catch (error) {
        console.log("Error in findOneUpdate:", error);
    }
}
```
### Deleting Documents
You can delete documents from a collection using the deleteOne or deleteMany methods:

``` JS

async function deleteData(db, collectionName) {
    try {
        const collection = db.collection(collectionName);   
        const filter = {"Age": 32};
        const result = await collection.deleteMany(filter);
        console.log("Deleted:", result.deletedCount, "documents");
    } catch (error) {
        console.log("Error in delete:", error);
    }
}
```