// Easiest Aggragation ever

use('aggregation');

// Match all greater than 100
// db.authors.aggregate([
//     // Stage 1:
//     {
//         $match:{
//             _id:{
//                 $gt:100
//             }
//         }
//     }
// ])




// Match greater than 100 including 100 as well
// db.authors.aggregate([
//     // Stage 1:
//     {
//         $match:{
//             _id:{
//                 $gte:100
//             }
//         }
//     }
// ])



// Match all docs where the _id should be greater or equal to 100 and the birth year is no more than 1899
db.authors.aggregate([
    // Stage 1;
    {
        $match: {
            $and:[
                {
                    _id:{ $gte:100 }
                },
                {
                    birth_year:{ $lt: 1900 }
                }
            ]
        }
    }
])












