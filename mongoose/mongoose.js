const express = require("express");
const mongoose = require("mongoose");
const { Subject, Class, Info } = require("./schema");


const app = express();

mongoose.connect("mongodb://localhost:27017/StudentInfo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());


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

app.get("/subjects", async (req, res) => {
  try {

    const subjects = await Subject.find();

    res.json(subjects);
  } catch (error) {
    console.error("Error getting subjects:", error);
    res.status(500).send("Error getting subjects");
  }
});

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

  app.get("/class", async (req, res) => {
    try {

      const classes = await Class.find();
  
      res.json(classes);
    } catch (error) {
      console.error("Error getting subjects:", error);
      res.status(500).send("Error getting subjects");
    }
  });

app.post("/user",async(req,res)=>{
    try {
        const newUser=new Info(req.body)
      
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

app.get("/user/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const query = {
            $or: [
                { _id: id },
                { name: id },
                { email: id },
                { dob: id },

            ]
        };
        const existingUser = await Info.find(query);
        if (existingUser) {
            console.log(existingUser)
            return res.json(existingUser); 
        }
        else {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log("Error in user adding",error);
    }
})

app.put('/update/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const update=req.body
        const updatedUser=await Info.findByIdAndUpdate(id,update,{new:true})
        if(updatedUser){
            console.log("User updated :",updatedUser);
            return res.status(200).json(updatedUser)
        }
        else {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error,"From updateuser through id");
    }
})

app.get('/subjects/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const subject = await Subject.findById(id);
      if (!subject) {
        return res.status(404).json({ error: 'Subject not found' });
      }
      res.json(subject);
    } catch (error) {
      console.error('Error finding subject by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/classes/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const standardSection = await Class.findById(id);
      if (!standardSection) {
        return res.status(404).json({ error: 'Subject not found' });
      }
      res.json(standardSection);
    } catch (error) {
      console.error('Error finding subject by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  app.get("/view/:collectionName", async (req, res) => {
    try {
        const { collectionName } = req.params;

        let result;
        switch (collectionName) {
            case "Info":
                result = await Info.find();
                break;
            case "Subject":
                result = await Subject.find();
                break;
            case "Class":
                result = await Class.find();
                break;
            default:
                return res.status(400).json("Invalid collection name");
                
        }

        if (result.length > 0) {
            console.log(`${collectionName} found:`, result);
            return res.status(200).json(result);
        } else {
            console.log(`${collectionName} not found`);
            return res.status(404).json(`${collectionName} not found`);
        }
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json("Internal Server Error");
    }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
