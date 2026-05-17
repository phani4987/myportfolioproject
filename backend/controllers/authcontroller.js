const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SUPERKEY = "thisissuperkey";
const middleware = require('../middleware/authmiddleware');

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, password, userType } = req.body;

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);
    const [existinguser]=await db.promise().query(
      "SELECT ID FROM users WHERE email=?",[email]
    );
    if(existinguser.length>0)
    {
      return res.status(409).json({error:"Email already exists"});
    }

    const sql = `
      INSERT INTO users
      (firstName, lastName, email, mobileNumber, password, userType)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.promise().query(sql, [
      firstName,
      lastName,
      email,
      mobileNumber,
      hashedPassword,
      userType
    ]);
     
    res.json({ message: "User added successfully", id: result.insertId });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.signin = async(req,res) =>
{
  try
  {
     const {email,password} = req.body;
     const [result] = await db.promise().query("SELECT * FROM users WHERE email=?",[email]);
     if(result.length==0)
     {
       return res.status(401).json({error : "Invalid email or password"});
     }
     const hashedPassword = result[0].password;
     const user = result[0];
     const passcheck= await bcrypt.compare(password,hashedPassword);
     if(!passcheck)
     {
      return res.status(401).json({error:"Invalid email or password"});
     }
     req.session.user = {
        id : user.id,
        email : user.email,
        userType :user.userType

     }
     
     res.json(
      {
        message:"Login successful",
        user: req.session.user
        
      }
      
      )
      
      application.get("")

     
  }
  
  catch(err)
  {
     console.error(err);
     res.status(500).json({error : "Database error"});
  }


}
 exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }

    res.clearCookie("usersession");

    res.json({ message: "Logged out successfully" });
  });
};

