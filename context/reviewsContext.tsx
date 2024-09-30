"use client"

import { createContext, useContext, useState, ReactNode } from 'react';
import { ReviewType } from '@/types/review';

interface ReviewsContextType {
  reviews: ReviewType[] | null;
  setReviews: (reviews: ReviewType[]) => void;
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

export const ReviewsProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<ReviewType[] | null>(null);

  return (
    <ReviewsContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error('useReviews must be used within a ReviewsProvider');
  }
  return context;
};
