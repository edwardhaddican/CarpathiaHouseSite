const router = require("express").Router();
const { Member } = require("../db/models");

module.exports = router;

router.get("/", (req, res, next) => {
  Member.find().exec((err, membersFound) => {
    if (err) {
      next(err);
    }
    res.send(membersFound);
  });
});

router.get("/:memberId", (req, res, next) => {
  Member.findById(req.params.memberId).exec((err, membersFound) => {
    if (err) {
      next(err);
    }
    res.send(membersFound);
  });
});

router.post('/', (req, res, next)=>{
  Member.create(req.body, (err, newMember)=>{
    if (err) {
      next(err);
    }
    res.send(newMember);
  })
})
