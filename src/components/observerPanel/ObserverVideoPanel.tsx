import { VideoMediaControls } from "../VideoMediaControls/VideoMediaControls";
import styles from "./ObserverPanel.module.css";
import type { FC } from "react";

interface ObserverVideoPanelProps {
  isSessionActive: boolean;
}

export const ObserverVideoPanel: FC<ObserverVideoPanelProps> = ({
  isSessionActive,
}) => {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>Наблюдатель</h2>
      {isSessionActive ? (
        <video
          className={styles.videoPlaceholder}
          autoPlay
          muted
          playsInline
          controls
        />
      ) : (
        <div className={styles.videoPlaceholder} />
      )}
      <VideoMediaControls className={styles.videoControlsObserver} />
    </section>
  );
};
