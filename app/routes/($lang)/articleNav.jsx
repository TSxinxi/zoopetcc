import { useRef, useMemo, useEffect, useState } from 'react';

export default function articleNav() {
  const [hasMounted, setHasMounted] = useState(false);
  const [name, setName] = useState('');
  const [id, setID] = useState('');
  useEffect(() => {
    setHasMounted(true);
    var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.localStorage !== "undefined");
    if (canUseDOM) {
      let result = new URLSearchParams(window.location.search);
      setID(result.get('id'));
      setName(result.get('name'));
    }
  }, []);
  return <div className='settle_accounts'>
    <div className='settle_accounts_title shadow_box'>
      <div>
        <span onClick={() => { window.history.back() }} className='prev'><img src="https://platform.antdiy.vip/static/image/xiangzuo.svg" /></span>
        <span>{name}</span>
        <i></i>
      </div>
    </div>
    <div className='article_box'>
      <div className='article_title'>{name}</div>
      <div className='article_text'>
        {
          id == '' ? null :
            id == 0 ? <div className="shopify-policy__container">
              <div className="shopify-policy__title">
                <h1>Politica de confidențialitate</h1>
              </div>
              <div className="shopify-policy__body">
                <div className="rte">
                  <div style={{ textAlign: "center" }}>Vă mulțumim pentru vizitarea zoopet.cc (denumit în continuare „Site-ul”).</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Această politică de confidențialitate și securitate („Politică”) descrie informațiile pe care le colectăm despre dumneavoastră pe site și datele mele atunci când vizitați magazinul nostru sau comunicați sau comunicați prin zoopet.cc, modul în care folosim informațiile personale și unele dintre măsurile de securitate luăm. Pentru a proteja informațiile și opțiunile dvs. de a revizui și/sau revizui și/sau limita utilizarea de către noi a acestor informații.</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Această politică face parte din termenii și condițiile de utilizare care guvernează site-ul web și este obligatorie pentru toți utilizatorii site-ului.</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Dacă aveți vreo obiecție la această Politică de confidențialitate, trebuie să încetați imediat utilizarea acestui site web.</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Cum folosim datele dvs. personale?</div>
                  <div style={{ textAlign: "center" }}>Prin furnizarea datelor dvs. personale, sunteți de acord ca zoopet.cc să utilizeze datele colectate pentru a ne îndeplini obligațiile față de dvs. și pentru a vă oferi serviciile la care v-ați așteptat.</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Avem nevoie de datele dumneavoastră personale în următoarele scopuri:</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>- Creați-vă contul personal pe zoopet.cc (de exemplu, numele și adresa dvs. de e-mail)</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>- pentru a vă procesa cererea (cum ar fi numele, adresa și detaliile bancare)</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>- Posibilitatea de a trimite notificări prin SMS privind starea livrării (de exemplu, numărul dvs. de mobil)</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>- pentru a vă putea trimite oferte de marketing, cum ar fi buletine informative și cataloagele noastre (cum ar fi adresa dvs. de e-mail și numele)</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>- Posibilitatea de a vă contacta dacă există probleme cu livrarea articolului dvs. (de exemplu, numărul de telefon, adresa)</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Pentru a ne permite să răspundem la întrebările dvs. și să vă anunțăm cu privire la serviciile noi sau modificate (cum ar fi adresa dvs. de e-mail)</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Vom păstra datele dumneavoastră doar atât timp cât este necesar pentru a vă oferi servicii sau conform prevederilor legale.<br /><br />Nu putem șterge datele dumneavoastră dacă există cerințe legale de stocare (de exemplu, reguli de contabilitate) sau dacă există o bază legală pentru păstrarea datelor (de exemplu, continuarea relației contractuale).<br /><br />Datele non-personale sunt utilizate așa cum este descris mai sus și așa cum este permis altfel de legea aplicabilă, inclusiv prin combinarea datelor ne-personale cu datele personale.<br /><br />În plus, monitorizăm utilizarea site-ului și modelele de trafic pentru a îmbunătăți designul site-ului și produsele și serviciile pe care le oferim și pentru a determina ce oferte, promoții sau informații să vă trimitem.<br /><br />Pentru a vă servi mai bine, este posibil să combinăm informațiile personale pe care ni le furnizați online prin intermediul dispozitivului dvs. mobil, în magazinele noastre sau prin intermediul centrelor noastre de asistență pentru clienți.<br /><br />De asemenea, putem combina aceste informații cu informații disponibile public și informații pe care le primim din referințe încrucișate cu parteneri selectați și alții. Combinând aceste informații, putem să comunicăm mai bine cu dvs. despre produsele și serviciile noastre, evenimentele și promoțiile speciale și să vă personalizăm mai bine experiența de cumpărături.</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Aveți dreptul de a solicita informații despre datele dumneavoastră personale deținute de noi.<br />Dacă datele dumneavoastră sunt incorecte, incomplete sau irelevante, puteți solicita ca informațiile să fie corectate sau șterse. De asemenea, aveți dreptul de a solicita, anual, gratuit, documentație scrisă a informațiilor personale pe care le deținem despre dumneavoastră în fișierul contului dumneavoastră.<br /><br />Pentru a solicita acest document, vă rugăm să scrieți la Serviciul Clienți zoopet.cc. Vă puteți retrage oricând consimțământul pentru utilizarea datelor în scopuri de marketing (de exemplu, pentru a vă trimite cataloage, buletine informative sau oferte). Ne puteți contacta telefonic sau prin e-mail.<br /><br /><br />Puteți vizita contul personal pentru a vă actualiza informațiile personale.<br />Vă rugăm să rețineți, totuși, că informațiile dvs. personale ale contului sunt protejate de numele dvs. de utilizator și parola.<br /><br />Sunteți responsabil pentru menținerea securității numelui de utilizator și a parolei, deoarece orice acțiune întreprinsă în timp ce vă conectați la contul dvs. este responsabilitatea dvs.<br /><br /><br />Nu vom vinde informațiile dumneavoastră către terți.<br />Cu toate acestea, împărtășim date cu terți atunci când efectuăm tranzacții, îndeplinim servicii, în scopuri administrative sau conform prevederilor legale.<br /><br />Orice date transmise către terți sunt folosite pentru a îndeplini obligațiile zoopet.cc și pot furniza, de asemenea, datele dumneavoastră cu caracter personal unor organizații precum consiliere de credit sau agenții de colectare a datoriilor în scopul verificării creditului, verificării identității, monitorizării ratingurilor de credit și colectării datoriilor. .<br /><br />În plus, vă vom împărtăși datele dacă este cerut de lege sau pentru a preveni fraudele potențiale sau suspectate. În plus, zoopet.cc poate fi fuzionat cu o altă parte, reorganizat corporativ, vândut sau cumpărat toate sau o parte din activele noastre, iar datele dumneavoastră personale pot fi partajate. Dacă nu doriți să vă împărtășim datele personale în aceste moduri, vă rugăm să nu ni le furnizați.<br />
                  </div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}>Un cookie este o bucată de date stocată pe hard diskul unui utilizator care conține informații despre utilizator.<br />Folosim atât cookie-uri de sesiune, cât și cookie-uri persistente. Cookie-urile ne permit să urmărim și să țintim interesele utilizatorilor în general, analizând zone și produse populare pentru a îmbunătăți experiența viitoare a site-ului nostru.<br /><br />Cookie-urile nu deteriorează sistemul informatic sau fișierele dumneavoastră, iar aceste cookie-uri pot fi citite, modificate sau șterse doar de site-ul web care v-a transmis specificul cookie.<br /><br />Dacă nu doriți să colectați informații prin utilizarea cookie-urilor, majoritatea browserelor au proceduri simple care vă permit să ștergeți cookie-urile existente, să respingeți automat cookie-urile sau vă oferă opțiunea de a refuza sau accepta transmiterea anumitor cookie-uri către dvs. calculator.<br /><br />Puteți șterge cu ușurință cookie-urile de pe computerul sau dispozitivul dvs. mobil utilizând browserul dvs.</div>
                  <div style={{ textAlign: "center" }}></div>
                  <div style={{ textAlign: "center" }}></div>
                </div>
              </div>
            </div> :
              id == 1 ? <div className="shopify-policy__container">
                <div className="shopify-policy__title">
                  <h1>Politica de rambursare</h1>
                </div>

                <div className="shopify-policy__body">
                  <div className="rte">
                    <h3 style={{ textAlign: "center" }}>Pentru a beneficia de restituirea banilor, te rugam sa ai in vedere urmatoarele conditii de returnare a produselor:<br />
                    </h3>
                    <div style={{ textAlign: "center" }}><strong></strong></div>
                    <div style={{ textAlign: "center" }}><em><strong>- NU SE POT RETURNA PRODUSELE FOLOSITE!</strong></em></div>
                    <div style={{ textAlign: "center" }}><em>- produsele nu vor prezenta semne de uzura</em></div>
                    <div style={{ textAlign: "center" }}><em>- produsele nu vor fi deteriorate si nu vor avea accesorii lipsa (bretele, etc...)</em></div>
                    <div style={{ textAlign: "center" }}><em>- instiintarea pentru returnarea produselor sa fie facuta in termen de <strong>7 zile calendaristice de la momentul primirii coletului</strong></em></div>
                    <div style={{ textAlign: "center" }}><em>- returnarea produselor se va face intr-un ambalaj care nu permite deteriorarea acestora pe durata transportului</em></div>
                    <div style={{ textAlign: "center" }}><em>- ne rezervam dreptul de a refuza coletele deteriorate sau produsele care prezinta semne de uzura</em></div>
                    <div style={{ textAlign: "center" }}><strong>Modalitate de returnare:</strong></div>
                    <div style={{ textAlign: "center" }}>- tă rugăm să ne informați despre intenția dumneavoastră de a returna numărul comenzii, detaliile articolului returnat, o fotografie a articolului și numărul contului bancar de rambursare la&nbsp;<strong>aurtjuk@outlook.com</strong>
                    </div>
                    <div style={{ textAlign: "center" }}>- pentru a vă recupera banii, trebuie să ne furnizați numărul de cont bancar, care este singura metodă de plată posibilă</div>
                    <div style={{ textAlign: "center" }}>- termenul de restituire al banilor este de maximum 7 zile (rambursarea poate întarzia in cazul in care produsele ajung cu intarziere la noi)</div>
                    <div style={{ textAlign: "center" }}>- va trebui să folosiți propria companie de transport maritim pentru a ne returna articolul</div>
                    <div style={{ textAlign: "center" }}>- costul de retur este de <strong>30 LEI</strong> si se va scadea din valoarea sumei de returnat</div>
                    <div style={{ textAlign: "center" }}></div>
                    <div style={{ textAlign: "center" }}><strong>Ai obligatia legala de a avea grija de produse cat timp se afla in posesia ta.</strong></div>
                    <div style={{ textAlign: "center" }}><strong></strong></div>
                    <div style={{ textAlign: "center" }}><strong></strong></div>
                  </div>
                </div>
              </div> :
                id == 2 ? <div className="shopify-policy__container">
                  <div className="shopify-policy__title">
                    <h1>Termeni de utilizare</h1>
                  </div>

                  <div className="shopify-policy__body">
                    <div className="rte">
                      <div style={{ textAlign: "center" }}>
                        <p className="p1"><span className="s1">NOTĂ: Orice alte drepturi care există în legătură cu site-ul zoopet.cc sunt supuse legilor privind drepturile de autor și mărcile comerciale. Nu puteți reproduce pentru uz public sau comercial fără permisiunea scrisă expresă. Dacă doriți să reproduceți, să stocați, să transmiteți sau să utilizați în alt mod conținutul care apare pe site-ul nostru web, vă rugăm să ne contactați prin e-mail:<span className="Apple-converted-space">&nbsp;</span></span></p>
                        <h3 className="p1"><span className="s1">aurtjuk@outlook.com</span></h3>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                      </div>

                    </div>
                  </div>
                </div> : null}
      </div>
    </div>
  </div>
}