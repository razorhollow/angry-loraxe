//review link: https://search.google.com/local/writereview?placeid=ChIJFzNu_kVr0IkRb4gHTkh1lv0
import { reviews } from "~/data/reviews";

import ReviewCard from "./ReviewCard";


export default function ReviewSection() {
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <div className=" py-12 bg-accent-100">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Community&apos;s Top-Rated Tree Experts
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    With the most 5-star reviews locally, we&apos;re proud to be the preferred partner for homeowners and businesses alike.
                </p>
        </div>
            <div className="flex justify-center overflow-hidden">
                <div className="animate-scroll-right flex justify-center hover:animation-paused">
                    {duplicatedReviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
} 