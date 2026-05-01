import styles from "./VideoPanel.module.css";
import { VideoMediaControls } from "../VideoMediaControls/VideoMediaControls";
import type { FC } from "react";

interface HrAvatarVideoPanelProps {
  isSessionActive: boolean;
}

export const HrAvatarVideoPanel: FC<HrAvatarVideoPanelProps> = ({
  isSessionActive,
}) => {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>HR аватар</h2>
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
      <VideoMediaControls />
    </section>
  );
};
