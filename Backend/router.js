const router = require("express").Router();
const { route } = require("express/lib/application");
const controller = require("./Controller");
router.post("/markpresent",controller.markpresent)
router.post("/markabsent",controller.markabsent)
router.get("/get",controller.getdata)
router.get("/getall",controller.getalldata)

router.use("/*", (req, res) => {
  res.send("404 Not Found");
});


module.exports = router;