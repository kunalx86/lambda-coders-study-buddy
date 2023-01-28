const { Community } = require("../models/Community")
const Student = require("../models/Student");

// Coding
// Space
// Startups


exports.joinCommunity = (req, res) => {
    const { student } = req.body;
    const { interest } = req.body;
    try {
        Community.findOne({ tag: interest }).then((_comm) => {
            var members = _comm.members;
            members.push(student._id);
            _comm.members = members;
            Community.updateOne({ tage: interest }, _comm);

            return res.status(203).json({
                data: _comm
            })

        })


    } catch (err) {
        (err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        };
    }
}

exports.getAllCommunity = (req, res) => {
    try {
        Community.find().then((commns) => {
            return res.status(203).json({
                data: commns
            })
        })
    } catch (err) {
        (err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        };
    }
}