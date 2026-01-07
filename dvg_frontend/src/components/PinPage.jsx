import { useParams, Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Masonry from "react-masonry-css";

export function PinPage({ items }) {
  const { id } = useParams();
  const item = items.find((p) => p.id === id);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (!item) return <div className="p-10 text-center">Загрузка...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Кнопка назад */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center text-gray-600 hover:text-black transition-colors"
      >
        <span className="text-2xl mr-2">←</span>
        <span className="font-medium">Назад к ленте</span>
      </Link>

      <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* ЛЕВАЯ ЧАСТЬ: Арт с Lightbox-зумом */}
        <div className="md:w-3/5 bg-gray-100 flex items-center justify-center p-2">
          <PhotoProvider>
            <PhotoView src={`/content/${item.id}/${item.assets.main}`}>
              <img
                src={`/content/${item.id}/${item.assets.main}`}
                className="w-full h-auto rounded-2xl cursor-zoom-in hover:brightness-95 transition-all"
                alt={item.image_name}
              />
            </PhotoView>
          </PhotoProvider>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Информация */}
        <div className="md:w-2/5 p-8 md:p-12 flex flex-col h-full">
          <div className="flex items-center mb-8">
            <img
              src={`/content/${item.id}/${item.assets.avatar}`}
              className="w-14 h-14 rounded-full object-cover shadow-sm mr-4"
            />
            <div>
              <p className="text-sm text-gray-500">Автор</p>
              <h2 className="text-lg font-bold leading-tight">{item.author}</h2>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold mb-4 text-gray-900 leading-tight">
            {item.image_name || "Без названия"}
          </h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            {item.description}
          </p>

          <hr className="mb-8 border-gray-100" />

          <h3 className="font-bold mb-6 text-gray-800">Эстетика флешмоба</h3>
          {/* Сетка референсов */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-3" // Отрицательный маржин компенсирует padding колонок
            columnClassName="pl-3 bg-clip-padding" // Отступ между колонками
          >
            {item.assets.refs.map((ref, index) => (
              <div
                key={index}
                className="mb-3 rounded-xl overflow-hidden bg-gray-50"
              >
                <img
                  src={`/content/${item.id}/refs/${ref}`}
                  className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500 block"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
}
