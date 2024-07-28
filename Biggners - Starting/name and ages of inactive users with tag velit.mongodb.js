

use("aggregation");

// Names and ages of the users who are inactive and have 'velit' as a tag?


db.users.aggregate([
    {
        $match:{
            $and:[
                {
                    isActive:false 
                },
                {
                    tags:{ $in: [ 'velit' ] }
                }
            ]
        }
    },
    {
        $project: {
            name:1,
            age:1
        }
    }
])




