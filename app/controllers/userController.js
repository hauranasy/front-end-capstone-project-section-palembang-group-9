const User = require("../../src/db/models/user");

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
     

    const user = await User.findOne ({where: {username}});
  
    if(!user) return res.status(401).json({message:'username is incorrect'})
    if(password !== user.password)return res.status(401).json({message:'password incorrect'})


      res.status(200).json({ message: 'Login successful', user });
    } catch (error){
      res.status(500).json({ message: 'Login failed!', error });
    }
  };

