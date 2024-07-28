


use("aggregation");

// users whose hone number starts with +1 (940)

db.users.aggregate([
    {
        $match:{
            "company.phone": {
                $regex : /^\+1 \(940\)/
            }
        }
    },
    {
        $count: "usersWithThePhoneFormat"
    }
])






