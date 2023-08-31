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
              <div className="shopify-policy__body">
                <div className="rte">
                  <div></div>
                  <div className="shopify-policy__container" style={{ textAlign: "center" }}>
                    <div className="shopify-policy__body">
                      <div className="rte">Vă mulțumim pentru vizitarea croiala.com (denumit în continuare „Site-ul”).<br /><br />Această politică de confidențialitate și securitate („Politică”) descrie informațiile pe care le colectăm despre dumneavoastră pe site și datele mele atunci când vizitați magazinul nostru sau comunicați sau comunicați prin <span>croiala.com</span>, modul în care folosim informațiile personale și unele dintre măsurile de securitate luăm. Pentru a proteja informațiile și opțiunile dvs. de a revizui și/sau revizui și/sau limita utilizarea de către noi a acestor informații.<br /><br />Această politică face parte din termenii și condițiile de utilizare care guvernează site-ul web și este obligatorie pentru toți utilizatorii site-ului.<br /><br />Dacă aveți vreo obiecție la această Politică de confidențialitate, trebuie să încetați imediat utilizarea acestui site web.<br /><br />Cum folosim datele dvs. personale?<br />Prin furnizarea datelor dvs. personale, sunteți de acord ca <span>croiala.com</span> să utilizeze datele colectate pentru a ne îndeplini obligațiile față de dvs. și pentru a vă oferi serviciile la care v-ați așteptat.<br /><br />Avem nevoie de datele dumneavoastră personale în următoarele scopuri:<br /><br />- Creați-vă contul personal pe <span>croiala.com</span> (de exemplu, numele și adresa dvs. de e-mail)<br /><br />- pentru a vă procesa cererea (cum ar fi numele, adresa și detaliile bancare)<br /><br />- Posibilitatea de a trimite notificări prin SMS privind starea livrării (de exemplu, numărul dvs. de mobil)<br /><br />- pentru a vă putea trimite oferte de marketing, cum ar fi buletine informative și cataloagele noastre (cum ar fi adresa dvs. de e-mail și numele)<br /><br />- Posibilitatea de a vă contacta dacă există probleme cu livrarea articolului dvs. (de exemplu, numărul de telefon, adresa)<br /><br />Pentru a ne permite să răspundem la întrebările dvs. și să vă anunțăm cu privire la serviciile noi sau modificate (cum ar fi adresa dvs. de e-mail)<br /><br /><br /><br />Vom păstra datele dumneavoastră doar atât timp cât este necesar pentru a vă oferi servicii sau conform prevederilor legale.<br /><br />Nu putem șterge datele dumneavoastră dacă există cerințe legale de stocare (de exemplu, reguli de contabilitate) sau dacă există o bază legală pentru păstrarea datelor (de exemplu, continuarea relației contractuale).<br /><br />Datele non-personale sunt utilizate așa cum este descris mai sus și așa cum este permis altfel de legea aplicabilă, inclusiv prin combinarea datelor ne-personale cu datele personale.<br /><br />În plus, monitorizăm utilizarea site-ului și modelele de trafic pentru a îmbunătăți designul site-ului și produsele și serviciile pe care le oferim și pentru a determina ce oferte, promoții sau informații să vă trimitem.<br /><br />Pentru a vă servi mai bine, este posibil să combinăm informațiile personale pe care ni le furnizați online prin intermediul dispozitivului dvs. mobil, în magazinele noastre sau prin intermediul centrelor noastre de asistență pentru clienți.<br /><br />De asemenea, putem combina aceste informații cu informații disponibile public și informații pe care le primim din referințe încrucișate cu parteneri selectați și alții. Combinând aceste informații, putem să comunicăm mai bine cu dvs. despre produsele și serviciile noastre, evenimentele și promoțiile speciale și să vă personalizăm mai bine experiența de cumpărături.<br /><br /><br />Aveți dreptul de a solicita informații despre datele dumneavoastră personale deținute de noi.<br />Dacă datele dumneavoastră sunt incorecte, incomplete sau irelevante, puteți solicita ca informațiile să fie corectate sau șterse. De asemenea, aveți dreptul de a solicita, anual, gratuit, documentație scrisă a informațiilor personale pe care le deținem despre dumneavoastră în fișierul contului dumneavoastră.<br /><br />Pentru a solicita acest document, vă rugăm să scrieți la Serviciul Clienți <span>croiala.com</span>. Vă puteți retrage oricând consimțământul pentru utilizarea datelor în scopuri de marketing (de exemplu, pentru a vă trimite cataloage, buletine informative sau oferte). Ne puteți contacta telefonic sau prin e-mail.<br /><br /><br />Puteți vizita contul personal pentru a vă actualiza informațiile personale.<br />Vă rugăm să rețineți, totuși, că informațiile dvs. personale ale contului sunt protejate de numele dvs. de utilizator și parola.<br /><br />Sunteți responsabil pentru menținerea securității numelui de utilizator și a parolei, deoarece orice acțiune întreprinsă în timp ce vă conectați la contul dvs. este responsabilitatea dvs.<br /><br /><br />Nu vom vinde informațiile dumneavoastră către terți.<br />Cu toate acestea, împărtășim date cu terți atunci când efectuăm tranzacții, îndeplinim servicii, în scopuri administrative sau conform prevederilor legale.<br /><br />Orice date transmise către terți sunt folosite pentru a îndeplini obligațiile <span>croiala.com</span> și pot furniza, de asemenea, datele dumneavoastră cu caracter personal unor organizații precum consiliere de credit sau agenții de colectare a datoriilor în scopul verificării creditului, verificării identității, monitorizării ratingurilor de credit și colectării datoriilor. .<br /><br />În plus, vă vom împărtăși datele dacă este cerut de lege sau pentru a preveni fraudele potențiale sau suspectate. În plus, <span>croiala.com</span> poate fi fuzionat cu o altă parte, reorganizat corporativ, vândut sau cumpărat toate sau o parte din activele noastre, iar datele dumneavoastră personale pot fi partajate. Dacă nu doriți să vă împărtășim datele personale în aceste moduri, vă rugăm să nu ni le furnizați.<br /><br /><br />Un cookie este o bucată de date stocată pe hard diskul unui utilizator care conține informații despre utilizator.<br />Folosim atât cookie-uri de sesiune, cât și cookie-uri persistente. Cookie-urile ne permit să urmărim și să țintim interesele utilizatorilor în general, analizând zone și produse populare pentru a îmbunătăți experiența viitoare a site-ului nostru.<br /><br />Cookie-urile nu deteriorează sistemul informatic sau fișierele dumneavoastră, iar aceste cookie-uri pot fi citite, modificate sau șterse doar de site-ul web care v-a transmis specificul cookie.<br /><br />Dacă nu doriți să colectați informații prin utilizarea cookie-urilor, majoritatea browserelor au proceduri simple care vă permit să ștergeți cookie-urile existente, să respingeți automat cookie-urile sau vă oferă opțiunea de a refuza sau accepta transmiterea anumitor cookie-uri către dvs. calculator.<br /><br />Puteți șterge cu ușurință cookie-urile de pe computerul sau dispozitivul dvs. mobil utilizând browserul dvs.</div>
                    </div>
                  </div>
                  <div id="shopify-section-sections--18842861961523__footer" className="shopify-section shopify-section-group-footer-group" style={{ textAlign: "center" }}>
                    <div className="footer__content-top page-width">
                      <div className="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet">
                        <div className="footer-block grid__item footer-block--menu"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
              id == 1 ? <div className="shopify-policy__container">
                <div className="shopify-policy__body">
                  <div className="rte">
                    <div style={{ textAlign: "center" }}><span>NOTĂ: Orice alte drepturi care există în legătură cu site-ul&nbsp;croiala.com sunt supuse legilor privind drepturile de autor și mărcile comerciale. Nu puteți reproduce pentru uz public sau comercial fără permisiunea scrisă expresă. Dacă doriți să reproduceți, să stocați, să transmiteți sau să utilizați în alt mod conținutul care apare pe site-ul nostru web, vă rugăm să ne contactați prin e-mail:&nbsp;support@croiala.ntesmail.com</span></div>
                  </div>
                </div>
              </div> :
                id == 2 ? <div className="shopify-policy__container">
                  <div className="shopify-policy__body">
                    <div className="rte">
                      <div style={{ textAlign: "center" }}></div>
                      <div className="shopify-policy__title" style={{ textAlign: "center" }}>
                        <h1>Politica de retur</h1>
                      </div>
                      <div className="shopify-policy__body" style={{ textAlign: "center" }}>
                        <div className="rte">
                          <strong>Pentru a beneficia de restituirea banilor, te rugam sa ai in vedere urmatoarele conditii de returnare a produselor:</strong><br /><br /><em>-&nbsp;<strong>NU SE POT RETURNA PRODUSELE FOLOSITE!</strong></em><br /><em>- produsele nu vor prezenta semne de uzura</em><br /><em>- produsele nu vor fi deteriorate si nu vor avea accesorii lipsa (bretele, etc...)</em><br /><em>- instiintarea pentru returnarea produselor sa fie facuta in termen de<span>&nbsp;<strong>7</strong></span><strong>&nbsp;zile calendaristice de la momentul primirii coletului</strong></em><br /><em>- returnarea produselor se va face intr-un ambalaj care nu permite deteriorarea acestora pe durata transportului</em><br /><em>- ne rezervam dreptul de a refuza coletele deteriorate sau produsele care prezinta semne de uzura</em><br />
                        </div>
                        <div className="rte"></div>
                        <div className="rte">
                          <strong>Modalitate de returnare:</strong><br />
                        </div>
                        <div className="rte"><strong></strong></div>
                        <div className="rte">- tă rugăm să ne informați despre intenția dumneavoastră de a returna numărul comenzii, detaliile articolului returnat, o fotografie a articolului și numărul contului bancar de rambursare la <strong>support@croiala.com</strong><br />- pentru a vă recupera banii, trebuie să ne furnizați numărul de cont bancar, care este singura metodă de plată posibilă<br />- <span>termenul de restituire al banilor este de maximum 7 zile (rambursarea poate întarzia in cazul in care produsele ajung cu intarziere la noi)</span><br />- va trebui să folosiți propria companie de transport maritim pentru a ne returna articolul<br />-&nbsp;<span>costul de retur este de&nbsp;<strong>30</strong></span><strong>&nbsp;LEI</strong><span>&nbsp;si se va scadea din valoarea sumei de returnat</span><br /><br /><strong>Ai obligatia legala de a avea grija de produse cat timp se afla in posesia ta.</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> :
                  id == 3 ? <div className="normal_main_content page-width">
                    <section id="shopify-section-template--19853327958293__main" className="shopify-section spaced-section"><div className="page-width">
                      <div className="rte">
                        <div style={{ textAlign: "center" }}><span>Croiala, un brand de shopping dedicat oferirii de haine elegante si tinute la moda romanilor. Numele de marcă „Croiala” provine din cuvântul românesc pentru „croitor”, care simbolizează căutarea noastră persistentă pentru măiestria pură. Fondatorul, Blair, are cerințe extrem de ridicate pentru textura și estetica hainelor. Bazându-se pe anii ei de experiență în achiziționarea a nenumărate articole de îmbrăcăminte, ea a pregătit o echipă profesionistă pentru a selecta îmbrăcăminte de modă de înaltă calitate și elegantă, pantofi și genți rafinate pentru a vă crea propriul stil individual. Urmărește acum Croiala, pășește în lumea modei românești și alătură-te comunității noastre de iubitori de modă.</span></div>
                      </div>
                    </div>
                    </section>
                  </div> : null}
      </div>
    </div>
  </div>
}