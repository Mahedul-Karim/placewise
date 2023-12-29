import React from "react";

type Props = {
  src: string;
  index: number;
  length: number;
  gallery: {
    id:string;
    tourName:string;
    url:string;
    publicId:string;
  }[];
};

const GalleryItem: React.FC<Props> = ({ src, index, length, gallery }) => {
  return (
    <>
      {index < length - 2 ? (
        <div className={`w-full h-full grid-item-${index + 1}`}>
          <img
            src={src}
            alt="tour img"
            className="block w-full h-full object-cover rounded-2xl"
          />
        </div>
      ) : (
        <>
          {index + 1 === 5 && (
            <div className={`grid-item-${index + 1} `}>
              {gallery.slice(-2).map((it, i) => (
                <div className="w-full h-full" key={i}>
                  <img
                    src={it.url}
                    alt="tour img"
                    className="block w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default GalleryItem;
