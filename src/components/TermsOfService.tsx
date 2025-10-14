import React from "react";
import { Link } from "react-router-dom";

const TermsOfService: React.FC = () => {
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
          Szolgáltatási feltételek
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Szolgáltatás elfogadása
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A cdkulcs.hu weboldal ("Szolgáltatás") használatával Ön elfogadja
              jelen Szolgáltatási Feltételeket. Ha nem ért egyet ezekkel a
              feltételekkel, kérjük, ne használja a Szolgáltatást.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Szolgáltatás leírása
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A CD Kulcs digitális szoftver termékkulcsok értékesítésével
              foglalkozik. Szolgáltatásunk magában foglalja:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Szoftver licenckulcsok értékesítése</li>
              <li>Azonnali digitális kézbesítés</li>
              <li>Ügyfélszolgálati támogatás</li>
              <li>Biztonságos fizetési lehetőségek</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Felhasználói felelősség
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Szolgáltatás használatával Ön vállalja, hogy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>18 éves vagy annál idősebb</li>
              <li>Valós és pontos információkat ad meg</li>
              <li>Nem használja a Szolgáltatást illegális célokra</li>
              <li>Nemsérti meg mások szellemi tulajdonjogait</li>
              <li>Betartja a vásárolt szoftverek licencfeltételeit</li>
              <li>Nem oszt meg vagy ad el licenckulcsokat jogosulatlanul</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Rendelések és fizetés
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.1. Rendelési folyamat:</strong> A rendelés leadásával Ön
              kötelező ajánlatot tesz a termék megvásárlására. A rendelés akkor
              tekintendő elfogadottnak, amikor e-mailben visszaigazolást
              küldünk.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.2. Árak:</strong> Minden ár forintban (HUF) kerül
              megjelenítésre és tartalmazza az ÁFÁ-t. Fenntartjuk a jogot az
              árak módosítására, de ez nem érinti a már leadott rendeléseket.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.3. Fizetési módok:</strong> Elfogadunk bankkártyás
              fizetést és egyéb elektronikus fizetési módokat. A fizetési adatok
              kezelése biztonságos fizetési átjárón keresztül történik.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Szállítás és aktiválás
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>5.1. Digitális kézbesítés:</strong> A vásárolt
              termékkulcsot e-mailben küldjük ki a fizetés jóváhagyása után,
              általában 5-30 percen belül.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>5.2. Aktiválási útmutató:</strong> Minden termékhez
              mellékelünk részletes aktiválási útmutatót.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>5.3. Késedelem:</strong> Ha 24 órán belül nem kapja meg a
              kulcsot, kérjük, lépjen kapcsolatba ügyfélszolgálatunkkal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Licencek és felhasználási jogok
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>6.1. Licenctípusok:</strong> Csak eredeti, legális
              szoftver licenceket értékesítünk. A licenc típusa termékenként
              változik (OEM, Retail, Volume).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>6.2. Korlátozások:</strong> A vásárolt kulcs személyes
              vagy vállalati használatra szól. A kereskedelmi továbbértékesítés
              tilos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>6.3. Aktiválási limit:</strong> Minden kulcs csak a gyártó
              által meghatározott számú eszközön aktiválható.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Garancia és szavatosság
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>7.1. Termékgarancia:</strong> Garantáljuk, hogy minden
              kulcs működőképes és aktiválható a megadott szoftveren.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>7.2. Hibabejelentés:</strong> Ha a kulcs nem működik, 24
              órán belül jelezze felénk, és azonnal cserélünk vagy
              visszatérítünk.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>7.3. Kizárások:</strong> Nem vállalunk felelősséget a
              szoftver gyártói hibáiért vagy a felhasználói rendszer
              inkompatibilitásáért.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Szellemi tulajdonjogok
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Weboldal minden tartalma (szöveg, kép, logó, design) a CD Kulcs
              szellemi tulajdona. Tilos a tartalom engedély nélküli másolása,
              terjesztése vagy kereskedelmi felhasználása.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Felelősség korlátozása
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A jogszabályok által megengedett mértékben kizárjuk a
              felelősséget:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Közvetett vagy következményes károkért</li>
              <li>Adatvesztésért vagy üzleti veszteségért</li>
              <li>Harmadik fél okozta károkért</li>
              <li>Vis maior eseményekért</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Felelősségünk korlátozva van a megvásárolt termék árára.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Felmondás és felfüggesztés
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fenntartjuk a jogot, hogy azonnali hatállyal felfüggesszük vagy
              megszüntessük szolgáltatásainkat, ha:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Megsértik a Szolgáltatási Feltételeket</li>
              <li>Csalárd tevékenységet észlelünk</li>
              <li>Jogosulatlan kulcsmegosztást tapasztalunk</li>
              <li>Visszaélést vagy spam tevékenységet folytatnak</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Vis maior
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nem vállalunk felelősséget olyan késedelemért vagy
              teljesítésképtelenségért, amely rajtunk kívül álló okokból
              (természeti katasztrófa, háború, sztrájk, internetszolgáltatói
              probléma) következik be.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Vitarendezés
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>12.1. Panaszkezelés:</strong> Panaszát info@cdkulcs.hu
              címre küldheti. 48 órán belül válaszolunk.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>12.2. Békés rendezés:</strong> Vitás esetekben törekszünk
              békés, tárgyalásos megoldásra.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>12.3. Joghatóság:</strong> Jelen feltételekre a magyar jog
              az irányadó. Vitás ügyekben a Budapesti Törvényszék rendelkezik
              kizárólagos illetékességgel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Módosítások
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Fenntartjuk a jogot a Szolgáltatási Feltételek módosítására. A
              módosításokról e-mailben értesítjük Önt. A módosított feltételek a
              közzétételtől számított 15 nap után lépnek hatályba.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Kapcsolat
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ha kérdése van a Szolgáltatási Feltételekkel kapcsolatban,
              keressen minket:
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

export default TermsOfService;
