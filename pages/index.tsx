import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';



const Home: React.FC = () => {
  const [banners, setBanners] = useState<any[]>([]);
  const [selectedBanner, setSelectedBanner] = useState<any | null>(null);

  React.useEffect(() => {
    const fetchBanners = async () => {
      const res = await fetch('/banners.json');
      const data = await res.json();
      setBanners(data);
    };
    fetchBanners();
  }, []);

  const handleEdit = (banner: any) => {
    setSelectedBanner(banner);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners((prevBanners) =>
      prevBanners.map((banner) => (banner.id === updatedBanner.id ? updatedBanner : banner))
    );
  };

  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' ,backgroundColor: '#004687', color:'white',margin:0, padding:0}}>Ad Banners</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#AFDBF5' }}>
        {banners.map((banner) => (
          <BannerImageComp
            key={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
            onEdit={() => handleEdit(banner)}
          />
        ))}
      </div>
      {selectedBanner && (
        <EditBannerTemplateBs
          banner={selectedBanner}
          onSave={handleSave}
          onClose={() => setSelectedBanner(null)}
        />
      )}
    </div>
  );
};

export default Home;
