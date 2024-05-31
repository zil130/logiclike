import { FC } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  tags: string[];
  activeTag: string;
  handleActiveTag: (tag: string) => void;
}

const Sidebar: FC<SidebarProps> = ({
  tags,
  activeTag,
  handleActiveTag,
}) => {
  return (
    <ul className={styles.tagsList}>
      {tags.map((tag) =>
        <li key={tag}>
          <button
            className={tag === activeTag ? `${styles.btn} ${styles.active}` : styles.btn}
            onClick={() => handleActiveTag(tag)}
          >{tag}</button>
        </li>)}
    </ul>
  );
};

export default Sidebar;
