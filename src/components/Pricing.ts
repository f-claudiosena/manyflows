export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface PricingProps {
  plans: Plan[];
}
