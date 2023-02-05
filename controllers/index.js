import UserModal from "../modals/index.js"

export const getUsers = async (req, res) => {
    UserModal.find().then((allUsers) => {
        console.log(allUsers, "posts are there")
        res.status(200).json(allUsers)
    }).catch((err) => res.status(404).json({ message: err }))
}

export const setUser = async (req, res) => {
    const { name, phone, age } = req.body;
    console.log("createPosts", name, age, phone, req.body)
    try {
        if (!name || !age || !phone) {
            return res.status(422).json({ error: "plz fill all filed properly" })
        }
        UserModal.findOne({ phone: phone }).then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "message already exist" });
            }
            const user = new UserModal({ name, age, phone })
            user.save().then(() => {
                res.status(201).json({ message: 'Post created and store in database' })
            }).catch((err) => {
                res.status(500).json({ error: 'failed to creating post' })
            })
        }).catch(err => { console.log(err) })
    }
    catch (error) {
        console.log("error in server in create posts")
        res.status(410).json({ message: error.message })
    }
}