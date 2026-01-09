import { ArtCard } from "./ArtCard";
import Masonry from "react-masonry-css";
import { FindLine } from "./FindLine";

const breakpointColumns = {
  default: 5,
  1100: 3,
  700: 2,
};

export function Feed({ items, searchQuery, setSearchQuery }) {
const filteredItems = items.filter((item) => {
    const content = `${item.image_name} ${item.description} ${item.author}`.toLowerCase();
    return content.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="p-4 mt-0 pt-0">
      {/* Передаем функцию изменения текста в компонент строки */}
      <FindLine onSearchChange={setSearchQuery} searchValue={searchQuery} />

      {filteredItems.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredItems.map((item) => (
            <ArtCard key={item.id} data={item} />
          ))}
        </Masonry>
      ) : (
        /* Заглушка, если ничего не нашли */
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            По запросу <span className="font-bold">"{searchQuery}"</span> ничего не найдено
          </p>
          <button 
            onClick={() => setSearchQuery("")}
            className="mt-4 text-red-500 font-medium hover:underline"
          >
            Сбросить поиск
          </button>
        </div>
      )}
    </div>
  );
}
