import styles from "./VideoPanel.module.css";
import { VideoMediaControls } from "../VideoMediaControls/VideoMediaControls";
import type { FC } from "react";

interface CandidateVideoPanelProps {
  isSessionActive: boolean;
}

export const CandidateVideoPanel: FC<CandidateVideoPanelProps> = ({
  isSessionActive,
}) => {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>Кандидат</h2>
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
