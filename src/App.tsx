import { FC, useEffect, useState } from 'react';
import ICourse from './types/ICourse';
import Sidebar from './Sidebar/Sidebar';
import './App.scss';

const App: FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const tags = [...courses.reduce((acc, course) => {
    course.tags.forEach(tag => acc.add(tag));
    return acc;
  }, new Set<string>())];

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {courses.length > 0 &&
        <div className='App'>
          <Sidebar tags={tags} />
        </div>
      }
    </>
  );
};

export default App;
