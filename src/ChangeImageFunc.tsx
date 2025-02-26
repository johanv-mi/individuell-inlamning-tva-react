import { useEffect, useState } from "react";

interface ChangeImageFuncProps {
  pictures: string[];
  className?: string;
}

interface ChangeHeroFuncProps {
  pictures: string[];
  className?: string;
  titles: string[];
  synopses: string[];
  ratings: string[];
}

export default function ChangeImageFunc({
  pictures,
  className,
}: ChangeImageFuncProps) {
  const [pictureIdx, setPictureIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      changePicture();
    }, 4000);

    return () => clearInterval(interval);
  });

  const changePicture = () => {
    setPictureIdx((prevIdx) => {
      return (prevIdx + 1) % pictures.length;
    });
  };

  return (
    <div className={className}>
      <img src={pictures[pictureIdx]} />
    </div>
  );
}

export function ChangeHeroFunc({
  pictures,
  className,
  titles,
  synopses,
  ratings,
}: ChangeHeroFuncProps) {
  const [pictureIdx, setPictureIdx] = useState(0);
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      changePicture();
      changeText();
    }, 1000 * 10);

    return () => clearInterval(interval);
  });

  const changePicture = () => {
    setPictureIdx((prevIdx) => {
      return (prevIdx + 1) % pictures.length;
    });
  };

  const changeText = () => {
    setTextIdx((prevIdx) => {
      return (prevIdx + 1) % titles.length;
    });
  };

  const currentBackgroundImage = pictures[pictureIdx];

  return (
    <div className={className}>
      <div
        className='hero-image'
        style={{ backgroundImage: `url(${currentBackgroundImage})` }}
      ></div>
      <div className='content-container'>
        <h2>{titles[textIdx]}</h2>
        <div className='synopsis-container'>
          <p className='synopsis'>{synopses[textIdx]}</p>
        </div>
        {ratings && <div className='rating'>Rating: {ratings[textIdx]}</div>}
      </div>
    </div>
  );
}
