import { Link } from 'react-router-dom';

export function ArtCard({ data }) {
  return (
    <Link 
      to={`/pin/${data.id}`} 
      className="block w-full mb-4 break-inside-avoid group"
    >
      <div className="relative overflow-hidden rounded-2xl transition-all duration-300">
        {/* Превью изображения */}
        <img 
          src={`./content/${data.id}/${data.assets.thumb}`} 
          alt={data.image_name || "Art"}
          className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Оверлей при наведении (затемнение как в Pinterest) */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        
        {/* Контейнер для ника автора (появляется при наведении или можно оставить всегда) */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <p className="text-white text-xs font-medium truncate">
             {data.author}
           </p>
        </div>
      </div>
    </Link>
  );
}