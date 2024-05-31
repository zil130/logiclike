import { FC } from 'react';
import ICourse from '../types/ICourse';
import styles from './CourseItem.module.scss';

interface CourseItemProps {
  course: ICourse;
}

const CourseItem: FC<CourseItemProps> = ({ course }) => {
  return (
    <figure className={styles.course}>
      <div
        className={styles.bg}
        style={{
          backgroundColor: course.bgColor,
          backgroundImage: `url(${course.image})`,
        }}
      ></div>
      <figcaption className={styles.caption}>{course.name}</figcaption>
    </figure>
  );
};

export default CourseItem;
