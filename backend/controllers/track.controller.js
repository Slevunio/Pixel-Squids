const db = require("../models");
const Track = db.Track;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const track = {
        nem: req.body.name,
        blob: req.body.blob,
        notes: req.body.notes ? req.body.notes : null
    };

    // Save Tutorial in the database
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

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Track.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tracks."
            });
        });

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
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

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Track.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Track was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Track with id=${id}. Maybe Track was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Track with id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
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

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Track.destroy({
        where: {},
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
