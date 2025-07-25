
import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  padding?: string;
  border?: string;
  icon?: React.ReactNode;
  fontSize?: string;
  fontWeight?: number | string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  backgroundColor = '#003A6D',
  textColor = '#fff',
  borderRadius = '8px',
  padding = '10px 20px',
  border = 'none',
  icon,
  fontSize = '14px',
  fontWeight = 500,
  disabled = false,
}) => {
  return (
    <MuiButton
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      variant='contained'
      disableElevation
      sx={{
        backgroundColor,
        color: textColor,
        borderRadius,
        padding,
        border,
        textTransform: 'none',
        fontWeight,
        fontSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        '&:hover': {
          opacity: 0.9,
          backgroundColor,
        },
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
    </MuiButton>
  );
};

export default Button;
