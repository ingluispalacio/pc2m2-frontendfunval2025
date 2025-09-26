import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import ForkMeOnGithub from "./components/shared/ForkMeOnGithub";
import { getImages, searchImages } from './api/pexels/services';
const initCategories = [
  { id: 1, name: "Mountain", status: false },
  { id: 2, name: "Beaches", status: false },
  { id: 3, name: "Birds", status: false },
  { id: 4, name: "Food", status: false }
];

const LIMIT_PHOTOS = 24;

function App() {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState(initCategories);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  const handleSearchImages = async () => {
    setIsLoading(true);
    try {
      const category = categories.find(cat => cat.status === true);
      let photos = [];
      if (category) {
        const { data } = await searchImages(category.name, LIMIT_PHOTOS);
        setSelectedCategory(category.name);
        photos = data.photos;
      } else if (searchText.trim()) {
        const { data } = await searchImages(searchText, LIMIT_PHOTOS);
        setSelectedCategory(searchText);
        photos = data.photos;
      } else {
        const { data } = await getImages(LIMIT_PHOTOS);
        photos = data.photos;
      }
      setImages(photos);
    } catch (error) {
      console.error('Error fetching images:', error);
      setImages([]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    handleSearchImages();
  }, [categories, searchText]);

  return (
    <div className="flex flex-col items-center justify-center px-2.5 pt-13 gap-6">
      <Header categories={categories} setCategories={setCategories} setSearchText={setSearchText} />
      <Main images={images} selectedCategory={selectedCategory} loading={isLoading} error={isError} />
      <ForkMeOnGithub />
    </div>
  )
}

export default App
