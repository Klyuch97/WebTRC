import { useState } from "react";

import { ObserverVideoPanel } from "../observerPanel/ObserverVideoPanel";
import { CandidateVideoPanel } from "../videoPanel/CandidateVideoPanel";
import { HrAvatarVideoPanel } from "../videoPanel/HrAvatarVideoPanel";
import styles from "./Page.module.css";
import logo from "../../assets/new-logo.png";
import { Button } from "../Button/Button";
import { BlockWithLink } from "../blockWithLink/blockWithLink";

export const Page = () => {
  const [isSessionActive, setIsSessionActive] = useState(false);

  const toggleSession = () => {
    setIsSessionActive((prev) => !prev);
  };

  return (
    <main className={styles.pageLayout}>
      <p className={styles.description}>Стенд WebRTS</p>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.content}>
        <div className={styles.contentCandidate}>
          <BlockWithLink active={isSessionActive} />
          <CandidateVideoPanel isSessionActive={isSessionActive} />
        </div>
        <HrAvatarVideoPanel isSessionActive={isSessionActive} />
        <ObserverVideoPanel isSessionActive={isSessionActive} />
      </div>
      <Button onClick={toggleSession}>
        {isSessionActive ? "Завершить" : "Начать"}
      </Button>
    </main>
  );
};
