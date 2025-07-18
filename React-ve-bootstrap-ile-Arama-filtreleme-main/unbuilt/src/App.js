import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Data from "./Data.json"

const placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlnDvGtsZW5peW9yLi4uPC90ZXh0Pjwvc3ZnPg=="

function App() {
  const [terimAra, setTerimAra] = useState("");
  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="text-center text-white">Family Guy Karakterleri</h2>
        <div className="form-input">
          <input type="text" className="form-control" placeholder="Karakter ara..." onChange={(e) => setTerimAra(e.target.value)}
          // inputa girilen herhangi bir değer setTerimAra ile terimAra state'ine atanacaktır.
          />
        </div>
      </div>
      <div className="container-fluid px-0 ">
        <div className="row row-cols-2 my-3">
          {
            // Data.json dosyasında filtreleme uygulayacağımı belirttim ve eğer inputa girilen değer boşsa 
            // veri döndürülsün(hepsi görünür) aksi halde verilerin başlığını yerelde küçük harflere çevirip 
            // terimAra'nın yeni değeri olarak içerisine ekle(terimAra inputtaki girilen değerdir.) ver veriyi döndür.
            // en sonra ise map methodu ile verinin içerisini gezip jsx formatında içerikleri girdim.
            Data.filter((veri) => {
              if (terimAra == "") {
                return veri;
                
              } else if (veri.title.toLocaleLowerCase().includes(terimAra.toLocaleLowerCase())) {
                return veri;
              }
            }).map((veri) => {
              return (
                <div className="Veri" key={veri.id}>
                  {/* veriler arası karışıklık olmaması için id şarttır. */}
                  <div className="col-md">
                    <LazyLoadImage
                      src={veri.link}
                      alt={veri.title}
                      effect="blur"
                      className="img-fluid rounded shadow-lg"
                      placeholderSrc={placeholder}
                    />
                  </div>
                  <div className="text-white text-center mt-3">
                    <h3>{veri.title}</h3>
                  </div>
                  <div className="text-white col-md">
                    <p>{veri.Description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
