const { Op } = require("sequelize")
const db = require("../models")


class SessionController {

    static async addSession(req, res, next) {
        try {
            const { name, description, start, duration } = req.body
            const session = await db.sessions.create({
                name,
                description,
                start,
                duration,
                userId: req.user.id,
            })

            res.status(200).json({
                message: 'here your session data :',
                data: {
                    session
                }
            })
        } catch (err) {
            next(err);
        }
    }

    static async editSession(req, res, next) {
        try {
            const getSession = await db.sessions.findAll({
                where: {
                    id: req.query.id
                }
            })

            if (getSession.length === 0) {
                return res.status(404).send("Id not found")
            }
            // //** menginputkan data ke database */
            const updatedSession = await db.sessions.update(req.body, {
                where: {
                    id: req.query.id,
                }
            })
            if (updatedSession.length == 0) {
                res.send("There is no data updated")
            }
            else {
                const getDataUpdated = await db.sessions.findOne({
                    where: {
                        id: req.query.id
                    }
                })
                res.send(getDataUpdated)
            }
        } catch (err) {
            next(err);
        }
    }

    static async deleteSession(req, res, next) {
        try {
            const deleteSession = await db.sessions.destroy({
                where: {
                    id: req.query.id
                }
            })
            if (deleteSession) {
                res.status(200).json({
                    message: 'oke, its been deleted',
                    data: []
                })
            } else {
                res.send('data not found')
            }
        } catch (err) {
            next(err);
        }
    }

    static async getListSession(req, res, next) {
        try {
            const getListSession = await db.sessions.findAll({
                include: {
                    model: db.users,
                    attributes: ['name', 'email']
                }
            })

            res.status(200).json({
                message: 'All Sessions List :',
                data: {
                    getListSession
                }
            })
        } catch (err) {
            next(err);
        }
    }

    static async getSessionDetail(req, res, next) {
        try {
            const getSessionDetail = await db.sessions.findOne({
                where: {
                    id: req.query.q
                },
                include: {
                    model: db.users,
                    attributes: ['name', 'email']
                }
            })
            if (getSessionDetail) {
                res.status(200).send(getSessionDetail)
            } else {
                res.status(404).send('data not found')
            }
        } catch (err) {
            next(err);
        }
    }

}


module.exports = SessionController;