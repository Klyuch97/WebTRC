import { useState, type FC } from "react";

import { MicrophoneIcon } from "../../assets/icons/microphoneIcon";
import { VideoCameraIcon } from "../../assets/icons/video-camera";
import styles from "./VideoMediaControls.module.css";

interface VideoMediaControlsProps {
  className?: string;
}
export const VideoMediaControls: FC<VideoMediaControlsProps> = ({
  className,
}) => {
  const [micMuted, setMicMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);

  return (
    <div className={`${styles.videoControls} ${className}`}>
      <button
        type="button"
        className={`${styles.videoControlButton}${micMuted ? ` ${styles.videoControlButtonMuted}` : ""}`}
        onClick={() => setMicMuted((v) => !v)}
      >
        <MicrophoneIcon />
      </button>
      <button
        type="button"
        className={`${styles.videoControlButton}${cameraOff ? ` ${styles.videoControlButtonMuted}` : ""}`}
        onClick={() => setCameraOff((v) => !v)}
      >
        <VideoCameraIcon />
      </button>
    </div>
  );
};
