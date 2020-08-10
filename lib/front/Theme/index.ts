const common = {
  font: {
    size: {
      xs: '0.75rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '1.75rem'
    },
    family: 'Helvetica, Arial, sans-serif',
    lineSpacing: {}
  },
  border: {
    size: {},
    type: {},
    radius: {}
  },
  spacing: {
    sm: '0.25rem',
    md: '1.0rem',
    lg: '0.75rem'
  },
  color: {
    primary: '#02587C',
    secondary: '#5ABFAD',
    tertiary: '#388A96',
    background: '#FEFEFE',
    font: '#FEFEFE'
  }
};

export const theme = {
  base: {
    size: '16px'
  },
  color: common.color,
  font: {
    xs: '12px',
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '28px',
    family: common.font.family
  },
  spacing: common.spacing
};
