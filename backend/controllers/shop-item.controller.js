const db = require("../models");
const ShopItem = db.ShopItem;
const Image = db.Image;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Shop item name can not be empty!"
        });
        return;
    }

    const shopItem = {
        name: req.body.name,
        description: req.body.description,
        prize: req.body.prize,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };


    ShopItem.create(shopItem)
        .then(data => {
            const shopItemId = data.id;
            const images = req.files.map(file => ({ ShopItemId: shopItemId, image: file.buffer }));
            const promises = images.map(image => Image.create(image));

            return Promise.all(promises).then(imagesCreated => {
                const shopItemCreated = {
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    prize: data.prize,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                    Image: imagesCreated
                }
                res.send(shopItemCreated);
            });

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the ShopItem."
            });
        });
};

exports.findAll = (req, res) => {
    ShopItem.findAll({ include: ['Image'] }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving shop items."
        });
    });

};

exports.findOneById = (req, res) => {
    const id = req.params.id;

    ShopItem.findByPk(id, { include: ['Image'] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving shop item with id: " + id
            });
        });
};

exports.deleteById = (req, res) => {
    const id = req.params.id;

    ShopItem.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shop item was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete shop item with id: ${id}. Maybe shop item was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete shop item with id: " + id
            });
        });
};

exports.deleteSelected = (req, res) => {

    ShopItem.destroy({
        where: { id: [...req.query.ids] },
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} shop items were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting shop items."
            });
        });
};
