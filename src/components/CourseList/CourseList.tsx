import { FC } from 'react';
import ICourse from '../../types/ICourse';
import CourseItem from '../CourseItem/CourseItem';
import styles from './CourseList.module.scss';

interface CourseListProps {
  courses: ICourse[];
}

const CourseList: FC<CourseListProps> = ({ courses }) => {
  return (
    <div className={styles.courses}>
      {courses.map((course) =>
        <CourseItem key={course.id} course={course} />)}
    </div>
  );
};

export default CourseList;
