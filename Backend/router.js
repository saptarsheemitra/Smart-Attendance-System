const router = require("express").Router();
const { route } = require("express/lib/application");
const controller = require("./Controller");

router.get("/*", (req, res) => {
  res.send("404 Not Found");
});

router.post("/markpresent",controller.markpresent)
router.post("/markabsent",controller.markabsent)
router.post("/get",controller.getdata)



module.exports = router;