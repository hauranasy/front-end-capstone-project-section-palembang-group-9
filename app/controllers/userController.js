const User = require("../../src/db/models/user");
const bcrypt = require('bcrypt');
const { unsubscribe } = require("../routes/user");


exports.register = async (req, res) => {
    try {
      const { name, username, password } = req.body;

      const user = await User.create({ name, username, password });
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed!', error });
    }
  };

exports.login = async (req, res) => {

  try {
    const {username, password } = req.body;
     
    //cekusername
    const user = await User.findOne ({where: {username}});
    if(!user && password !== user.password){
        return res.status(401).json({ message: 'Username or Password is incorrect' });
      }
    
      //cekpassword
    // const passwordMatch = await bcrypt.compare(password, user.password);
    // if(!passwordMatch){
    //     return res.status(401).json({ message: 'password is incorrect' });
    //   }
    // if (password !== user.password) {
    //   return res.status(401).json({ message: 'Password is incorrect' });
    // }

      res.status(200).json({ message: 'Login successful', user });
    } catch (error){
      res.status(500).json({ message: 'Login failed!', error });
    }
  };

