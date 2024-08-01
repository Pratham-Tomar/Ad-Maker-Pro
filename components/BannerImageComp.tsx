import React, { useState, useEffect } from 'react';
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
  const [styles, setStyles] = useState({
    textOverlay: {},
    ctaButton: {},
    editButton: {},
  });

  const updateStyles = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setStyles({
        textOverlay: {
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: 'black',
          padding: '5px',
          borderRadius: '8px',
          fontSize: '0.875rem',
          fontWeight: 'bold',
          display: 'flex' as 'flex',
          flexDirection: 'column' as 'column',
          alignItems: 'flex-start' as 'flex-start',
          justifyContent: 'center' as 'center',
        },
        ctaButton: {
          padding: '3px 6px',
          fontSize: '0.6rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: '2px solid white',
          borderRadius: '5px',
          cursor: 'pointer',
          textAlign: 'center' as 'center',
          display: 'inline-block' as 'inline-block',
        },
        editButton: {
          position: 'absolute',
          top: '3px',
          right: '3px',
          backgroundColor: '#ffffff',
          border: '2px solid #28a745',
          borderRadius: '50%',
          padding: '3px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          color: '#28a745',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
          display: 'flex' as 'flex',
          alignItems: 'center' as 'center',
          justifyContent: 'center' as 'center',
        },
      });
    } else if (width <= 768) {
      setStyles({
        textOverlay: {
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: 'black',
          padding: '10px',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 'bold',
          display: 'flex' as 'flex',
          flexDirection: 'column' as 'column',
          alignItems: 'flex-start' as 'flex-start',
          justifyContent: 'center' as 'center',
        },
        ctaButton: {
          padding: '5px 10px',
          fontSize: '0.8rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: '2px solid white',
          borderRadius: '5px',
          cursor: 'pointer',
          textAlign: 'center' as 'center',
          display: 'inline-block' as 'inline-block',
        },
        editButton: {
          position: 'absolute',
          top: '5px',
          right: '5px',
          backgroundColor: '#ffffff',
          border: '2px solid #28a745',
          borderRadius: '50%',
          padding: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
          color: '#28a745',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
          display: 'flex' as 'flex',
          alignItems: 'center' as 'center',
          justifyContent: 'center' as 'center',
        },
      });
    } else {
      setStyles({
        textOverlay: {
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: 'black',
          padding: '20px',
          borderRadius: '8px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          display: 'flex' as 'flex',
          flexDirection: 'column' as 'column',
          alignItems: 'flex-start' as 'flex-start',
          justifyContent: 'center' as 'center',
        },
        ctaButton: {
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: '2px solid white',
          borderRadius: '5px',
          cursor: 'pointer',
          textAlign: 'center' as 'center',
          display: 'inline-block' as 'inline-block',
        },
        editButton: {
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
          display: 'flex' as 'flex',
          alignItems: 'center' as 'center',
          justifyContent: 'center' as 'center',
        },
      });
    }
  };

  useEffect(() => {
    updateStyles();
    window.addEventListener('resize', updateStyles);
    return () => window.removeEventListener('resize', updateStyles);
  }, []);

  const containerStyle: React.CSSProperties = {
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
    justifyContent: 'center',
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <Image
        src={image}
        alt="External Image"
        unoptimized
        width={650}
        height={400}
        style={imageStyle}
      />
      <div style={styles.textOverlay as React.CSSProperties}>
        <h2 style={{ margin: '0 0 10px 0' }}>{title}</h2>
        <p style={{ margin: '0 0 10px 0' }}>{description}</p>
        <button onClick={onEdit} style={styles.ctaButton as React.CSSProperties}>
          {cta}
        </button>
      </div>
      <button
        style={styles.editButton as React.CSSProperties}
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
