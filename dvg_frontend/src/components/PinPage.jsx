import { useParams, Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Description } from "./Description";

export function PinPage({ items }) {
  const { id } = useParams();
  const item = items.find((p) => p.id === id);

  if (!item) return <div className="p-10 text-center">Загрузка...</div>;

  return (
    <div className="min-h-screen md:h-screen flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative">
      <Link
        to="/"
        className="absolute top-6 left-6 z-50 flex items-center justify-center w-10 h-10 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-full shadow-lg text-gray-700 dark:text-white hover:scale-110 transition-all border border-gray-100 dark:border-zinc-700"
        title="Назад в ленту"
      >
        <span className="text-xl">←</span>
      </Link>

      {/* ЛЕВЫЙ БЛОК: Фиксированный */}
      <div className="md:w-[60%] lg:w-[50%] h-full   flex flex-col dark:border-zinc-800 flex-shrink-0">
        <div className="min-h-0 flex flex-col items-center justify-start p-4">
          <PhotoProvider
            maskOpacity={0.7}
            toolbarRender={() => null}
            bannerVisible={false}
          >
            <PhotoView src={`./content/${item.id}/${item.assets.main}`}>
              <img
                src={`./content/${item.id}/${item.assets.main}`}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-sm cursor-zoom-in"
                alt={item.image_name}
              />
            </PhotoView>
          </PhotoProvider>
        </div>

        {/* ИНФО-БЛОК*/}
        <Description item={item} />
      </div>

      <div className="flex-1 min-w-0 h-full overflow-y-auto bg-white dark:bg-zinc-900">
        <div className="p-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {item.assets.refs.map((ref, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800 group"
              >
                <img
                  src={`./content/${item.id}/refs/${ref}`}
                  alt={`Reference ${index}`}
                  className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}