/* Client-side i18n: English (default), Polish, Korean. Preference saved in localStorage. */
(function () {
  const STORAGE_KEY = "mirero.locale";
  const SUPPORTED = /** @type {const} */ (["en", "pl", "ko"]);

  /** @type {Record<string, Record<string, string>>} */
  const T = {
    en: {
      "meta.title": "MIRERO | Danpla box manufacturing (Poland)",
      "meta.description":
        "MIRERO manufactures Danpla boxes in Poland. Our main business is Danpla box production. We can also supply related plastic packaging, handling equipment, films, and light line support when your project needs it.",
      "meta.ogTitle": "MIRERO | Danpla box manufacturing (Poland)",
      "meta.ogDescription":
        "Danpla box production in Poland, plus related industrial packaging and equipment when your program calls for it.",
      "meta.twitterTitle": "MIRERO | Danpla box manufacturing (Poland)",
      "meta.twitterDescription":
        "Danpla boxes manufactured in Poland, with complementary packaging and line support available.",

      "skip.link": "Skip to content",
      "brand.homeAria": "MIRERO - home",
      "brand.kicker": "For the future",

      "nav.primary": "Primary",
      "nav.services": "Services",
      "nav.who": "Who We Are",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.quote": "Request a quote",
      "nav.menuOpen": "Open menu",
      "nav.menuClose": "Close menu",

      "lang.groupAria": "Language",

      "hero.kicker": "Danpla box manufacturing in Poland.",
      "hero.title1": "We specialize in ",
      "hero.titleAccent": "Danpla box production",
      "hero.title2": " for manufacturers.",
      "hero.lead":
        "We manufacture Danpla boxes at our own plant in Poland. Boxes are our daily work. We also supply related packaging, trolleys and racks, and selective line support when it supports your box program.",
      "hero.getQuote": "Get a quote",
      "hero.viewServices": "View services",
      "hero.statsAria": "Highlights",
      "hero.stat1k": "Established",
      "hero.stat1v": "Oct. 26, 2012",
      "hero.stat2k": "Main focus",
      "hero.stat2v": "Danpla box manufacturing",
      "hero.stat3k": "Also available",
      "hero.stat3v": "Related packaging & equipment",
      "hero.visualAria": "Hero summary",
      "hero.cardChip1": "MIRERO",
      "hero.cardChip2": "For the future",
      "hero.sampleBadge": "MIRERO",
      "hero.sampleTitle": "Danpla box production",
      "hero.sampleSub": "Sizes, dividers, and runs built to your specification.",
      "hero.pill1": "Danpla box",
      "hero.pill2": "Custom dimensions",
      "hero.pill3": "Dividers & inserts",
      "hero.pill4": "Plastic boxes & pallets",
      "hero.bottom":
        "Strong boxes, clear specs, and deliveries aligned to how your line actually runs.",
      "hero.exploreLink": "Explore services →",

      "services.heading": "Services",
      "services.sub":
        "Danpla boxes are the centre of our work. The items below are the main ways we support customers around that core.",
      "services.c1h": "Danpla box manufacturing",
      "services.c1p":
        "In-house production of Danpla boxes, with plastic boxes and pallets and PET/PP trays when your drawing calls for them.",
      "services.c2h": "Trolleys / pipe racks",
      "services.c2p":
        "Trolleys, working/inspection tables, die racks, jigs, and pipe racks (including FIFO racks) for line-side handling.",
      "handling.heading": "Trolleys and pipe racks",
      "handling.sub":
        "Trolleys, modular pipe racks, FIFO gravity flow, and workstations from real factory programs, laid out for how materials move next to your line.",
      "handling.photosAria": "Trolley and pipe rack photos",
      "services.c3h": "Complementary products & support",
      "services.c3p":
        "Protection films, light sorting or inspection, and light rework are available when they fit your packaging program. They support box delivery, not replace it.",

      "danpla.heading": "Danpla products",
      "danpla.sub":
        "A look at Danpla boxes and interiors from our own production: dividers, inserts, and line-ready setups.",
      "danpla.photosAria": "Danpla photos",

      "cs.heading": "CS Activities (Sorting, Inspection & Rework)",
      "cs.sub":
        "Dedicated teams and controlled workstations for sorting, visual inspection, and light rework. Clear process flow and disciplined handling help components stay within spec for your line or your customer.",
      "cs.photosAria": "CS activities - sorting, inspection, and rework",

      "logos.heading": "Top customers & partners",
      "logos.sub": "A few of the manufacturing teams we’ve supported with Danpla box production and line-side handling.",
      "logos.gridAria": "Client logos",

      "who.heading": "Who we are",
      "who.body":
        "President: Chang‑Sun (Michael) Choi. Established Oct. 26, 2012. MIRERO is a Danpla box manufacturer, built to keep production lines supplied with reliable, on-time deliveries.",
      "who.metaOffice": "Location",
      "who.metaPlant": "Plant & office",
      "who.metaContact": "Contacts",
      "who.contactBtn": "Contact us",

      "approach.heading": "How we work",
      "approach.body":
        "Box-first planning: confirm the drawing and key requirements, lock quantities and dates, then manufacture and deliver. Add-ons fit around the box schedule, not the other way around.",
      "approach.b1": "Drawing & specification confirmed early",
      "approach.b2": "Line-ready interiors (dividers, inserts) when needed",
      "approach.b3": "On-time deliveries with clear communication",
      "approach.btn": "See all services",
      "approach.mapAria": "Services map",
      "approach.pack": "Packaging",
      "approach.packSub": "Danpla boxes in-house; related plastic packaging when required",
      "approach.handle": "Handling",
      "approach.handleSub": "Trolleys, tables, pipe racks (FIFO)",
      "approach.prot": "Optional add-ons",
      "approach.protSub": "Films or light CS-style support, only where the job needs it",

      "cta.heading": "Planning your next Danpla box run?",
      "cta.body":
        "Send dimensions, quantities, and how the box is used on the line. You’ll get a manufacturing-led answer centred on the box program first.",
      "cta.btn": "Request a quote",

      "faq.heading": "FAQ",
      "faq.sub": "Quick answers about what we do and what we need to prepare your quote.",
      "faq1.q": "What information do you need for a quote?",
      "faq1.a":
        "Application, internal dimensions, quantity, target delivery date, print or labelling needs, and any special handling (stacking, ESD, dividers, etc.).",
      "faq2.q": "What packaging products do you provide?",
      "faq2.a": "Danpla box (manufacturing in MIRERO), plastic boxes/plastic pallets, and PET/PP trays.",
      "faq3.q": "Do you provide trolleys, racks, and work tables?",
      "faq3.a":
        "Yes. Trolley solutions, working/inspection tables, die racks, jigs, and pipe racks including FIFO racks.",
      "faq4.q": "Do you offer anything besides Danpla boxes?",
      "faq4.a":
        "Yes. We can also supply protection films, trolleys, racks, tables, and similar items, including light sorting, inspection, or rework support, usually as part of a packaging program led by box production.",

      "contact.heading": "Request a quote",
      "contact.sub":
        "Send a quick note about your Danpla box needs. We'll reply with clear next steps, starting from manufacturing.",
      "contact.mini1h": "Contact",
      "contact.mini2h": "Addresses",

      "form.labelName": "Full name",
      "form.phName": "Your name",
      "form.labelCompany": "Company",
      "form.phCompany": "Your company",
      "form.labelEmail": "Email",
      "form.phEmail": "name@company.com",
      "form.labelPhone": "Phone (optional)",
      "form.phPhone": "+48 …",
      "form.labelMessage": "What do you need?",
      "form.phMessage":
        "Example: Danpla boxes for line X - inner/outer dimensions, qty per month, print spec; mention any add-ons (dividers, film, trolleys) second.",
      "form.submit": "Send request",
      "form.hint": "This sends directly to our inbox.",
      "form.statusNeedsSetup":
        "Form is not connected yet. Replace the Formspree URL in the form action.",
      "form.statusSending": "Sending…",
      "form.statusSuccess": "Thanks. Your message has been sent.",
      "form.statusError": "Sorry. Something went wrong. Please try again.",

      "footer.logoAlt": "MIRERO logo",
      "footer.tag": "For the future",
      "footer.linksAria": "Footer",
      "footer.copyBefore": "©",
      "footer.copyAfter": "MIRERO. All rights reserved.",

      "mail.subjectPrefix": "Quote request",
      "mail.subjectJoin": " - ",
      "mail.lineName": "Name",
      "mail.lineCompany": "Company",
      "mail.lineEmail": "Email",
      "mail.linePhone": "Phone",
      "mail.requestHeader": "Request",
      "mail.footer": "Sent from MIRERO website",
    },

    pl: {
      "meta.title": "MIRERO | Produkcja skrzynek Danpla (Polska)",
      "meta.description":
        "MIRERO produkuje skrzynki Danpla w Polsce. Naszą główną działalnością jest produkcja skrzynek Danpla. Możemy też dostarczać powiązane opakowania, urządzenia transportowe, folie i lekkie wsparcie liniowe, gdy projekt tego wymaga.",
      "meta.ogTitle": "MIRERO | Produkcja skrzynek Danpla (Polska)",
      "meta.ogDescription":
        "Produkcja skrzynek Danpla w Polsce oraz powiązane opakowania przemysłowe i sprzęt, gdy program tego wymaga.",
      "meta.twitterTitle": "MIRERO | Produkcja skrzynek Danpla (Polska)",
      "meta.twitterDescription":
        "Skrzynki Danpla produkowane w Polsce, z dostępnym uzupełniającym opakowaniem i wsparciem liniowym.",

      "skip.link": "Przejdź do treści",
      "brand.homeAria": "MIRERO - strona główna",
      "brand.kicker": "Ku przyszłości",

      "nav.primary": "Menu główne",
      "nav.services": "Usługi",
      "nav.who": "O nas",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.quote": "Poproś o wycenę",
      "nav.menuOpen": "Otwórz menu",
      "nav.menuClose": "Zamknij menu",

      "lang.groupAria": "Język",

      "hero.kicker": "Produkcja skrzynek Danpla w Polsce.",
      "hero.title1": "Specjalizujemy się w ",
      "hero.titleAccent": "produkcji skrzynek Danpla",
      "hero.title2": " dla producentów.",
      "hero.lead":
        "Produkujemy skrzynki Danpla w naszym własnym zakładzie w Polsce. Skrzynki to nasza codzienna praca. Dostarczamy też powiązane opakowania, wózki i regały oraz selektywne wsparcie liniowe, gdy wspiera program skrzynek.",
      "hero.getQuote": "Poproś o wycenę",
      "hero.viewServices": "Zobacz usługi",
      "hero.statsAria": "Najważniejsze informacje",
      "hero.stat1k": "Data założenia",
      "hero.stat1v": "26 paź 2012",
      "hero.stat2k": "Rdzeń działalności",
      "hero.stat2v": "Produkcja skrzynek Danpla",
      "hero.stat3k": "Dodatkowo",
      "hero.stat3v": "Powiązane opakowania i sprzęt",
      "hero.visualAria": "Podsumowanie",
      "hero.cardChip1": "MIRERO",
      "hero.cardChip2": "Ku przyszłości",
      "hero.sampleBadge": "MIRERO",
      "hero.sampleTitle": "Produkcja skrzynek Danpla",
      "hero.sampleSub": "Wymiary, przegródki i serie pod Twoją specyfikację.",
      "hero.pill1": "Skrzynka Danpla",
      "hero.pill2": "Wymiary na zamówienie",
      "hero.pill3": "Przegródki i wkłady",
      "hero.pill4": "Skrzynki i palety plastikowe",
      "hero.bottom":
        "Mocne skrzynki, jasna specyfikacja i dostawy dopasowane do realnej pracy linii.",
      "hero.exploreLink": "Poznaj usługi →",

      "services.heading": "Usługi",
      "services.sub":
        "Skrzynki Danpla są centrum naszej pracy. Poniżej - główne sposoby wsparcia klientów wokół tego rdzenia.",
      "services.c1h": "Produkcja skrzynek Danpla",
      "services.c1p":
        "Produkcja własna skrzynek Danpla oraz skrzynki i palety plastikowe i tacki PET/PP, gdy tak przewiduje rysunek.",
      "services.c2h": "Wózki / regały rurowe",
      "services.c2p":
        "Wózki, stoły robocze/kontrolne, regały na matryce, jigi oraz regały rurowe (w tym FIFO) przy obsłudze przy linii.",
      "handling.heading": "Wózki i regały rurowe",
      "handling.sub":
        "Wózki, modułowe regały rurowe, grawitacyjny przepływ FIFO oraz stanowiska z realnych programów fabrycznych, ułożone pod przepływ materiałów przy linii.",
      "handling.photosAria": "Zdjęcia wózków i regałów rurowych",
      "services.c3h": "Produkty uzupełniające i wsparcie",
      "services.c3p":
        "Folie ochronne, lekkie sortowanie lub inspekcja oraz lekkie przeróbki są dostępne, gdy pasują do programu opakowań. Wspierają dostawy skrzynek, a nie je zastępują.",

      "danpla.heading": "Produkty Danpla",
      "danpla.sub":
        "Spojrzenie na skrzynki Danpla i wnętrza z naszej produkcji: przegródki, wkłady i zestawy gotowe pod linię.",
      "danpla.photosAria": "Zdjęcia Danpla",

      "cs.heading": "Działania CS (sortowanie, inspekcja i przeróbki)",
      "cs.sub":
        "Dedykowane zespoły i kontrolowane stanowiska pod sortowanie, inspekcję wizualną i lekkie przeróbki. Jasny przepływ procesu i dyscyplinowana obsługa pomagają utrzymać detale w specyfikacji na linii i u odbiorcy.",
      "cs.photosAria": "CS - sortowanie, inspekcja i przeróbki",

      "logos.heading": "Czołowi klienci i partnerzy",
      "logos.sub":
        "Kilka zespołów produkcyjnych, które wsparliśmy produkcją skrzynek Danpla i obsługą przy linii.",
      "logos.gridAria": "Loga klientów",

      "who.heading": "Kim jesteśmy",
      "who.body":
        "Prezes: Chang‑Sun (Michael) Choi. Założona 26 października 2012. MIRERO to producent skrzynek Danpla, skoncentrowany na zaopatrywaniu linii produkcyjnych w niezawodne, terminowe dostawy.",
      "who.metaOffice": "Lokalizacja",
      "who.metaPlant": "Zakład i biuro",
      "who.metaContact": "Kontakty",
      "who.contactBtn": "Skontaktuj się",

      "approach.heading": "Jak pracujemy",
      "approach.body":
        "Planowanie „box-first”: potwierdzamy rysunek i kluczowe wymagania, zamykamy ilości i terminy, potem produkujemy i dostarczamy. Dodatki dopasowujemy do harmonogramu skrzynek, a nie odwrotnie.",
      "approach.b1": "Rysunek i specyfikacja potwierdzone na początku",
      "approach.b2": "Wnętrza pod linię (przegródki, wkłady) gdy trzeba",
      "approach.b3": "Terminowe dostawy i jasna komunikacja",
      "approach.btn": "Zobacz wszystkie usługi",
      "approach.mapAria": "Mapa usług",
      "approach.pack": "Opakowania",
      "approach.packSub": "Skrzynki Danpla w MIRERO; powiązane opakowania plastikowe w razie potrzeby",
      "approach.handle": "Obsługa",
      "approach.handleSub": "Wózki, stoły, regały rurowe (FIFO)",
      "approach.prot": "Dodatki (opcjonalnie)",
      "approach.protSub": "Folie lub lekkie wsparcie w stylu CS, tylko tam, gdzie zlecenie tego wymaga",

      "cta.heading": "Planujesz kolejną serię skrzynek Danpla?",
      "cta.body":
        "Podaj wymiary, ilości i sposób użycia skrzynki na linii. Otrzymasz odpowiedź prowadzoną z perspektywy produkcji, z naciskiem na program skrzynek na pierwszym miejscu.",
      "cta.btn": "Poproś o wycenę",

      "faq.heading": "FAQ",
      "faq.sub": "Krótkie odpowiedzi o tym, co robimy i czego potrzebujemy, by przygotować wycenę.",
      "faq1.q": "Jakich informacji potrzebujecie do wyceny?",
      "faq1.a":
        "Zastosowanie, wymiary wewnętrzne, ilość, docelowa data dostawy, potrzeby dotyczące nadruku lub etykiet oraz specjalna obsługa (stosowanie, ESD, przegródki itp.).",
      "faq2.q": "Jakie opakowania oferujecie?",
      "faq2.a": "Skrzynka Danpla (produkcja w MIRERO), skrzynki/palety plastikowe oraz tacki PET/PP.",
      "faq3.q": "Czy dostarczacie wózki, regały i stoły?",
      "faq3.a":
        "Tak. Rozwiązania wózkowe, stoły robocze/kontrolne, regały na matryce, przyrządy oraz regały rurowe, w tym FIFO.",
      "faq4.q": "Czy oferujecie coś poza skrzynkami Danpla?",
      "faq4.a":
        "Tak. Możemy też dostarczać folie ochronne, wózki, regały, stoły i podobne elementy, w tym lekkie sortowanie, inspekcję lub wsparcie w przeróbkach, zwykle w ramach programu opakowań prowadzonego przez produkcję skrzynek.",

      "contact.heading": "Poproś o wycenę",
      "contact.sub":
        "Wyślij krótką wiadomość o potrzebach skrzynek Danpla. Odpowiemy z jasnymi kolejnymi krokami, zaczynając od produkcji.",
      "contact.mini1h": "Kontakt",
      "contact.mini2h": "Adresy",

      "form.labelName": "Imię i nazwisko",
      "form.phName": "Twoje imię i nazwisko",
      "form.labelCompany": "Firma",
      "form.phCompany": "Twoja firma",
      "form.labelEmail": "E-mail",
      "form.phEmail": "nazwa@firma.pl",
      "form.labelPhone": "Telefon (opcjonalnie)",
      "form.phPhone": "+48 …",
      "form.labelMessage": "Czego potrzebujesz?",
      "form.phMessage":
        "Np. skrzynki Danpla do linii X - wymiary wewn./zewn., ilość/mies., nadruk; dodatki (przegródki, folia, wózki) na końcu.",
      "form.submit": "Wyślij zapytanie",
      "form.hint": "Wiadomość trafi bezpośrednio do naszej skrzynki.",
      "form.statusNeedsSetup":
        "Formularz nie jest jeszcze podłączony. Wstaw poprawny adres Formspree w atrybucie action.",
      "form.statusSending": "Wysyłanie…",
      "form.statusSuccess": "Dziękujemy. Wiadomość została wysłana.",
      "form.statusError": "Coś poszło nie tak. Spróbuj ponownie.",

      "footer.logoAlt": "Logo MIRERO",
      "footer.tag": "Ku przyszłości",
      "footer.linksAria": "Stopka",
      "footer.copyBefore": "©",
      "footer.copyAfter": "MIRERO. Wszelkie prawa zastrzeżone.",

      "mail.subjectPrefix": "Zapytanie o wycenę",
      "mail.subjectJoin": " - ",
      "mail.lineName": "Imię i nazwisko",
      "mail.lineCompany": "Firma",
      "mail.lineEmail": "E-mail",
      "mail.linePhone": "Telefon",
      "mail.requestHeader": "Zapytanie",
      "mail.footer": "Wysłano ze strony MIRERO",
    },

    ko: {
      "meta.title": "미레로(MIRERO) | 단플라 박스 제조(폴란드)",
      "meta.description":
        "MIRERO는 폴란드에서 단플라 박스를 제조합니다. 저희의 주요 사업은 단플라 박스 생산입니다. 프로젝트에 필요할 경우 관련 포장, 취급 설비, 필름, 경량 라인 지원도 공급할 수 있습니다.",
      "meta.ogTitle": "미레로(MIRERO) | 단플라 박스 제조(폴란드)",
      "meta.ogDescription":
        "폴란드에서의 단플라 박스 생산과, 프로그램에 따라 필요한 관련 산업용 포장 및 설비.",
      "meta.twitterTitle": "미레로(MIRERO) | 단플라 박스 제조(폴란드)",
      "meta.twitterDescription":
        "폴란드에서 제조된 단플라 박스와 보완 포장 및 라인 지원 제공.",

      "skip.link": "본문으로 건너뛰기",
      "brand.homeAria": "MIRERO - 홈",
      "brand.kicker": "미래를 향해",

      "nav.primary": "주요 메뉴",
      "nav.services": "서비스",
      "nav.who": "저희 소개",
      "nav.faq": "FAQ",
      "nav.contact": "문의",
      "nav.quote": "견적 요청",
      "nav.menuOpen": "메뉴 열기",
      "nav.menuClose": "메뉴 닫기",

      "lang.groupAria": "언어",

      "hero.kicker": "폴란드 단플라 박스 제조.",
      "hero.title1": "저희는 제조업체를 위한 ",
      "hero.titleAccent": "단플라 박스 생산",
      "hero.title2": "에 특화되어 있습니다.",
      "hero.lead":
        "저희는 폴란드 자체 공장에서 단플라 박스를 생산합니다. 박스가 저희의 일상 업무입니다. 박스 프로그램을 지원할 때 관련 포장, 트롤리 및 랙, 선택적 라인 지원도 공급합니다.",
      "hero.getQuote": "견적 받기",
      "hero.viewServices": "서비스 보기",
      "hero.statsAria": "주요 정보",
      "hero.stat1k": "설립",
      "hero.stat1v": "2012년 10월 26일",
      "hero.stat2k": "주요 초점",
      "hero.stat2v": "단플라 박스 제조",
      "hero.stat3k": "추가 제공",
      "hero.stat3v": "관련 포장·설비",
      "hero.visualAria": "히어로 요약",
      "hero.cardChip1": "MIRERO",
      "hero.cardChip2": "미래를 향해",
      "hero.sampleBadge": "MIRERO",
      "hero.sampleTitle": "단플라 박스 생산",
      "hero.sampleSub": "사양에 맞춘 치수, 칸막이, 생산 러닝.",
      "hero.pill1": "단플라 박스",
      "hero.pill2": "맞춤 치수",
      "hero.pill3": "칸막이·인서트",
      "hero.pill4": "플라스틱 박스/파렛트",
      "hero.bottom": "튼튼한 박스, 명확한 사양, 라인 실사에 맞춘 납품.",
      "hero.exploreLink": "서비스 살펴보기 →",

      "services.heading": "서비스",
      "services.sub":
        "단플라 박스가 저희 업무의 중심입니다. 아래 항목은 그 핵심을 중심으로 고객을 지원하는 주요 방식입니다.",
      "services.c1h": "단플라 박스 제조",
      "services.c1p":
        "도면에 따라 필요할 때 플라스틱 박스·파렛트 및 PET/PP 트레이를 포함한 자체 단플라 박스 생산.",
      "services.c2h": "트롤리 / 파이프 랙",
      "services.c2p":
        "라인 사이드 취급을 위한 트롤리, 작업/검사 테이블, 다이 랙, 지그, 파이프 랙(FIFO 랙 포함).",
      "handling.heading": "트롤리 및 파이프 랙",
      "handling.sub":
        "실제 공장 프로그램의 트롤리, 모듈형 파이프 랙, FIFO 중력류, 작업대로, 라인 옆 자재 이동 방식에 맞게 배치되어 있습니다.",
      "handling.photosAria": "트롤리 및 파이프 랙 사진",
      "services.c3h": "보완 제품 및 지원",
      "services.c3p":
        "보호 필름, 가벼운 선별 또는 검사, 경미한 재작업은 포장 프로그램에 맞을 때 제공합니다. 박스 납품을 지원하며 대체하지 않습니다.",

      "danpla.heading": "단플라 제품",
      "danpla.sub":
        "자체 생산 단플라 박스와 내부 구성을 살펴봅니다: 칸막이, 인서트, 라인 준비 세팅.",
      "danpla.photosAria": "단플라 사진",

      "cs.heading": "CS 활동(선별, 검사 및 재작업)",
      "cs.sub":
        "선별, 육안 검사, 경미한 재작업을 위한 전담 팀과 관리된 작업대입니다. 명확한 공정 흐름과 규율 있는 취급으로 부품이 귀사 라인 또는 고객에게 사양 내로 유지되도록 돕습니다.",
      "cs.photosAria": "CS 활동 - 선별, 검사, 재작업",

      "logos.heading": "최고 고객 및 파트너",
      "logos.sub":
        "단플라 박스 생산과 라인 사이드 취급으로 지원한 제조 팀 중 일부입니다.",
      "logos.gridAria": "고객 로고",

      "who.heading": "저희 소개",
      "who.body":
        "대표: 최창선(Michael) 최. 2012년 10월 26일 설립. MIRERO는 단플라 박스 제조업체로, 신뢰할 수 있는 정시 납품으로 생산 라인에 공급하는 데 초점을 맞춥니다.",
      "who.metaOffice": "위치",
      "who.metaPlant": "공장 및 사무실",
      "who.metaContact": "연락처",
      "who.contactBtn": "문의하기",

      "approach.heading": "업무 방식",
      "approach.body":
        "박스 우선 계획: 도면과 핵심 요구사항을 확인하고 수량과 납기를 확정한 뒤 생산·납품합니다. 부가 항목은 박스 일정에 맞춰 배치되며 그 반대가 아닙니다.",
      "approach.b1": "도면·사양을 초기에 확정",
      "approach.b2": "필요 시 칸막이·인서트 등 내부 구성",
      "approach.b3": "정시 납품과 명확한 커뮤니케이션",
      "approach.btn": "전체 서비스 보기",
      "approach.mapAria": "서비스 맵",
      "approach.pack": "포장",
      "approach.packSub": "자체 단플라 박스; 필요 시 관련 플라스틱 포장",
      "approach.handle": "취급",
      "approach.handleSub": "트롤리, 테이블, 파이프 랙(FIFO)",
      "approach.prot": "선택 부가 항목",
      "approach.protSub": "필름 또는 경량 CS 스타일 지원은 해당 작업에 필요한 경우에만 제공합니다.",

      "cta.heading": "다음 단플라 박스 물량을 준비 중이신가요?",
      "cta.body":
        "치수, 수량, 라인에서 박스 사용 방식을 알려 주세요. 박스 프로그램을 최우선으로 하는 제조 중심의 답변을 드립니다.",
      "cta.btn": "견적 요청",

      "faq.heading": "FAQ",
      "faq.sub": "저희가 하는 일과 견적 준비에 필요한 사항에 대한 간단한 답변입니다.",
      "faq1.q": "견적에 어떤 정보가 필요한가요?",
      "faq1.a":
        "용도, 내부 치수, 수량, 목표 납기일, 인쇄 또는 라벨 요구사항, 특수 취급(적층, ESD, 칸막이 등).",
      "faq2.q": "어떤 포장 제품을 제공하나요?",
      "faq2.a": "단플라 박스(미레로 자체 제조), 플라스틱 박스/파렛트, PET/PP 트레이.",
      "faq3.q": "트롤리, 랙, 작업 테이블도 제공하나요?",
      "faq3.a":
        "예. 트롤리 솔루션, 작업/검사 테이블, 다이 랙, 지그, FIFO 랙을 포함한 파이프 랙.",
      "faq4.q": "단플라 박스 외에도 공급하나요?",
      "faq4.a":
        "예. 보호 필름, 트롤리, 랙, 테이블 및 이와 유사 품목, 가벼운 선별·검사·재작업 지원도 공급할 수 있으며, 보통 박스 생산이 주도하는 포장 프로그램의 일부입니다.",

      "contact.heading": "견적 요청",
      "contact.sub":
        "단플라 박스 요구사항에 대해 짧은 메모를 보내 주세요. 제조부터 시작하는 명확한 다음 단계로 답변드립니다.",
      "contact.mini1h": "연락처",
      "contact.mini2h": "주소",

      "form.labelName": "이름",
      "form.phName": "이름을 입력하세요",
      "form.labelCompany": "회사",
      "form.phCompany": "회사명",
      "form.labelEmail": "이메일",
      "form.phEmail": "name@company.com",
      "form.labelPhone": "전화(선택)",
      "form.phPhone": "+48 …",
      "form.labelMessage": "필요하신 내용은 무엇인가요?",
      "form.phMessage":
        "예: 라인 X용 단플라 박스 - 내·외부 치수, 월 수량, 인쇄 사양; 칸막이·필름·트롤리 등은 뒤에 적어 주세요.",
      "form.submit": "요청 보내기",
      "form.hint": "메시지가 바로 저희 받은편지함으로 전송됩니다.",
      "form.statusNeedsSetup":
        "아직 폼이 연결되지 않았습니다. form의 action에 Formspree URL을 넣어 주세요.",
      "form.statusSending": "전송 중…",
      "form.statusSuccess": "감사합니다. 메시지가 전송되었습니다.",
      "form.statusError": "오류가 발생했습니다. 다시 시도해 주세요.",

      "footer.logoAlt": "미레로 로고",
      "footer.tag": "미래를 향해",
      "footer.linksAria": "푸터",
      "footer.copyBefore": "©",
      "footer.copyAfter": "MIRERO. 모든 권리 보유.",

      "mail.subjectPrefix": "견적 요청",
      "mail.subjectJoin": " - ",
      "mail.lineName": "이름",
      "mail.lineCompany": "회사",
      "mail.lineEmail": "이메일",
      "mail.linePhone": "전화",
      "mail.requestHeader": "요청 내용",
      "mail.footer": "MIRERO 웹사이트에서 발송",
    },
  };

  let locale = "en";

  function readInitialLocale() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(/** @type {any} */ (saved))) return saved;
    } catch {
      /* ignore */
    }
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("pl")) return "pl";
    if (nav.startsWith("ko")) return "ko";
    return "en";
  }

  function t(key) {
    const bag = T[locale] || T.en;
    const fallback = T.en;
    const v = bag[key];
    if (v != null && String(v).length) return v;
    const fb = fallback[key];
    return fb != null ? fb : key;
  }

  function setMetaByName(name, content) {
    const el = document.querySelector(`meta[name="${name}"]`);
    if (el) el.setAttribute("content", content);
  }

  function setMetaByProperty(prop, content) {
    const el = document.querySelector(`meta[property="${prop}"]`);
    if (el) el.setAttribute("content", content);
  }

  function applyMeta() {
    document.title = t("meta.title");
    setMetaByName("description", t("meta.description"));
    setMetaByProperty("og:title", t("meta.ogTitle"));
    setMetaByProperty("og:description", t("meta.ogDescription"));
    setMetaByName("twitter:title", t("meta.twitterTitle"));
    setMetaByName("twitter:description", t("meta.twitterDescription"));
  }

  function applyDomStrings() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        el.placeholder = t(key);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (!key) return;
      if (el instanceof HTMLImageElement) el.alt = t(key);
    });
  }

  function setHtmlLang() {
    const lang = locale === "pl" ? "pl" : locale === "ko" ? "ko" : "en";
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("is-locale-ko", locale === "ko");
  }

  function syncLangButtons() {
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const loc = btn.getAttribute("data-locale");
      const active = loc === locale;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyTranslations() {
    setHtmlLang();
    applyMeta();
    applyDomStrings();
    syncLangButtons();
    window.dispatchEvent(new CustomEvent("mirero:locale", { detail: { locale } }));
  }

  function bindLangButtons() {
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.getAttribute("data-locale");
        if (!next || next === locale) return;
        if (!SUPPORTED.includes(/** @type {any} */ (next))) return;
        locale = next;
        try {
          localStorage.setItem(STORAGE_KEY, locale);
        } catch {
          /* ignore */
        }
        applyTranslations();
      });
    });
  }

  function mailStrings() {
    return {
      subjectPrefix: t("mail.subjectPrefix"),
      subjectJoin: t("mail.subjectJoin"),
      lineName: t("mail.lineName"),
      lineCompany: t("mail.lineCompany"),
      lineEmail: t("mail.lineEmail"),
      linePhone: t("mail.linePhone"),
      requestHeader: t("mail.requestHeader"),
      footer: t("mail.footer"),
    };
  }

  function init() {
    locale = readInitialLocale();
    applyTranslations();
    bindLangButtons();
  }

  window.MIREROI18n = {
    t,
    getLocale: () => locale,
    /** @param {'en'|'pl'|'ko'} next */
    setLocale(next) {
      if (!SUPPORTED.includes(next)) return;
      locale = next;
      try {
        localStorage.setItem(STORAGE_KEY, locale);
      } catch {
        /* ignore */
      }
      applyTranslations();
    },
    mailStrings,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
