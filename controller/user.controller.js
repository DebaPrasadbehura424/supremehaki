import User from '../modal/user.modal.js';

import bycrypt from 'bcryptjs';

export const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashPassword = await bycrypt.hash(password, 10);

        const newUser = new User({ fullname: fullname, email: email, password: hashPassword });
        await newUser.save();
        res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const typeUser = await User.findOne({ email });
        const isMatched = await bycrypt.compare(password, typeUser.password);

        if (!typeUser || !isMatched) {
            res.status(400).json({ msg: "Data is not valid " })
        } else {
            res.status(200).json({
                msg: "Valid user", user: {
                    idx: typeUser.id,
                    fullname: typeUser.fullname,
                    email: typeUser.email
                }
            })

        }
    } catch (error) {
        res.status(400).json()
    }


}
