const {MongoClient}=require("mongodb")


const uri="mongodb://localhost:27017";

const newDb=new MongoClient(uri)

async function connect(){
    try {
        await newDb.connect()
        console.log('Connected to MongoDB');
        const db=newDb.db("StudentInfo")
        console.log("DB is created");
       
    const collectionName="Student-doc"
    const collection =await db.createCollection(collectionName)
    console.log(`${collection.collectionName} Collection is created in the ${db.databaseName}`);
} catch (error) {
    console.error("Error in connect",error)

}
}
connect()