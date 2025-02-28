import { useEffect, useState } from "react";

interface ChangeImageFuncProps {
  pictures: string[];
  className?: string;
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
