import { FC } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  tags: string[];
}

const Sidebar: FC<SidebarProps> = ({ tags }) => {
  return (
    <ul className={styles.tagsList}>
      <li>
        <button
          className={[styles.btn, styles.active].join(' ')}
        >Все темы</button>
      </li>
      {tags.map((tag) =>
        <li key={tag}>
          <button className={styles.btn}>{tag}</button>
        </li>)}
    </ul>
  );
};

export default Sidebar;
