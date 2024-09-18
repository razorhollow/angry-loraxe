import { StarIcon } from "@heroicons/react/24/solid";

import googleAssetUrl from "~/assets/google.png";

import Avatar from "./Avatar";

interface ReviewCardProps {
    review: {
        reviewerName: string;
        reviewContent: string;
    }
};




export default function ReviewCard({review }: ReviewCardProps) {
    console.log("HERES THE REVIEW: ",review);
    const nameArray = review.reviewerName.split(" ");
    const firstName = nameArray[0];
    const lastNameLetter = nameArray[1] ? nameArray[1].charAt(0) : '';

    return (
        <div className="rounded-xl min-w-72 p-6 bg-white mx-6 my-12 min-h-24 drop-shadow-lg">
            <div className="flex gap-2 mb-6">
                <Avatar name={firstName} />
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{firstName} {lastNameLetter}.</h3>
            </div>
            <p className="text-sm leading-5 text-gray-600" >&quot;{review.reviewContent}&quot;
            </p>
            <div className="mt-3">
                <div className="flex justify-between">
                    <div className="flex">
                        <StarIcon className="h-6 w-6 text-yellow-500" />
                        <StarIcon className="h-6 w-6 text-yellow-500" />
                        <StarIcon className="h-6 w-6 text-yellow-500" />
                        <StarIcon className="h-6 w-6 text-yellow-500" />
                        <StarIcon className="h-6 w-6 text-yellow-500" />
                    </div>
                    <img src={googleAssetUrl} alt="Google" className="h-6 w-auto" />
                </div>
            </div>
        </div>
    );
}