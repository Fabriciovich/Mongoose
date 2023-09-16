import express, { json } from 'express';
import { conectarDB } from './db.js'; 
import { User } from "./models/user.js";
import { Person } from "./models/person.js";

const app = express();
const port = 4000;

app.use(json())

conectarDB();


app.post('/person', async (req, res) => {
  try {
      const person = new Person(req.body)
      await person.save()

      return res.json(person)
  } catch (error) {
      res.status(500).json('Internal server error')
      console.log(error)
  }

});

app.post('/register', async (req, res) => {
  try {
      const user = new User(req.body)
      await user.save()

      return res.json(user)
  } catch (error) {
      res.status(500).json('Internal server error')
  }

});

app.get('/users', async (_req, res) => {
  try {
      const users = await User.find().populate('personId', 'name');
      return res.json({ data: users });
  } catch (error) {
      res.status(422).json("Error")
  }
}); 
 

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});