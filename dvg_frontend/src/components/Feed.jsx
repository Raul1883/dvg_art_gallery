import { ArtCard } from "./ArtCard";
import Masonry from "react-masonry-css";


const breakpointColumns = {
  default: 5,
  1100: 3,
  700: 2,
};

export function Feed({ items }) {
  return (
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto -ml-4" // Tailwind классы для отступов
        columnClassName="pl-4 bg-clip-padding"
      >
        {items.map((item) => (
          <ArtCard key={item.id} data={item} />
        ))}
      </Masonry>
    </div>
  );
}
