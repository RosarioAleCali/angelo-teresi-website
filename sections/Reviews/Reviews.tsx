"use client"

import Image from "next/image";
import Link from 'next/link';
import useSWR from 'swr';
import { useEffect } from 'react';
import Slider from "react-slick";
import useIsMobile from '@/hooks/useIsMobile';
import { ReviewType } from '@/types/review';
import { useReviews } from '@/context/reviewsContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fetcher = (url: string) => fetch(url).then(r => r.json())

const ReviewCard = ({ review }: { review: ReviewType }) => (
  <div className="max-w-md mx-4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <div className="flex justify-center md:justify-end -mt-16">
      <Image
        src={review?.authorAttribution?.photoUri}
        alt={review?.authorAttribution?.displayName}
        className="object-cover rounded-full border-2 border-tropical"
        width={80}
        height={80}
        priority
      />
    </div>
    <div>
      <h2 className="text-gray-800 text-xl font-semibold">{review?.authorAttribution?.displayName}</h2>
      <p className="mt-2 text-gray-700 h-64 overflow-y-auto">{review?.originalText?.text}</p>
    </div>
    <div className="flex justify-end mt-4">
      <div className="flex justify-center items-center">
        <div className="flex items-center mt-2 mb-4">
          {Array.from({ length: review?.rating || 0 }, (v, i) => (
            <svg
              key={i}
              className={`mx-1 w-4 h-4 fill-current ${i < review?.rating ? 'text-[#E9B32C]' : 'text-gray-400'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const { reviews, setReviews } = useReviews();
  const { data } = useSWR(
    reviews ? null : `https://places.googleapis.com/v1/places/${process.env.PLACE_ID}?fields=reviews&key=${process.env.GOOGLE_PLACES_API_KEY}`, 
    fetcher
  );

  const isMobile = useIsMobile();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  useEffect(() => {
    if (data && !reviews) {
      setReviews(data.reviews);
    }
  }, [data, reviews, setReviews]);

  return (
    <section id="reviews" className="flex flex-col w-full justify-center items-center bg-tiber">
      {reviews && reviews?.length > 0 && (
        <Slider className='w-11/12' {...settings}>
          {reviews.map((review: ReviewType) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </Slider>
      )}
      <div className="flex justify-center my-7">
        <Link
          href="https://maps.app.goo.gl/Wy4t5npXsJmcvK7T6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tropical text-lg text-white px-4 py-2 rounded flex justify-center items-center"
        >
          Lascia una recensione su
          <Image
            src="/google_logo.png"
            alt="Google Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
