const db = require("../models");
const Track = db.Track;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.instrumentType) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const track = {
        name: req.body.name,
        soundtrack: req.file.buffer,
        // notes: req.body.notes ? req.body.notes : null,
        instrumentType: req.body.instrumentType,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    Track.create(track)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Track."
            });
        });
};

exports.findByInstrumentType = (req, res) => {
    Track.findAll({
        where: { instrumentType: req.params.instrumentType.toUpperCase() }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tracks."
        });
    });

};

exports.findAll = (req, res) => {
    Track.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tracks."
        });
    });

};

exports.findOneById = (req, res) => {
    const id = req.params.id;

    Track.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Track with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const track = req.body;
    track.updatedAt = Date.now();

    Track.update(track, {
        where: { id: track.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Track was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Track with id=${track.id}. Maybe Track was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Track with id=" + id
            });
        });
};

exports.deleteById = (req, res) => {
    const id = req.params.id;

    Track.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Track was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Track with id=${id}. Maybe Track was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Track with id=" + id
            });
        });
};

exports.deleteSelected = (req, res) => {

    Track.destroy({
        where: { id: [...req.query.ids] },
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tracks were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tracks."
            });
        });
};
