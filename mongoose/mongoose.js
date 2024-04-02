const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const { Subject, Class, Info } = require("./schema");
require('dotenv').config();

const app = express();

mongoose.connect("mongodb://localhost:27017/StudentInfo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use(cors());

app.use(express.json());


app.post("/subjects", async (req, res) => {
  try {

    const newSubject = new Subject(req.body);

    const existingClass = (await Subject.findOne({ name: newSubject.name, id: newSubject.id }))
    if (existingClass) {
      return res.status(200 ).send("Subject already exists");
    }
    else {
      await newSubject.save();
      return res.status(201).send("Subject created successfully");
    }
  } catch (error) {
    console.error("Error creating subject:", error);
    return res.status(500).send("Error creating subject");
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

app.get("/users", async (req, res) => {
  try {
    const users = await Info.find()
    res.json(users)

  } catch (error) {
    console.log("Error from getting all users ", error);
    res.status(500).send("Error from getting users")
  }
})

app.post("/class", async (req, res) => {
  try {

    const newClass = new Class(req.body);

    const existingClass = (await Class.findOne({ standard: newClass.standard, section: newClass.section }))
    if (existingClass) {
      res.send("Class available already")
    }
    else {
      res.status(201).send("class created successfully");
      return await newClass.save();
    }


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

app.post("/user", async (req, res) => {
  try {
    const newUser = new Info(req.body)

    const existingUser = await Info.findOne({ email: newUser.email });
    if (existingUser) {
      console.log("Email already exists");
      return res.status(400).send("Email already exists");
    }
    await newUser.save()

    res.status(201).send("Student created successfully");
  } catch (error) {
    res.status(404).send("Something wrong in the data")
    console.log("Error in user adding", error);
  }
})

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
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
    console.log("Error in user adding", error);
  }
})

app.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params
    const update = req.body
    const updatedUser = await Info.findByIdAndUpdate(id, update, { new: true })
    if (updatedUser) {
      console.log("User updated :", updatedUser);
      return res.status(200).json(updatedUser)
    }
    else {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error, "From updateuser through id");
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

app.get('/class/:id', async (req, res) => {
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

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Info.findByIdAndDelete(id);

    if (deletedUser) {
      console.log("User deleted:", deletedUser);
      res.status(200).send("User deleted successfully");
    } else {
      console.log("User not found");
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error in delete user");
  }
});
app.delete('/subject/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSubject = await Subject.findOneAndDelete({ $or:[ {"id": id },{ "name": id }]});
    if (deleteSubject) {
      console.log("Subject deleted:" ,deleteSubject);
      return res.status(200).send("Subject deleted:" + deleteSubject.name)
    }
    else {
      console.log("subject not found");
      return res.status(404).send("subject not found"+deleteSubject.id);
    }

  } catch (error) {
    console.log("Error in Subject deleted", error);
    return res.status(500).send("Error in deleting subject")
  }
})








const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  sec: String,
  std: String
});

const Agent = mongoose.model('Agent', userSchema);

app.use(express.json());

app.post('/agent', async (req, res) => {
  try {
    console.log("posting.....");
    const newAgent = new Agent({
      name: req.body.name,
      email: req.body.email,
      sec: req.body.sec,
      std: req.body.std
    });

    await newAgent.save();

    res.status(201).json({ message: 'User created successfully', Agent: newAgent });
  } catch (error) {
    console.error('Error in creating user:', error);
    res.status(500).json({ message: 'Internal server err' });
  }
});

app.get('/agents', async (req, res) => {
    try {
      const Agents = await Agent.find();

      res.status(200).json(Agents);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ message: 'Internal server err' });
    }
  });

app.delete('/agent/:username', async (req, res) => {
    const Agentname = req.params.username;
    console.log(Agentname);
    try {
      const deletedUser = await Agent.findOneAndDelete({ name: Agentname });

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully', Agent: deletedUser });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server err' });
    }
  });

app.put('/agent/:username', async (req, res) => {
  const Agentname = req.params.username;

  try {
    let updatedAgent = await Agent.findOne({ name: Agentname });

    if (!updatedAgent) {
      updatedAgent = new Agent({
        ...req.body,
      });

      await updatedAgent.save();

      res.status(201).json({ message: 'Agent created successfully',Agent: updatedAgent });
    } else {
      updatedAgent.set(req.body);
      await updatedAgent.save();

      res.status(200).json({ message: 'Agent updated successfully', Agent: updatedAgent });
    }
  } catch (error) {
    console.error('Error updating/creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.patch('/agent/:username', async (req, res) => {
  const Agentname = req.params.username;

  try {
    const updatedAgent = await Agent.findOneAndUpdate({ name: Agentname }, req.body, { new: true });

    if (!updatedAgent) {
      return res.status(404).json({ message: 'agent not found' });
    }

    res.status(200).json({ message: 'agent updated successfully', Agent: updatedAgent });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
  








app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
