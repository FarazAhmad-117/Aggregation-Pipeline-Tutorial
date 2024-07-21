

// So here is what I am supposed to do find top five fruits liked by out users

// My Way:

use("aggregation");


db.users.aggregate([
    {
        $group: {
            _id: "$favoriteFruit",
            count:{$sum:1} // Adding 1 for each entry
        }
    }
])





