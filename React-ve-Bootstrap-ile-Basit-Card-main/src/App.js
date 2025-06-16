import React, { lazy, Suspense } from "react";
const LazyCard = lazy(() => import("./components/card"));
function App() {
  const yazi = [
    "Köpekler, evcil hayvan olarak insanlar tarafından sevilen ve yetiştirilen bir tür canlıdır. Köpekler, insanlarla yaklaşık 15.000 yıldır birlikte yaşamaktadır. Köpekler, insanlar için çeşitli amaçlar için kullanılır, örneğin avcılık, koruma, arama ve kurtarma, rehberlik. ",

    "Kediler, evcil hayvan olarak insanlar tarafından sevilen ve yetiştirilen bir tür canlıdır. Kediler, insanlar için temizlik ve müzik yapmak gibi çeşitli amaçlar için kullanılabilir. Kediler, insanlar için sadık ve sevecen bir arkadaş olarak kabul edilir ve evlerinde çok sevilirler.",

    "Kuşlar, havalarda uçan, çok farklı türlerde ve boyutlarda olan canlılar. Kuşlar, insanlar için çeşitli amaçlar için kullanılabilir, örneğin avcılık, güzel sesleri ve güzel renkleri ile eğlence. Kuşlar, aynı zamanda önemli bir ekolojik rol oynar.",

    "Atlar, insanlar  tarafından  yıllardır  kullanılan bir tür canlıdır. Atlar, taşıma, eğlence ve yarışma  amaçları için kullanılabilir. Atlar, insanlar için sadık ve sevecen  bir  arkadaş olarak kabul edilir.Atların güçlü toynakları vardır.",

    "Zebralar, savanaların ve çayırlıkların halkalı bir hayvanıdır. Zebralar, çok iyi koşabilen ve dayanıklı bir hayvandır. Zebralar, çok renkli bir görünüme sahip olan benzersiz bir türdür.",
    "Maymunlar, diğer hayvanların aksine, yüksek derecede gelişmiş sinir sistemlerine sahiptir. Bu, öğrenme yeteneklerini arttırmaktadır."
  ]



  const pics = ["images/Dog.jpg", "images/Cat.jpg", "images/Birds.jpg", "images/Horse.jpg", "images/Zebra.jpg", "images/Monkey.jpg"]
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-md-4 col-lg-3 mb-4 d-flex my-2">
          <Suspense fallback={<div>Yukleniyor...</div>}>
            <LazyCard title="Dog" text={yazi[0]} resim={pics[0]} />
          </Suspense>
        </div>
        <div className="col-md-4 col-md-4 col-lg-3 mb-4 d-flex my-2 my-2">
          <Suspense fallback={<div>Yukleniyor...</div>}>
            <LazyCard title="Cat" text={yazi[1]} resim={pics[1]} />
          </Suspense>
        </div>
        <div className="col-md-4 col-md-4 col-lg-3 mb-4 d-flex my-2 my-2">
          <Suspense fallback={<div>Yukleniyor...</div>}>
            <LazyCard title="Bird" text={yazi[2]} resim={pics[2]} />
          </Suspense>
        </div>
        <div className="col-md-4 col-md-4 col-lg-3 mb-4 d-flex my-2 my-2">
          <Suspense fallback={<div>Yukleniyor...</div>}>
            <LazyCard title="Horse" text={yazi[3]} resim={pics[3]} />
          </Suspense>
        </div>
        <div className="col-md-4 col-md-4 col-lg-3 mb-4 d-flex my-2 my-2">
          <Suspense fallback={<div>Yukleniyor...</div>}>
            <LazyCard title="Zebra" text={yazi[4]} resim={pics[4]} />
          </Suspense>
        </div>
        <div className="col-md-4 col-md-4 col-lg-3 mb-4 d-flex my-2 my-2">
          <Suspense fallback={<div>Yukleniyor...</div>}>
            <LazyCard title="Monkey" text={yazi[5]} resim={pics[5]} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
