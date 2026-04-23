// import {Heart, ThumbsUp, Star} from "lucide-react";
// import React, { useState } from "react";

// function ReactionSystem() { 
//     const [likes, setLikes] = useState(false);
//     const [rating, setRating] = useState(0);

//     const toggleLike = () => {
//         setLikes(!likes);
//     };

//     const handleRating = (newRating) => {
//         setRating(newRating);
//     };

//     return (
//         <div>
//             <button onClick={toggleLike}>
//                 {likes ? <Heart fill="currentColor" /> : <Heart />}
//             </button>
//             <div>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                         key={star}
//                         fill={star <= rating ? "currentColor" : "none"}
//                         onClick={() => handleRating(star)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ReactionSystem;

import { Heart, ThumbsUp, Star } from "lucide-react";
import { useState } from "react";

const ReactionSystem = () => {
    const [liked, setLiked] = useState(false);
    const [rating, setRating] = useState(0);

    return (
        <div className="p-5 border rounded-lg">
            <h3>Interactive Feedback</h3>
            {/* Icon Toggle based on Boolean State */}
            <button onClick={() => setLiked(!liked)} style={{ border: 'none',
background: 'none' }}>
            <Heart
                size={48}
                color={liked ? "red" : "gray"}
                fill={liked ? "red" : "none"}
            />
        </button>
{/* Multi-State Icon Logic */ }
    <div className="mt-4">
        <p>Rate this session:</p>
        {[1, 2, 3, 4, 5].map((num) => (
            <Star
                key={num}
                size={32}
                onClick={() => setRating(num)}
                fill={num <= rating ? "gold" : "none"}
                color={num <= rating ? "gold" : "gray"}
                style={{ cursor: 'pointer' }}
/>
))}
    </div>
</div >
);
};

export default ReactionSystem;