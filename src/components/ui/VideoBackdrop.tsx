import React from 'react';

interface Props {
  image: string;
  overlay?: string;
  className?: string;
}

// Simulates a subtle looping "video" backdrop via a slow Ken Burns zoom + animated
// gradient mesh layered over a generated cinematic still.
const VideoBackdrop: React.FC<Props> = ({ image, overlay = 'from-[#05070f]/80 via-[#05070f]/70 to-[#05070f]/95', className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center mn-kenburns"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
      <div className="absolute inset-0 mn-mesh opacity-60" />
      <div className="absolute inset-0 mn-scan opacity-[0.08]" />
    </div>
  );
};

export default VideoBackdrop;
