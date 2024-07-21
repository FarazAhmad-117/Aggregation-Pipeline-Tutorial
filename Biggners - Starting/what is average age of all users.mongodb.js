

// So finding out the avarage age of all users;
use("aggregation");

// First way the Hitesh Way;



// db.users.aggregate([
//     {
//         $group: {
//             _id: null, // Grouping all people in just a single group
//             //  Accumulator means saying I want to create a new filed
//             averageAge: {
//                 $avg: "$age"
//             }
//         }
//     }
// ])


// Average age based on gender;


// db.users.aggregate([
//     {
//         $group: {
//             _id: "$gender",
//             averageAge: {
//                 $avg: "$age"
//             }
//         }
//     }
// ])



// How to get ages rounded off;
db.users.aggregate([
    {
        $group: {
            _id: "$gender",
            averageAge: {
                $avg: "$age"
            }
        }
    },
    {
        $project: {
            _id:1,
            averageAge: {
                $round: ["$averageAge", 2]
            }
        }
    }
])










