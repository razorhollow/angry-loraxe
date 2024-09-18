//review link: https://search.google.com/local/writereview?placeid=ChIJFzNu_kVr0IkRb4gHTkh1lv0
import { reviews } from "~/data/reviews";

import ReviewCard from "./ReviewCard";


export default function ReviewSection() {
    return (
        <div className="flex justify-center mb-12 bg-accent-100">
            {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
            ))}
        </div>
    );
} 