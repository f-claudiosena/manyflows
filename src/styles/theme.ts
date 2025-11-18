// Theme configuration for the application
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
  };
  fonts: {
    primary: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#25C8A6',
    secondary: '#8970E9',
    accent: '#E98B3E',
    muted: '#6B7280',
  },
  fonts: {
    primary: 'Inter, sans-serif',
  },
  breakpoints: {
    mobile: '900px',
    tablet: '768px',
    desktop: '1200px',
  },
};
