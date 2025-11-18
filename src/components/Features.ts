export interface Feature {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export interface FeaturesProps {
  features: Feature[];
}
