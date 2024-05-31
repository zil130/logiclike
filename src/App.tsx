import { FC, useEffect, useMemo, useState } from 'react';
import ICourse from './types/ICourse';
import Sidebar from './components/Sidebar/Sidebar';
import CourseList from './components/CourseList/CourseList';
import './App.scss';

const App: FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTag, setActiveTag] = useState<string>('Все темы');

  const fetchCourses = async () => {
    setIsLoading(true);
    setError('');
    try {
      const url = 'https://logiclike.com/docs/courses.json';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCourses(data);
    } catch (e) {
      setError((e as Error).message);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const tags = [
    'Все темы',
    ...Array.from(new Set(courses.flatMap(course => course.tags))),
  ];

  const filteredCourses = useMemo(() => {
    if (activeTag === 'Все темы') {
      return courses;
    }
    return courses.filter((course) => course.tags.includes(activeTag));
  }, [activeTag, courses]);

  const handleActiveTag = (tag: string) => {
    setActiveTag(tag);
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {courses.length > 0 &&
        <div className='App'>
          <Sidebar
            tags={tags}
            activeTag={activeTag}
            handleActiveTag={handleActiveTag}
          />
          <CourseList courses={filteredCourses} />
        </div>
      }
    </>
  );
};

export default App;
