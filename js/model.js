const model = {
    app: {
      currentPage: null,
    },
    inputs: {
      profile: {
        name: null,
        age: null,
        position: null,
        class: null,
        email: null,
        bio: null,
        profilePicture: null,
        signatureStrengths: null,
      },
      adminSignatureStrengthEdit: {
        mainInfo: null,
        sideLinks: null,
        bottomLinks: null,
      },
      adminProfileView: {
        commentBox: null,
      },
      adminTeamView: {
        commentBox: null,
      },
      signatureStrengthList: {
        selected: null,
        color: null,
      },
    },
    data: {
      userSearch: null,
      users: [
        {
          id: "userOla76356",
          name: "Ola Nordmann",
          age: 27,
          position: "Elev",
          class: "Elev",
          mail: "navn@getacademy.no",
          bio: "Jeg er ny til kodefaget og lærer meg nå Javascript",
          profilePicture: "img",
        },
        {
          id: "per",
          name: "Per Nordmann",
          age: 22,
          position: "Elev",
          class: "Elev",
          mail: "navn@getacademy.no",
          bio: "Jeg er ny til kodefaget og lærer meg nå Javascript",
          profilePicture: "img",
        },
      ],
      userStrengths: [
        { userId: "userOla76356", strength: "honesty", rank: 1 },
        { userId: "userOla76356", strength: "humor", rank: 2 },
        { userId: "userOla76356", strength: "fairness", rank: 3 },
        { userId: "userOla76356", strength: "creativity", rank: 4 },
        { userId: "userOla76356", strength: "judgement", rank: 5 },
        { userId: "userOla76356", strength: "leadership", rank: -1 },
        { userId: "userOla76356", strength: "selfRegulation", rank: -2 },
        { userId: "userOla76356", strength: "bravery", rank: -3 },
      ],
      categories: [
        {
          id: 1,
          textNor: "Visdom",
          textEng: "Wisdom",
        },
        {
          id: 2,
          textNor: "Indre styrke",
          textEng: "Courage",
        },
        {
          id: 3,
          textNor: "Medmenneskelighet",
          textEng: "Humanity",
        },
        {
          id: 4,
          textNor: "Rettferdighet",
          textEng: "Justice",
        },
        {
          id: 5,
          textNor: "Måtehold",
          textEng: "Temperance",
        },
        {
          id: 6,
          textNor: "Transcendens",
          textEng: "Transcendence",
        },
      ],
      strengths: [
        {
          id: "creativity",
          textNor: "Kreativitet",
          textEng: "Creativity",
          category: 1,
          description: `
                      Når du står overfor noe du ønsker deg, 
                      er du enestående til å finne nye eller nyskapende, 
                      men samtidig passende måter å nå det målet på. 
                      Du er sjelden tilfreds med å gjøre noe på den vanlige måten. 
                      Denne styrken kan også kalles «praktisk intelligens», 
                      sunn fornuft eller «street smarts». 
                  `,
        },
        {
          id: "curiosity",
          textNor: "Nysgjerrighet",
          textEng: "Curiosity",
          category: 1,
          description: `
                      Du er nysgjerrig på verden og har et sterkt ønske om å oppleve den.
                      Du er fleksibel på ting som ikke passer med dine forventninger.
                      Nysgjerrige personer tolererer tvetydighet og er fascinert ved mulighetene.
                      Du er på jakt etter nye ting og kjeder deg sjelden.
                  `,
        },
        {
          id: "perspective",
          textNor: "Perspektiv",
          textEng: "Perspective",
          category: 1,
          description: `
                      Du har en måte å se verden på som gjør at både andre og du selv får forståelse av hva som skjer.
                      Andre personer oppsøker deg for å dra nytte av din erfaring, 
                      og du er i stand til å hjelpe dem til å løse problemer og kunne se ting på avstand og i perspektiv. 
                      Du har en god oppfatning og fornemmelse av hva som er viktig i livet.
                      `,
        },
        {
          id: "judgement",
          textNor: "Dømmekraft",
          textEng: "Judgement",
          category: 1,
          description: `
                      Du tenker gjennom ting og undersøker dem fra alle sider. 
                      Du trekker ikke forhastede konklusjoner, og du stoler bare på solide beviser for å ta avgjørelser.
                      Du er i stand til å forandre standpunkt. Du er veldig god til å sile ut informasjon objektivt og rasjonelt,
                      noe både du selv og andre kan dra fordel av. 
                      Du tenker ikke bare i retning av å favorisere deg selv eller å få bekreftet det du allerede hadde bestemt deg for.
                  `,
        },
        {
          id: "loveOfLearning",
          textNor: "Læringslyst",
          textEng: "Love of Learning",
          category: 1,
          description: `
                      Du elsker å lære nye ting, enten du er i klasserommet eller for deg selv. 
                      Du har alltid satt stor pris på skolen, å lese, museer, 
                      eller andre steder der du ser en mulighet til å lære. Der er noen kunnskapsområder der du er en ekspert,
                      og andre setter pris på din ekspertise. Du verdsetter høyt å lære mer om disse områdene, 
                      dette kan du gjøre helt på egen hånd uten at noen ber deg om det.
                  `,
        },
        {
          id: "bravery",
          textNor: "Tapperhet",
          textEng: "Bravery",
          category: 2,
          description: `
                      Du krymper deg ikke i møte med trusler, utfordringer, smerte eller vanskeligheter. 
                      Tapperhet er mer enn det å kunne stå gjennom en fysisk trussel. 
                      Det viser til intellektuelle og emosjonelle standpunkt som kan være upopulære, 
                      vanskelige eller farlige. Den tapre personen er i stand til å koble bort sammenhengen mellom emosjoner og oppførsel i møte med frykt, 
                      og motsetter seg ønsket om å flykte og står heller i den farlige situasjonen.
                      Fryktløshet, dristighet eller ubesindighet er ikke tapperhet.
                      Å møte fare til tross for frykt er det som kjennetegner tapperhet.
                  `,
        },
        {
          id: "honesty",
          textNor: "Ærlighet",
          textEng: "Honesty",
          category: 2,
          description: `
                      Du er en ærlig person, ikke bare sier du alltid sannheten,
                      men du lever også livet ditt på en ekte og autentisk måte. 
                      Du er jordnær og uten skjulte hensikter. 
                      Du viser dine hensikter og forpliktelser til andre og deg selv på en oppriktig måte,
                      både med ord og handling.
                  `,
        },
        {
          id: "perseverance",
          textNor: "Utholdenhet",
          textEng: "Perseverance",
          category: 2,
          description: `
                      Du gjør ferdig det du har begynt på. Du tar på deg vanskelige prosjekter og ferdigstiller dem,
                      vanligvis med god innstilling og minimalt med klager. Du gjør det du sier du skal gjøre og noen ganger mer,
                      aldri mindre. Utholdenhet betyr ikke hardnakket eller manisk jakt på uoppnåelige mål.
                      I stedet er du fleksibel og realistisk uten å være perfeksjonistisk.
                  `,
        },
        {
          id: "zest",
          textNor: "Livslyst",
          textEng: "Zest",
          category: 2,
          description: `
                      Du er en livlig person. Du kaster deg med kropp og sjel inn i de aktivitetene du deltar i.
                      Du våkner opp om morgenen og ser frem til resten av dagen.
                      Lidenskapen du bringer inn i aktivitetene virker smittende på andre.
                  `,
        },
        {
          id: "kindness",
          textNor: "vennlighet",
          textEng: "Kindness",
          category: 3,
          description: `
                      Du er snill og generøs overfor andre. Du er aldri for opptatt til å kunne gjøre noen en tjeneste. 
                      Du setter pris på å gjøre gode gjerninger for andre, selv om du ikke kjenner dem så godt.
                      Dine handlinger er veldig ofte styrte av andre personers beste interesser,
                      dette selv om handlingene dermed ikke nødvendigvis oppfyller dine egne umiddelbare ønsker og behov.
                  `,
        },
        {
          id: "love",
          textNor: "Kjærlighet",
          textEng: "Love",
          category: 3,
          description: `
                      Du verdsetter nære og fortrolige relasjoner med andre. 
                      Du har dype og vedvarende emosjoner for andre, som føler det samme for deg. 
                      Denne styrken er mer enn hva den vestlige oppfatningen av romantikk tilsier. 
                      Det handler om å ha veldige dype og sterke forbindelser til flere og mange personer.
                  `,
        },
        {
          id: "socialIntelligence",
          textNor: "Sosial Intelligens",
          textEng: "Social Intelligence",
          category: 3,
          description: `
                      Du er oppmerksom på andre personers motiver og følelser, og dine egne, 
                      og du kan reagere og respondere på en god måte i alle tilfeller. 
                      Du legger merke til forskjeller ved andre, spesielt med tanke på humør, 
                      temperament, motiv og hva de har til hensikt, og så kan du handle ut fra det du observerer. 
                      Du har også en finstilt tilgang til dine egne følelser og evnen til å bruke den tilgangen til å forstå og styre din egen oppførsel.
                  `,
        },
        {
          id: "fairness",
          textNor: "Likeverd",
          textEng: "Fairness",
          category: 4,
          description: `
                      Du lar ikke dine personlige følelser innvirke på hvordan du tenker om eller oppfatter andre personer. 
                      Du gir alle en sjanse. Du styrer dine handlinger i hverdagen ut fra større moralske prinsipper.
                      Du tar andres velferd, selv de du ikke kjenner så godt personlig, like alvorlig som din egen. 
                      Du kan enkelt sette til side dine egne personlige fordommer.
                  `,
        },
        {
          id: "teamwork",
          textNor: "Samarbeid",
          textEng: "Teamwork",
          category: 4,
          description: `
                      Du utmerker deg som medlem av en gruppe. Du er et lojalt og engasjert gruppemedlem. 
                      Du gjør alltid din del av arbeidet, og du arbeider hardt for at gruppen skal oppnå suksess.
                      Du verdsetter og følger gruppemålene og gruppens formål selv når disse er forskjellige fra dine egne. 
                      Du respekterer de som er i naturlige og rettmessige lederposisjoner, som lærere og trenere, og du identifiserer deg med gruppen.
                  `,
        },
        {
          id: "leadership",
          textNor: "Lederevner",
          textEng: "Leadership",
          category: 4,
          description: `
                      Du gjør en god jobb med å organisere aktiviteter og følger opp at de blir gjort. 
                      Du er en menneskelig, hensynsfull og effektiv leder. 
                      Du følger opp at gruppen får gjort arbeidet sitt samtidig som du opprettholder og vedlikeholder gode relasjoner mellom gruppemedlemmene.
                      Du er like human når det gjelder relasjoner mellom forskjellige grupper.
                  `,
        },
        {
          id: "forgiveness",
          textNor: "Tilgivelse",
          textEng: "Forgiveness",
          category: 5,
          description: `
                      Du tilgir de som har gjort noe mot deg. Du gir alltid personer en ny sjanse. 
                      Dine ledende prinsipper er nåde, ikke hevn. 
                      Tilgivelse representerer et sett av prososiale forandringer som skjer hos noen som har blitt støtt eller såret av noen andre. 
                      Når personer tilgir, blir deres motiver og handlinger i forhold til gjerningsmannen mer positive (f.eks vennlig, grei, generøs) og mindre negative (f.eks hevngjerrig, unnvikende) 
                  `,
        },
        {
          id: "prudence",
          textNor: "Forsiktighet",
          textEng: "Prudence",
          category: 5,
          description: `
                      Du er en forsiktig person. Du sier eller gjør ikke ting som du senere kunne komme til å angre på. 
                      Du venter til alle stemmene er inne før du selv handler. Du er langsiktig og overveier ting nøye.
                      Du er god til å motsette deg impulser om kortsiktige mål til fordel for måloppnåelse på lenger sikt.
                  `,
        },
        {
          id: "humility",
          textNor: "Ydmykhet",
          textEng: "Humility",
          category: 5,
          description: `
                      Du søker ikke etter rampelyset, men foretrekker å la dine prestasjoner og handlinger tale for seg selv. 
                      Du anser ikke deg selv som spesiell, og andre anerkjenner og verdsetter din beskjedenhet eller tilbakeholdenhet. 
                      Du er upretensiøs og viser ikke deg selv frem. 
                      Du ser dine egne ønsker, seire og nederlag som ganske uviktige i den store sammenhengen.
                  `,
        },
        {
          id: "selfRegulation",
          textNor: "Selvledelse",
          textEng: "Self-Regulation",
          category: 5,
          description: `
                      Du kan enkelt kontrollere dine ønsker, behov og impulser når det er nødvendig. 
                      Det er ikke nok å vite hva som er korrekt, du må også kunne handle ut fra denne kunnskapen. 
                      Når noe galt eller vondt skjer, kan du regulere dine egne emosjoner. 
                      Du kan reparere og nøytralisere dine egne negative følelser, og skape positive emosjoner på egen hånd
                  `,
        },
        {
          id: "hope",
          textNor: "Håp",
          textEng: "Hope",
          category: 6,
          description: `
                      Du forventer det beste av fremtiden, og du planlegger og arbeider for å 
                      oppnå det. Håp, optimisme og fremtidsrettet tankegang er en familie av 
                      styrker som representerer et positivt standpunkt til fremtiden. Å forvente 
                      at gode hendelser vil oppstå, å føle at disse vil skje som følge av at du prøver 
                      hardt, og planlegge for fremtiden. Du er ved godt mot i hverdagen og du har et målrettet liv.
                  `,
        },
        {
          id: "humor",
          textNor: "Humor",
          textEng: "Humor",
          category: 6,
          description: `
                      Du liker å le og få andre til å le. 
                      Du kan lett få øye på livets lyse sider. Du er leken og morsom.
                  `,
        },
        {
          id: "gratitude",
          textNor: "Takknemlighet",
          textEng: "Gratitude",
          category: 6,
          description: `
                      Du er oppmerksom på de gode tingene som skjer med deg, 
                      og du tar dem aldri for gitt. Du tar deg alltid tid til å takke for 
                      det som skjer. Takknemlighet er en verdsettelse av at noen andre gjør 
                      noe som er veldig bra. Vi er takknemlige når personer gjør noe bra for 
                      eller i forhold til oss, men vi kan også være mer generelt takknemlige 
                      for gode handlinger og overfor gode personer. Takknemlighet kan også rettes 
                      mot kilder som ikke er personer, Gud, naturen, livet. Det kan ikke rettes mot en selv.
                  `,
        },
        {
          id: "spirituality",
          textNor: "Spiritualitet",
          textEng: "Spirituality",
          category: 6,
          description: `
                      Du har sterk og sammenhengende tro på det høyere formålet og 
                      meningen med universet. Du vet hvor du passer inn i den store sammenhengen. 
                      Din tro former dine handlinger og er en kilde til å trøste og støtte deg. 
                      Du har en uttalt filosofi om livet, det religiøse og det verdslige, som 
                      plasserer seg som en del av et større univers. Livet har mening for deg som 
                      følge av din tilknytning til noe som er større enn deg selv.
                  `,
        },
        {
          id: "appreciationOfBeautyAndExcellence",
          textNor: "Verdsette skjønnhet",
          textEng: "Appreciation Of Beauty & Excellence",
          category: 6,
          description: `
                      Du stopper opp og lukter på rosene. Du verdsetter skjønnhet, 
                      dyktighet og ferdigheter innenfor en rekke områder: natur, kunst, vitenskap 
                      og den enorme variasjonen av evner og ferdigheter personer kan ha. Ofte ser 
                      eller hører du ting som får deg til å kjenne en dyptfølt ærefrykt eller beundring.
                  `,
        },
      ],
    },
  };