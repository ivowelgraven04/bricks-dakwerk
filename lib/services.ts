export type Service = {
  slug: string;
  title: string;
  short: string;
  heroTagline: string;
  intro: string;
  image: string;
  icon: "flat" | "maintain" | "moss" | "insulate" | "plastisol" | "handy" | "inspect" | "repair";
  includes: string[];
  suitableFor: string[];
  why: string[];
  urgent?: boolean;
};

export const services: Service[] = [
  {
    slug: "dakbedekking-vernieuwen",
    title: "Dakbedekking vernieuwen",
    short:
      "Complete vernieuwing van uw dakbedekking — strak, waterdicht en met lange levensduur.",
    heroTagline: "Uw dak duurzaam vernieuwd",
    intro:
      "Een versleten dakbedekking is een tikkende tijdbom. Bricks Dakwerken vernieuwt uw bitumen, EPDM of andere dakbedekking vakkundig, met hoogwaardige materialen en een nette afwerking die jaren meegaat.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    icon: "flat",
    includes: [
      "Verwijderen van bestaande dakbedekking",
      "Controle en herstel van de onderconstructie",
      "Aanbrengen van nieuwe bitumen, EPDM of kunststof",
      "Afwerking rondom randen, afvoeren en detailleringen",
    ],
    suitableFor: [
      "Platte daken van woningen en aanbouwen",
      "Garages, bergingen en bedrijfspanden",
      "Dakkapellen en uitbouwen",
      "Verouderde dakbedekking met lekkages of blaren",
    ],
    why: [
      "Hoogwaardige materialen van vertrouwde leveranciers",
      "Nette, strakke afwerking tot in het detail",
      "Duurzame oplossing met lange levensduur",
      "Helder advies over materiaalkeuze en kosten",
    ],
  },
  {
    slug: "dakonderhoud",
    title: "Dakonderhoud",
    short:
      "Periodiek onderhoud houdt uw dak in topconditie en voorkomt grote schade.",
    heroTagline: "Voorkom schade, plan tijdig onderhoud",
    intro:
      "Met regelmatig dakonderhoud spoort u kleine problemen op voordat ze uitgroeien tot grote, kostbare schade. Bricks Dakwerken voert grondige onderhoudsbeurten uit en adviseert gericht over de staat van uw dak.",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=80",
    icon: "maintain",
    includes: [
      "Controle van dakbedekking, naden en detailleringen",
      "Inspectie van goten, afvoeren en loodslabben",
      "Kleine herstelwerkzaamheden direct meenemen",
      "Duidelijke rapportage en onderhoudsadvies",
    ],
    suitableFor: [
      "Platte en hellende daken",
      "Particulieren en bedrijven in Zuid-Limburg",
      "Woningen ouder dan 10 jaar",
      "Panden met terugkerende klachten",
    ],
    why: [
      "Voorkomt dure reparaties op lange termijn",
      "Verlengt de levensduur van uw dak merkbaar",
      "Vast aanspreekpunt voor jaarlijks onderhoud",
      "Heldere prijzen en geen verrassingen",
    ],
  },
  {
    slug: "ontmossen",
    title: "Dak ontmossen",
    short:
      "Verwijder mos en vuil van uw dak voor een strakke uitstraling en langere levensduur.",
    heroTagline: "Een schoon dak, langer mee",
    intro:
      "Mos op uw dak houdt vocht vast, beschadigt dakpannen en verkort de levensduur van het dak. Bricks Dakwerken ontmost uw dak grondig en vakkundig, zodat het er weer strak uitziet en beter bestand is tegen weer en wind.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    icon: "moss",
    includes: [
      "Handmatig en mechanisch verwijderen van mos",
      "Reinigen van dakpannen en voegen",
      "Controle en vervanging van beschadigde pannen",
      "Optionele nabehandeling tegen terugkeer van mos",
    ],
    suitableFor: [
      "Pannendaken met zichtbare mosgroei",
      "Woningen in vochtige of bosrijke omgeving",
      "Daken ouder dan 10 jaar zonder recent onderhoud",
      "Particulieren die hun dak willen opknappen",
    ],
    why: [
      "Grondige, veilige werkwijze met juist materieel",
      "Ook inspectie en kleine reparaties tijdens de klus",
      "Zichtbaar resultaat en langere levensduur",
      "Scherpe prijs voor een vakkundige uitvoering",
    ],
  },
  {
    slug: "dakisolatie",
    title: "Dakisolatie",
    short:
      "Isoleer uw dak vakkundig en verlaag direct uw energiekosten en CO₂-uitstoot.",
    heroTagline: "Comfortabel wonen, lagere energierekening",
    intro:
      "Een goed geïsoleerd dak bespaart energie, houdt warmte binnen in de winter en koelte in de zomer. Bricks Dakwerken plaatst hoogwaardige dakisolatie, afgestemd op uw woning en wensen, voor direct voelbaar comfort en lagere kosten.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    icon: "insulate",
    includes: [
      "Advies over het juiste isolatiesysteem",
      "Aanbrengen van isolatieplaten of -deken",
      "Dampdichte en winddichte afwerking",
      "Combinatie mogelijk met nieuwe dakbedekking",
    ],
    suitableFor: [
      "Oudere woningen zonder of met beperkte isolatie",
      "Renovatieprojecten en verduurzaming",
      "Platte en hellende daken",
      "Particulieren die willen besparen op energie",
    ],
    why: [
      "Merkbaar lagere energiekosten",
      "Hoger wooncomfort door stabiele temperatuur",
      "Ervaring met diverse isolatiesystemen",
      "Bijdrage aan verduurzaming en CO₂-reductie",
    ],
  },
  {
    slug: "plastisol",
    title: "Plastisol dakbedekking",
    short:
      "Specialistische plastisol bekleding — duurzaam, weerbestendig en strak afgewerkt.",
    heroTagline: "Sterke plastisol afwerking op maat",
    intro:
      "Plastisol is een robuuste, weerbestendige dakbekleding die bekend staat om zijn lange levensduur en strakke uitstraling. Bricks Dakwerken plaatst plastisol vakkundig — perfect voor bedrijfspanden, schuren, stallen en moderne woningen.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    icon: "plastisol",
    includes: [
      "Montage van plastisol dakplaten op maat",
      "Zorgvuldige bevestiging en detaillering",
      "Afwerking van nokken, hoeken en aansluitingen",
      "Advies over kleurkeuze en plaatdikte",
    ],
    suitableFor: [
      "Bedrijfspanden en loodsen",
      "Schuren, stallen en garages",
      "Moderne woningen en bijgebouwen",
      "Renovatie van bestaande plaatdaken",
    ],
    why: [
      "Specialist in plastisol dakbedekking",
      "Strakke, professionele afwerking",
      "Lange levensduur en minimaal onderhoud",
      "Ruim assortiment aan kleuren en profielen",
    ],
  },
  {
    slug: "kluswerkzaamheden",
    title: "Kluswerkzaamheden",
    short:
      "Vakkundige klussen rondom het huis: van onderhoud tot kleinere verbouwingen.",
    heroTagline: "Eén vakman voor al uw klussen",
    intro:
      "Naast dakwerk pakt Bricks Dakwerken ook diverse klussen rondom het huis professioneel aan. Eén vertrouwd aanspreekpunt voor onderhoud, kleine verbouwingen en praktische oplossingen in en om uw woning.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=80",
    icon: "handy",
    includes: [
      "Onderhoud aan gevels, kozijnen en buitenmuren",
      "Schutting-, terras- en tuinwerkzaamheden",
      "Kleine verbouwingen en reparaties",
      "Voorbereiding, uitvoering en opruiming inbegrepen",
    ],
    suitableFor: [
      "Particulieren die zoeken naar een vaste klusser",
      "Klussen die andere bedrijven te klein vinden",
      "Onderhoud aan oudere woningen",
      "Eigenaren van bedrijfspanden of huurwoningen",
    ],
    why: [
      "Eén aanspreekpunt voor meerdere klussen",
      "Praktische, vakkundige uitvoering",
      "Nette werkplek en duidelijke afspraken",
      "Flexibele planning in Zuid-Limburg",
    ],
  },
  {
    slug: "dakinspectie",
    title: "Dakinspectie",
    short:
      "Grondige inspectie van uw dak met helder advies en concrete actiepunten.",
    heroTagline: "Inzicht in de staat van uw dak",
    intro:
      "Een goede dakinspectie voorkomt onverwachte schade en geeft u rust. Bricks Dakwerken loopt uw dak grondig na, brengt knelpunten in kaart en adviseert concreet over onderhoud of herstel — zonder verplichtingen.",
    image:
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a?auto=format&fit=crop&w=1600&q=80",
    icon: "inspect",
    includes: [
      "Controle van dakbedekking en detaillering",
      "Inspectie van goten, afvoeren en aansluitingen",
      "Beoordeling van loodwerk en kitnaden",
      "Helder inspectierapport met foto's en advies",
    ],
    suitableFor: [
      "Woningen ouder dan 10 jaar",
      "Eigenaren met terugkerende klachten",
      "Kopers die zekerheid willen voor aankoop",
      "VvE's en bedrijfseigenaren",
    ],
    why: [
      "Objectief oordeel door ervaren dakdekker",
      "Heldere rapportage in gewone taal",
      "Vroege signalering voorkomt dure schade",
      "Vrijblijvend advies, geen verplichtingen",
    ],
  },
  {
    slug: "dakreparatie",
    title: "Dakreparatie",
    short:
      "Snelle, vakkundige reparatie van lekkages, losse pannen en beschadigde dakbedekking.",
    heroTagline: "Snel herstel, blijvend resultaat",
    intro:
      "Een kleine schade kan snel uitgroeien tot een groot probleem. Bricks Dakwerken repareert uw dak vakkundig en duurzaam — van een enkele losse pan tot grotere lekkages en beschadigingen aan de dakbedekking.",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1600&q=80",
    icon: "repair",
    includes: [
      "Reparatie van lekkages en zwakke plekken",
      "Vervangen van losse of gebroken dakpannen",
      "Herstel van naden, scheuren en blaren",
      "Vernieuwen van kitnaden en loodaansluitingen",
    ],
    suitableFor: [
      "Plotselinge lekkages of zichtbare schade",
      "Stormschade en losgewaaide pannen",
      "Slijtage aan oudere daken",
      "Particulieren en bedrijven in Zuid-Limburg",
    ],
    why: [
      "Snelle reactie en nette uitvoering",
      "Heldere diagnose en prijs vooraf",
      "Kwalitatieve materialen, duurzaam resultaat",
      "Ook beschikbaar voor spoedklussen",
    ],
    urgent: true,
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
