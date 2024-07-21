

// So here is what I am supposed to do find top five fruits liked by out users

// My Way:

use("aggregation");

// Getting top 2 instead

db.users.aggregate([
    {
        $group: {
            _id: "$favoriteFruit",
            count: { $sum: 1 } // Adding 1 for each entry
        }
    },
    {
        $sort: {
            count: -1
        }
    },
    {
        $limit: 2
    }
])





