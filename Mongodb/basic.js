const {MongoClient, Collection}=require("mongodb")

const uri="mongodb://localhost:27017";

const newDb=new MongoClient(uri)

async function connect(){
    try {
        await newDb.connect()
        console.log('Connected to MongoDB');
        const db=newDb.db("SampleDB")
        console.log("DB is created");
        const collectionName="Sample-Doc"
        const collection =await db.createCollection(collectionName)
        console.log(`${collection.collectionName} Collection is created in the ${db.databaseName}`);
       await addDocument(db,collectionName,collection)
    //    await viewData(collection)
    } catch (error) {
        console.error("Error in connect",error)
    }

}
async function addDocument(db,collectionName,collections){
    try {
        const collection = db.collection(collectionName);
        await collection.insertOne({"Name": "user2", "Age": 32});
        console.log(`User is added to "${collectionName}" collection in the "${db.databaseName}" database`);

        findOneUpdate(db,collectionName,collections)
    } catch (error) {
        console.log("Error in addDocument",error);
    }
}
async function viewData(collection){
    try {

        // To access only only 
        // const findOne={"Name":'user2',"Age":32}
        //To access DB only based on collection name -->
        // const dbName= db.collection(collectionName)

        const documents=await collection.find({}).toArray();
        console.log(documents);
        console.log("Data in our database");
        
     
    } catch (error) {
        console.log("Error in viewData",error);
    }
}
connect()

async function findOneUpdate(db, collectionName,collections) {
    try {
        const collection = db.collection(collectionName);   
        const filter = {"Age": 32};
        const update = {$set: {"Name": "Naomi"}};
        const result = await collection.findOneAndUpdate(filter, update);
        console.log("Changed:", result);
        // await viewData(collections)
       await  deleteData(db, collectionName,collections)
    } catch (error) {
        console.log("Error in findOneUpdate:", error);
    }
    // finally {
    //     // Call viewData with the collectionName
    //     await viewData(collections)
    // }
}
async function deleteData(db, collectionName,collections) {
    try {
        const collection = db.collection(collectionName);   
        const filter = {"Age": 32};
        // const update = {$set: {"Name": "Naomi"}};

        //To delete only one document from collection through "filter"
        // const result = await collection.deleteOne(filter);

        //To delete all document from collection through "filter"
        const result=await collection.deleteMany(filter)
        console.log("Deleted:", result);
        await viewData(collections)
    } catch (error) {
        console.log("Error in delete:", error);
    }
}

  