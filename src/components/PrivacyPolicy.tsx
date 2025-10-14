import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium mb-6"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Vissza a főoldalra
        </Link>

        <h1 className="text-4xl font-black text-gray-900 mb-4">
          Adatvédelmi szabályzat
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Bevezetés
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A CD Kulcs ("mi", "minket", "szolgáltatásunk") elkötelezett az Ön
              személyes adatainak védelme iránt. Ez az adatvédelmi szabályzat
              leírja, hogyan gyűjtjük, használjuk, tároljuk és védjük az Ön
              személyes adatait, amikor a cdkulcs.hu weboldalt ("Szolgáltatás")
              használja.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Gyűjtött adatok
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A következő típusú adatokat gyűjtjük:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Név</li>
              <li>E-mail cím</li>
              <li>Telefonszám</li>
              <li>Számlázási és szállítási cím</li>
              <li>
                Fizetési információk (biztonságos fizetési átjárón keresztül)
              </li>
              <li>IP-cím és böngésző információk</li>
              <li>Vásárlási előzmények</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Az adatok felhasználása
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Az Ön adatait a következő célokra használjuk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Rendelések feldolgozása és teljesítése</li>
              <li>Ügyfélszolgálat biztosítása</li>
              <li>A szolgáltatás fejlesztése</li>
              <li>Marketing kommunikáció küldése (az Ön hozzájárulásával)</li>
              <li>Jogszabályi kötelezettségek teljesítése</li>
              <li>Csalás megelőzése és biztonsági célok</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Adatkezelés jogalapja
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Az adatkezelés jogalapja a GDPR szerint:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Szerződés teljesítése (rendelések feldolgozása)</li>
              <li>Jogos érdek (szolgáltatás fejlesztése, biztonság)</li>
              <li>Hozzájárulás (marketing kommunikáció)</li>
              <li>Jogi kötelezettség (számviteli nyilvántartás)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Adatok megosztása
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Adatait csak a következő esetekben osztjuk meg harmadik felekkel:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                Fizetési szolgáltatókkal (biztonságos tranzakciók
                lebonyolításához)
              </li>
              <li>Szállítási partnerekkel (termékek kézbesítéséhez)</li>
              <li>Jogi kötelezettség esetén hatóságokkal</li>
              <li>Az Ön kifejezett hozzájárulásával</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Adatait soha nem adjuk el harmadik feleknek marketing célokra.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Adatbiztonság
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Komoly technikai és szervezési intézkedéseket alkalmazunk
              adatainak védelme érdekében:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>SSL/TLS titkosítás az adatátvitel során</li>
              <li>Titkosított adattárolás</li>
              <li>Korlátozott hozzáférés az adatokhoz</li>
              <li>Rendszeres biztonsági auditok</li>
              <li>Tűzfalak és vírusvédelem</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Az Ön jogai
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A GDPR szerint az alábbi jogokkal rendelkezik:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Hozzáférési jog:</strong> tájékoztatást kérhet a kezelt
                adatokról
              </li>
              <li>
                <strong>Helyesbítési jog:</strong> kérheti a pontatlan adatok
                javítását
              </li>
              <li>
                <strong>Törlési jog:</strong> kérheti adatai törlését
                ("elfeledtetéshez való jog")
              </li>
              <li>
                <strong>Korlátozási jog:</strong> kérheti az adatkezelés
                korlátozását
              </li>
              <li>
                <strong>Adathordozhatóság:</strong> kérheti adatai átadását
                másik szolgáltatónak
              </li>
              <li>
                <strong>Tiltakozási jog:</strong> tiltakozhat az adatkezelés
                ellen
              </li>
              <li>
                <strong>Panasztételi jog:</strong> panaszt tehet a felügyeleti
                hatóságnál
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Sütik (Cookies)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Weboldalunk sütiket használ a felhasználói élmény javítására. A
              sütik kis fájlok, amelyeket a böngésző tárol. Használunk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Elengedhetetlen sütiket (a weboldal működéséhez)</li>
              <li>
                Teljesítmény sütiket (a weboldal teljesítményének mérésére)
              </li>
              <li>Funkcionális sütiket (beállítások megjegyzésére)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A böngésző beállításaiban bármikor törölheti vagy letilthatja a
              sütiket.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Adatmegőrzés
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Adatait csak addig őrizzük meg, ameddig szükséges az adatkezelés
              céljának teljesítéséhez, vagy ameddig jogszabály kötelez
              bennünket. Rendelési adatokat általában 5 évig őrizzük meg
              számviteli célokból.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Gyermekek adatainak védelme
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Szolgáltatásunk 18 év alatti személyek számára nem elérhető.
              Tudatosan nem gyűjtünk adatokat 18 év alatti személyektől.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Módosítások
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Fenntartjuk a jogot ezen adatvédelmi szabályzat módosítására. A
              módosításokról e-mailben értesítjük Önt, és a frissített
              szabályzat ezen az oldalon jelenik meg.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Kapcsolat
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ha kérdése van az adatvédelmi szabályzattal kapcsolatban, vagy
              gyakorolni szeretné jogait, vegye fel velünk a kapcsolatot:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-2">
                <strong>E-mail:</strong> info@cdkulcs.hu
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Telefon:</strong> +36 70 257 4500
              </p>
              <p className="text-gray-700">
                <strong>Cím:</strong> 3441 Mezőkeresztes, Sallai u. 9
                (Telephely)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
