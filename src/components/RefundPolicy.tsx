import React from "react";
import { Link } from "react-router-dom";

const RefundPolicy: React.FC = () => {
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
          Visszatérítési szabályzat
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Általános elvek
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A CD Kulcs elkötelezett vásárlói elégedettsége iránt. Mivel
              digitális termékeket értékesítünk, visszatérítési politikánk
              speciális szabályokkal rendelkezik, amelyek összhangban vannak az
              EU fogyasztóvédelmi irányelvekkel és a magyar jogszabályokkal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Digitális termékekre vonatkozó szabályok
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>2.1. Elállási jog korlátozása:</strong> A távollevők
              között kötött szerződésekről szóló törvény (45/2014. (II. 26.)
              Korm. rendelet) értelmében digitális termékek esetén a fogyasztó
              elállási joga megszűnik, ha a teljesítés a fogyasztó kifejezett,
              előzetes beleegyezésével megkezdődött.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>2.2. Aktivált kulcsok:</strong> Mivel a szoftverkulcsok
              aktiválása azonnali, és a kulcs kézbesítése után azonnal
              használható, a termék átvételével Ön kifejezetten hozzájárul a
              teljesítéshez, és elállási joga megszűnik.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Visszatérítési feltételek
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visszatérítést biztosítunk a következő esetekben:
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">
                3.1. Hibás termék
              </h3>
              <p className="text-green-800 mb-2">
                Ha a vásárolt kulcs nem aktiválható vagy hibás:
              </p>
              <ul className="list-disc list-inside space-y-2 text-green-800">
                <li>Azonnali csere vagy teljes visszatérítés</li>
                <li>24 órán belül jelezze a problémát</li>
                <li>Mellékelje a hibaüzenet képernyőképét</li>
                <li>Visszatérítés 3-5 munkanapon belül</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                3.2. Duplikált rendelés
              </h3>
              <p className="text-blue-800 mb-2">
                Ha véletlenül kétszer rendelte meg ugyanazt a terméket:
              </p>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>Teljes visszatérítés a duplikált rendelésre</li>
                <li>24 órán belül jelezze</li>
                <li>A kulcs nem lehet aktiválva</li>
                <li>Automatikus visszatérítés</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <h3 className="text-lg font-bold text-yellow-900 mb-3">
                3.3. Nem kézbesített termék
              </h3>
              <p className="text-yellow-800 mb-2">
                Ha 24 órán belül nem kapja meg a kulcsot:
              </p>
              <ul className="list-disc list-inside space-y-2 text-yellow-800">
                <li>Ellenőrizze spam mappáját</li>
                <li>Vegye fel velünk a kapcsolatot</li>
                <li>Azonnali újraküldés vagy visszatérítés</li>
                <li>Kompenzációs kupon lehetősége</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Visszatérítés kizárása
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <p className="text-red-800 mb-3 font-semibold">
                NEM járható vissza az összeg, ha:
              </p>
              <ul className="list-disc list-inside space-y-2 text-red-800">
                <li>A kulcsot már sikeresen aktiválták</li>
                <li>A kulcsot harmadik félnek továbbították</li>
                <li>Nem kompatibilis rendszeren próbálták aktiválni</li>
                <li>A szoftver gyártói szerverein van probléma (átmeneti)</li>
                <li>Rossz terméket választott (tévesen rendelte meg)</li>
                <li>Meggondolta magát a vásárlást (aktiválás után)</li>
                <li>A kulcs megosztásra került</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Visszatérítési folyamat
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Kapcsolatfelvétel
                  </h3>
                  <p className="text-gray-700">
                    Küldjön e-mailt a info@cdkulcs.hu címre a rendelésszámmal és
                    a probléma részletes leírásával.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Ellenőrzés</h3>
                  <p className="text-gray-700">
                    Csapatunk 24 órán belül megvizsgálja a kérelmet és ellenőrzi
                    a kulcs státuszát.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Döntés</h3>
                  <p className="text-gray-700">
                    E-mailben tájékoztatjuk a döntésről. Ha jóváhagyásra kerül,
                    feldolgozzuk a visszatérítést.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Visszautalás</h3>
                  <p className="text-gray-700">
                    Az összeg 3-5 munkanapon belül visszakerül az eredeti
                    fizetési módra. Banki feldolgozás további 1-3 napot vehet
                    igénybe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Részleges visszatérítés
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bizonyos esetekben részleges visszatérítést kínálhatunk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Technikai problémák esetén 50% visszatérítés + új kulcs</li>
              <li>Kézbesítési késedelem esetén 10-20% kompenzáció</li>
              <li>Különleges esetekben egyedi megállapodás</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Csere lehetőség
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visszatérítés helyett cserét is kérhet:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Másik termékre váltás (azonos vagy magasabb értékben)</li>
              <li>Utalvány a különbözetre</li>
              <li>Store credit a következő vásárláshoz</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Garancia
            </h2>
            <div className="bg-purple-50 p-6 rounded-xl">
              <p className="text-purple-900 font-semibold mb-3">
                100%-os Elégedettségi Garancia
              </p>
              <p className="text-purple-800">
                Ha hibás kulcsot kap, garantáljuk a gyors cserét vagy azonnali
                visszatérítést. Célunk, hogy minden vásárló elégedett legyen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Visszaélések megelőzése
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visszatérítési rendszerünket folyamatosan monitorozzuk.
              Fenntartjuk a jogot a visszatérítés megtagadására, ha:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Ismétlődő, indokolatlan visszatérítési kérelmek</li>
              <li>Csalárd tevékenység gyanúja</li>
              <li>Kulcsmegosztás vagy -kereskedelem</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Kapcsolat
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kérdése van a visszatérítésekkel kapcsolatban?
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-2">
                <strong>Visszatérítési e-mail:</strong> info@cdkulcs.hu
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Ügyfélszolgálat:</strong> info@cdkulcs.hu
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Telefon:</strong> +36 70 257 4500
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Nyitvatartás:</strong> Hétfő-Péntek 9:00-18:00
              </p>
              <p className="text-sm text-gray-600">
                Válaszidő: 24 óra munkanapokon
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
