import Search from "./shared/Search";

function Header({categories, setCategories, setSearchText}) {
    const handleActiveCategory = (id) => {
        const updatedCategories = categories.map((category) =>
            category.id === id  ? { ...category, status: !category.status } : { ...category, status: false }
        );
        setCategories(updatedCategories);
    }
    
    return (
        <header className="flex flex-col items-center justify-center w-full md:mt-8">
            <h1 className="text-[4rem] font-bold text-center py-8 " >SnapShot</h1>

            <Search setSearchText={setSearchText} handleActiveCategory={handleActiveCategory}/>
            <nav className="w-full  mt-8">
                <ul className="flex flex-col md:flex-row gap-4 justify-center font-medium flex-wrap text-center text-sm ">
                    {
                        categories.map((category) => (
                            <button 
                            key={category.id} 
                            className={`cursor-pointer p-[4px] md:w-26 rounded-sm bg-[#051c33] text-white hover:bg-[#0a3d62] ${category.status ? 'active': ''} transition-all duration-300 ease-in-out ` }
                            onClick={(e) => handleActiveCategory(category.id)}
                            >{category.name}</button>
                        ))
                    }
                </ul>
            </nav>

        </header>
    );
}
export default Header;