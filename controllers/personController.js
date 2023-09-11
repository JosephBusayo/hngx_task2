import Person from '../models/person.js'

export const create_person = async(req, res) => {
    try {
        const { name } = req.body;
        const existingPerson = await Person.findOne({ name });
        if (existingPerson) {
            return res.status(400).json({ message: 'Person with the same name already exists', status: 400 });
        }

        const newPerson = new Person({ name });
        const payload = await newPerson.save()
        res.send({
            payload,
            message: 'Successfully created',
            status: 201
        })
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

export const get_all_persons = async (req, res) => {
    try {
        const persons = await Person.find().sort({ createdAt: -1 })
        res.send(persons)
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

export const get_one = async (req, res) => {
    const id = req.params.user_id
    const payload = await Person.findById(id)
    try {
        res.send({
            payload,
            message: 'Successfully retrieved',
            status: 200
        })
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

export const update_person = async (req, res) => {
    const id = req.params.user_id
    const updatePerson = { ...req.body };
    delete updatePerson._id;

    try {
        await Person.findByIdAndUpdate(id, updatePerson)
        res.send({
            message: 'Successfully updated',
            status: 200
        })
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

export const delete_person = async (req, res) => {
    const id = req.params.user_id
    try {
        await Person.findByIdAndDelete(id);
        res.send('Successfully deleted');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}