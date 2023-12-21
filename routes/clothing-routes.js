const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router.get("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const data = await knex("man_shirt")
    .select('man_shirt.*')
    .where('man_shirt.product_id', '=', itemId);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
});
module.exports = router;
