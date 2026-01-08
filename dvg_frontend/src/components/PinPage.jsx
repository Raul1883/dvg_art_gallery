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


  return(
    <div className="h-screen bg-white dark:bg-zinc-950 flex flex-col overflow-hidden">
  
  {/* Верхняя панель управления (опционально) */}
  <header className="h-16 border-b border-gray-100 dark:border-zinc-800 flex items-center px-6 justify-between flex-shrink-0">
    <Link to="/" className="flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
      <span className="text-xl mr-2">←</span>
      <span className="font-medium">Назад в ленту</span>
    </Link>
    <div className="flex gap-4">
       <button className="px-5 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition">Сохранить</button>
    </div>
  </header>

  {/* ГЛАВНЫЙ РАБОЧИЙ ОБЛАСТЬ */}
  <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
    
    <div className="md:w-[50%] h-full bg-gray-50 dark:bg-zinc-900 flex items-center justify-center p-4">
      <PhotoProvider>
        <PhotoView src={`/content/${item.id}/${item.assets.main}`}>
          <img
            src={`/content/${item.id}/${item.assets.main}`}
            className="max-w-full max-h-full w-auto h-auto object-contain cursor-zoom-in"
            alt={item.image_name}
          />
        </PhotoView>
      </PhotoProvider>
    </div>

    <div className="md:w-[50%] h-full flex flex-col overflow-y-auto border-l border-gray-100 dark:border-zinc-800">
      
      {/* Контент внутри правого блока */}
      <div className="p-8 md:p-12">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
          {item.image_name || "Без названия"}
        </h1>
        
        <p className="text-gray-600 dark:text-zinc-400 text-xl mb-10 leading-relaxed">
          {item.description}
        </p>

        {/* Профиль автора */}
        <div className="flex items-center mb-12 group">
          <img
            src={`/content/${item.id}/${item.assets.avatar}`}
            className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-transparent group-hover:ring-gray-200 transition-all"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{item.author}</h2>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-zinc-800 pt-10">
         
          <Masonry
            breakpointCols={{default:3, 1300:2}}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {item.assets.refs.map((ref, index) => (
              <div key={index} className="mb-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={`/content/${item.id}/refs/${ref}`}
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  </div>
</div>
  );

  return (
<div className="min-h-screen bg-gray-50 dark:bg-zinc-950 md:p-8 flex flex-col">
  {/* ГЛАВНЫЙ КОНТЕЙНЕР-КАРТОЧКА */}
  <div className="flex flex-col md:flex-row  md:h-[85vh]">
    
    {/* ЛЕВАЯ ЧАСТЬ: Изображение (Фиксированное, не скроллится) */}
    <div className="md:w-1/2 sticky top-0 bg-gray-100 dark:bg-zinc-800 flex items-center justify-center p-4">
      <PhotoProvider>
        <PhotoView src={`/content/${item.id}/${item.assets.main}`}>
          <img
            src={`/content/${item.id}/${item.assets.main}`}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl cursor-zoom-in shadow-sm"
            alt={item.image_name}
          />
        </PhotoView>
      </PhotoProvider>
    </div>

    {/* ПРАВАЯ ЧАСТЬ: Информация + Скролл-зона рекомендаций */}
    <div className="md:w-1/2 flex flex-col overflow-y-auto custom-scrollbar bg-white dark:bg-zinc-900">
      
      {/* 1. Блок информации о пине */}
      <div className="p-8 md:p-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {item.image_name || "Без названия"}
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
          {item.description}
        </p>

        {/* Блок автора */}
        <div className="flex items-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl">
          <img
            src={`/content/${item.id}/${item.assets.avatar}`}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="font-bold text-gray-900 dark:text-white">{item.author}</h2>
            <p className="text-sm text-gray-500">Автор контента</p>
          </div>
        </div>

        <hr className="my-10 border-gray-100 dark:border-zinc-800" />


        
        <Masonry
          breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
          className="flex w-auto -ml-3"
          columnClassName="pl-3 bg-clip-padding"
        >
          {item.assets.refs.map((ref, index) => (
            <div
              key={index}
              className="mb-3 rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800 group"
            >
              <img
                src={`/content/${item.id}/refs/${ref}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  </div>
</div>
  );

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
