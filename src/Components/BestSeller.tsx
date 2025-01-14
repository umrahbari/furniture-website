import React from 'react';

interface imagesurl {
  imageUrl: string;
}

const images: imagesurl[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/dg38njbya/image/upload/v1716823027/website%20assets/BEST%20SELLER/qd5srgdjsahvyju9spl0.webp",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dg38njbya/image/upload/v1716823027/website%20assets/BEST%20SELLER/r8mgrhvui6bmf6xrf5hf.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dg38njbya/image/upload/v1716823028/website%20assets/BEST%20SELLER/o2sgan30apseqplmu1ro.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dg38njbya/image/upload/v1716823027/website%20assets/BEST%20SELLER/g5p5qysi7wm4xcct4eb9.avif",
  },
];

function BestSeller() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="gap-4 md:gap-8 md:h-[60rem] flex flex-col md:flex-wrap justify-center items-center">
          <h1 className="text-2xl">Best Seller</h1>
          {images.map((service, index) => (
            <img key={index} className='w-[22rem]' src={service.imageUrl} alt={`Image ${index + 1}`} />
          ))}
          <a href="/service">
            <h1 className="text-2xl">Explore More...</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
