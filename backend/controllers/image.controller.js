const db = require("../models");
const Image = db.Image;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.file.buffer) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if (!req.body.objectId) {
        res.status(400).send({
            message: "Shop item id can not be empty!"
        });
        return;
    }

    const image = {
        ShopItemId: req.body.objectId,
        image: req.file.buffer,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    Image.create(image)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while saving the image."
            });
        });
};

exports.findAllByObjectId = (req, res) => {
    Image.findAll({
        where: { objectId: req.params.objectId.toUpperCase() }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving images."
        });
    });

};


exports.deleteAllByObjectId = (req, res) => {

    Image.destroy({
        where: { objectId: req.params.objectId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Image was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Image!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Image"
            });
        });
};
