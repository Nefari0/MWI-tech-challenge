
module.exports = {
    getContacts: async (req,res) => {
        // console.log('you hit get contacts end point')
        const db = req.app.get('db')
        const contacts = await db.get_contacts()
        return res.status(200).send(contacts)
    },

    newContact: async (req,res) => {
        const db = req.app.get('db')
        const { firstName,lastName,title,email,message } = req.body
        const contact = await db.add_new_contact([firstName,lastName,title,email,message])
        return res.status(200).send(contact)
    }
}