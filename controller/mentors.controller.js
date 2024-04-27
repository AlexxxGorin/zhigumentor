const db = require('../db')

class MentorsController {
    async createMentor(req, res) {
        const {name, surname, img, description, courses, menti, tags, properties} = req.body
        const newMentor = await db.query(`INSERT INTO mentors (name, surname, img, description, courses, menti, tags, properties) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name, surname, img, description, courses, menti, tags, properties])
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
        const {name, surname, img, description, courses, menti, tags, properties} = req.body
        const mentor = await db.query(`UPDATE mentors set name = $1, surname = $2, description = $3, courses = $4, menti = $5, tags = $6, properties = $7, img = $8 where id = $9  RETURNING *`, [name, surname, description, courses, menti, tags, properties, img, id])
        res.json(mentor.rows[0])
    }
    async deleteMentor(req, res) {
        const id = req.params.id
        const mentor = await db.query(`DELETE FROM mentors where id = $1`, [id])
        res.json(mentor.rows[0])
    }
}


module.exports = new MentorsController()