import toast from "react-hot-toast";
import copy from "copy-to-clipboard";

import styles from "./blockWithLink.module.css";
import { CopyIcon } from "../../assets/icons/copyIcon";

const DEFAULT_JOIN_URL =
  "https://nullxesjobaitest.vercel.app/?jobAiId=22&entry=candidate";

type BlockWithLinkProps = {
  url?: string;
  active?: boolean;
};

export const BlockWithLink = ({
  url = DEFAULT_JOIN_URL,
  active = true,
}: BlockWithLinkProps) => {
  const handleCopy = () => {
    const ok = copy(url);
    if (ok) {
      toast.success("Ссылка скопирована");
    } else {
      toast.error("Не удалось скопировать");
    }
  };

  const rootClass = `${styles.blockWithLink}${active ? "" : ` ${styles.blockWithLinkInactive}`}`;

  return (
    <div className={rootClass}>
      <div className={styles.linkInset}>
        <span className={styles.url} title={url}>
          {url}
        </span>
        <button type="button" className={styles.copyBtn} onClick={handleCopy}>
          <CopyIcon />
        </button>
      </div>
    </div>
  );
};
