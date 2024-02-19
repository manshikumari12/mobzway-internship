const express = require("express")
const {UserModle} = require("../model/user.model")
userRouter = express.Router()
userRouter.get("/",async(req,res)=>{
   try {
    const users = await UserModle.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
})

userRouter.post("/userData", async (req, res) => {
    try {
        const { firstName, lastName, mobileNo, email, address, loginId, password } = req.body;

        // Mobile number validation (10 digits)
        if (!/^\d{10}$/.test(mobileNo)) {
            return res.status(400).json({ error: "Mobile number must be 10 digits." });
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: "Invalid email address." });
        }

        // Login ID validation (8 characters alphanumeric)
        if (!/^[a-zA-Z0-9]{8}$/.test(loginId)) {
            return res.status(400).json({ error: "Login ID must be 8 characters alphanumeric." });
        }

        // Password validation (6 characters, 1 upper case letter, 1 lower case letter, 1 special character)
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}/.test(password)) {
            return res.status(400).json({ error: "Password must be 6 characters with at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character." });
        }

          const newUser = new UserModle({
            firstName,
            lastName,
            mobileNo,
            email,
            address,
            loginId,
            password,
        });

      
        await newUser.save();


        res.status(201).json({ message: "User data saved successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error." });
    }
});


module.exports ={userRouter}