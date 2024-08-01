import React from 'react';
import Image from 'next/image';

type BannerProps = {
  title: string;
  description: string;
  cta: string;
  image: any;
  background: string;
  onEdit: () => void;
};

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div 
      style={{
        background, 
        padding: '20px', 
        margin: '10px', 
        borderRadius: '8px', 
        position: 'relative', 
        overflow: 'hidden',
        maxWidth: '100%',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        src={image}
        alt="External Image"
        unoptimized
        width={650}
        height={400}
        style={{
          maxWidth: '100%',
          height: 'auto',
          margin: '0 auto'
        }}
      />
      <div 
        style={{
          position: 'absolute', 
          top: '50%', 
          left: '20px', 
          transform: 'translateY(-50%)', 
          color: 'black', 
          padding: '20px', 
          borderRadius: '8px',
          fontSize: '1.5rem',
          fontWeight: 'bold', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          justifyContent: 'center',
          '@media (max-width: 768px)': {
            position: 'relative',
            top: 0,
            left: 0,
            transform: 'none',
            padding: '10px'
          },
          '@media (max-width: 480px)': {
            padding: '5px'
          }
        }}
      >
        <h2 style={{ margin: '0 0 10px 0' }}>{title}</h2>
        <p style={{ margin: '0 0 10px 0' }}>{description}</p>
        <button 
          onClick={onEdit} 
          style={{
            padding: '10px 20px', 
            fontSize: '1rem', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: '2px solid white', 
            borderRadius: '5px', 
            cursor: 'pointer',
            textAlign: 'center',
            display: 'inline-block',
            '@media (max-width: 768px)': {
              padding: '5px 10px',
              fontSize: '0.8rem'
            },
            '@media (max-width: 480px)': {
              padding: '3px 6px',
              fontSize: '0.6rem'
            }
          }}
        >
          {cta}
        </button>
      </div>
      <button 
        style={{
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          backgroundColor: '#ffffff', 
          border: '2px solid #28a745', 
          borderRadius: '50%', 
          padding: '10px', 
          cursor: 'pointer',
          fontSize: '1.2rem', 
          color: '#28a745', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '@media(max-width: 768px)': {
            top: '5px',
            right: '5px',
            padding: '5px',
            fontSize: '1rem'
          },
          '@media (max-width: 480px)': {
            top: '3px',
            right: '3px',
            padding: '3px',
            fontSize: '0.8rem'
          }
        }} 
        onClick={onEdit}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#28a745'; 
          e.currentTarget.style.color = '#ffffff'; 
          e.currentTarget.style.transform = 'scale(1.1)'; 
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff'; 
          e.currentTarget.style.color = '#28a745'; 
          e.currentTarget.style.transform = 'scale(1)'; 
        }}
      >
        ✏️
      </button>
    </div>
  );
};

export default BannerImageComp;