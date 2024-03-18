# Mongoose
Mongoose is an elegant MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straightforward schema-based solution to model your application data.

## Installation
```
npm i mongoose
```

# Schemas

## Subject Schema
The Subject schema defines the structure of documents representing subjects in the MongoDB collection.

 **Fields**:
  - **name**: Name of the subject.
    - Type: String
    - Required: Yes
    - Maximum Length: 50 characters
  - **id**: Identifier of the subject.
    - Type: String
    - Required: Yes

```javascript
const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50 
    },
    id: {
        type: String,
        required: true
    }
});
```

## Class Schema
The Class schema defines the structure of documents representing classes in the MongoDB collection.

**Fields**:
- **standard**: Standard or grade level of the class.

    - **Type**: Number
    - **Required**: Yes
- **section**: Section or division of the class.
    - **Type**: String
    - **Required**: Yes
    - **Maximum Length**: 1 character

```JS
const classSchema = new mongoose.Schema({
    standard: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true,
        maxLength: 1
    }
});
```

## Student Schema

The Student schema defines the structure of documents representing students in the MongoDB collection.

**Fields**:
  - **name**: Name of the student.
    - Type: String
    - Required: Yes
    - Maximum Length: 50 characters
  - **dob**: Date of birth of the student.
    - Type: Date
    - Required: Yes
  - **email**: Email address of the student.
    - Type: String
    - Required: Yes
    - Maximum Length: 100 characters
  - **subjects**: Array of ObjectIds referencing Subject documents.
    - Type: Array of ObjectId
    - Ref: 'Subject'
  - **class**: ObjectId referencing a Class document.
    - Type: ObjectId
    - Ref: 'Class'
  - **age**: Age of the student.
    - Type: Number

```javascript
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50 
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        maxLength: 100, 
    },
    // refernce id
    // If user enter wrong ID that not present in the collection it throws error
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }, 
    age: { type: Number }
});
```

## Pre-Save Hook

A pre-save hook is implemented in the Student schema to calculate the age of the student based on the date of birth.

```javascript
// this before saving in DB , so we use "save" keyword
studentSchema.pre('save', function(next) {
    const today = new Date();
    const dob = this.dob;
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        this.age = age - 1;
    } else {
        this.age = age;
    }
    next();
});
```
# Mongoose Models Export

## Subject Model
The Subject model is created using the 'Subject' schema.

```javascript
// this value inside "double quotation" will be collection name , Inside this collection only documents are saved.

const Subject = mongoose.model('Subject', subjectSchema);
const Class = mongoose.model('Class', classSchema);
const Info = mongoose.model('StudentInformation', studentSchema);

//Exporting the collection name as shortform this name only used in import file .

module.exports = {
    Subject,
    Class,
    Info
};
```

# Student Information Management System API

This Markdown document provides an overview of the Student Information Management System API implemented using Express.js and Mongoose.

## Setup
```JS
1.Import express and momgoose
// This modules are schemas that we exported in schema.js
2.Import the modules 
```

## DataBase

In mongoose you can directly connect to the database that you to store your data.

```JS
mongoose.connect("mongodb://localhost:27017/StudentInfo")

// In mongoDB we connect the uri("mongodb://localhost") , and we create new DB using .db() .createCollection() we create collection in this that DB

const uri="mongodb://localhost:27017";

const newDb=new MongoClient(uri)

async function connect()
        await newDb.connect()
        console.log('Connected to MongoDB');
        const db=newDb.db("SampleDB")
        console.log("DB is created");
        const collectionName="Sample-Doc"
        const collection =await db.createCollection(collectionName)
```

# POST Method

### POST ('/subjects')

**1**-Using the importes schemas we add documents inside that collection.

**2**-.save(),saves the document in that collection. 
```JS

app.post("/subjects", async (req, res) => {
  try {

    const newSubject = new Subject(req.body);


    await newSubject.save();

    res.status(201).send("Subject created successfully");
  } catch (error) {
    console.error("Error creating subject:", error);
    res.status(500).send("Error creating subject");
  }
});
```

### POST ('/class')

```JS

app.post("/class", async (req, res) => {
    try {
   
      const newClass = new Class(req.body);
  
      
      await newClass.save();
  
      res.status(201).send("class created successfully");
    } catch (error) {
      console.error("Error creating subject:", error);
      res.status(500).send("Error creating subject");
    }
  });
```

### POST ('/user')

```JS
app.post("/user",async(req,res)=>{
    try {
        const newUser=new Info(req.body)
      //Checking whether email already exists or not using findOne method.
        const existingUser = await Info.findOne({ email: newUser.email });
        if (existingUser) {
            console.log("Email already exists");
            return res.status(400).send("Email already exists");
        }
        await newUser.save()
          
      res.status(201).send("Student created successfully");
    } catch (error) {
        res.status(404).send("Something wrong in the data")
        console.log("Error in user adding",error);
    }
})
```

