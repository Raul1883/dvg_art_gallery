import "react-photo-view/dist/react-photo-view.css";

export function Description({ item }){
return(
        <div className="p-6 pt-2">
          <div className="max-w-full">
            <h1 className="text-xl font-bold mb-1 text-gray-900 dark:text-white leading-tight">
              {item.image_name || "Без названия"}
            </h1>

            <p className="text-xs text-gray-500 dark:text-zinc-400 mb-4 line-clamp-3">
              {item.description}
            </p>

            <div className="flex items-center pt-4">
              <a href={item.author_link}>
              <img
                src={`./content/${item.id}/${item.assets.avatar}`}
                className="w-8 h-8 rounded-full object-cover mr-3"
              />
              </a>
              <div className="overflow-hidden">
                <h2 className="text-xs font-bold text-gray-900 dark:text-white truncate">
                  <a href={item.author_link}>{item.author}</a>
                </h2>
                <p className="text-[9px] uppercase tracking-tighter text-gray-400">
                  <a href={item.author_link}>Автор контента</a>
                </p>
              </div>
            </div>
          </div>
        </div>
);
}