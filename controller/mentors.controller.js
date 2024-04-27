const db = require('../db')

class MentorsController {
    async createMentor(req, res) {
        const {name, surname, description, courses, menti, properties} = req.body
        const newMentor = await db.query(`INSERT INTO mentors (name, surname, description, courses, menti, properties) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, surname, description, courses, menti, properties])
        res.json(newMentor.rows[0])
    }
    async getMentors(req, res) {
        const mentors = await db.query(`SELECT * FROM mentors`)
        res.json(mentors.rows)
    }
    async getOneMentor(req, res) {
        const id = req.params.id
        const mentor = await db.query(`SELECT * FROM mentors where id = $1`, [id])
        res.json(mentor.rows[0])
    }
    async updateMentor(req, res) {
        const id = req.params.id
        const {name, surname, description, courses, menti, properties} = req.body
        const mentor = await db.query(`UPDATE mentors set name = $1, surname = $2, description = $3, courses = $4, menti = $5, properties = $6 where id = $7 RETURNING *`, [name, surname, description, courses, menti, properties, id])
        res.json(mentor.rows[0])
    }
    async deleteMentor(req, res) {
        const id = req.params.id
        const mentor = await db.query(`DELETE FROM mentors where id = $1`, [id])
        res.json(mentor.rows[0])
    }
}


module.exports = new MentorsController()