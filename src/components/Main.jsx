import Galery from "./shared/Galery";
import Loading from "./shared/Loading";
import ErrorMessage from "./shared/ErrorMessage";

function Main({ images, selectedCategory, loading, error }) {

    return (
        <main className=" w-full flex flex-col justify-center items-center min-h-40 lg:min-h-70 lg:w-240">
            {loading && <Loading text="Loading..." />}

            {!loading && error && (
                <ErrorMessage message="No se pudieron cargar las imágenes. Intenta nuevamente." type="error" />
            )}

            {!loading && !error && (
                <>
                    <h2 className="text-[32px] mx-auto font-bold pt-9 pb-4 capitalize">
                        {selectedCategory ? `${selectedCategory} Pictures` : 'Random Pictures'}
                    </h2>
                    <Galery images={images} />
                </>
            )}
            
        </main>
    );
}
export default Main;