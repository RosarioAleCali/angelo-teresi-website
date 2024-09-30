export type ReviewType = {
  name: string;
  authorAttribution: {
    displayName: string;
    photoUri: string;
  },
  originalText: {
    text: string;
  },
  rating: number;
};
