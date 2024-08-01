import React, { useState } from 'react';

type EditBannerProps = {
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
};

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [editedBanner, setEditedBanner] = useState(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedBanner((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedBanner((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditedBanner((prev) => ({ ...prev, image: value }));
  };

  const handleSave = () => {
    onSave(editedBanner);
    onClose();
  };

  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(255, 245, 238)',
        padding: '20px',
        border: '2px solid #007bff',
        borderRadius: '20px',
        boxShadow: '0 0 15px rgba(0,0,0,0.2)',
        zIndex: 1000,
        width: '90%',
        maxWidth: '500px',
        maxHeight: '700px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        borderColor: 'rgb(243, 58, 106)',
      }}
    >
      <h3 style={{ margin: '0 auto', textAlign: 'center' }}>Edit Banner</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label>Upload Image From Storage:</label>
            <input
              type="file"
              accept="image/jpeg, image/webp"
              onChange={handleImageChange}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label>Edit Image URL:</label>
            <input
              type="text"
              value={editedBanner.image}
              onChange={handleImageURLChange}
              placeholder="Enter image URL in jpg, webp format"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label>Edit Title:</label>
          <input
            name="title"
            value={editedBanner.title}
            onChange={handleChange}
            placeholder="Title"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label>Edit Description:</label>
          <textarea
            name="description"
            value={editedBanner.description}
            onChange={handleChange}
            placeholder="Description"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', resize: 'vertical' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label>Edit Button Name:</label>
          <input
            name="cta"
            value={editedBanner.cta}
            onChange={handleChange}
            placeholder="CTA"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={handleSave}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: '#28a745',
              color: 'white',
              border: '2px solid white',
              width: '100%',
              maxWidth: '100px',
              boxShadow: '0 7px 14px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxSizing: 'border-box',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'translateY(2px)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.3)';
            }}
          >
            Save
          </button>
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: '2px solid white',
              width: '100%',
              maxWidth: '100px',
              boxShadow: '0 7px 14px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxSizing: 'border-box',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'translateY(2px)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.3)';
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
