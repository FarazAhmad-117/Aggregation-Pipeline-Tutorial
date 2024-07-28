
use("aggregation");


// List all unique eye colors;


db.users.aggregate([
    {
        $group: {
            _id: "$eyeColor"
        }
    }
])




