import { Fragment, h } from 'preact'
import { Project } from './base'

let FAGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="fa-github">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
  </svg>
)

let GithubLink = ({ href, children }) => (
  <Fragment>
    <FAGithub />{' '}
    <a href={href} target="_self">
      {children}
    </a>
  </Fragment>
)

let FAExternal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-external">
    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
  </svg>
)

let ExternalLink = ({ href, children }) => (
  <span>
    <FAExternal />{' '}
    <a href={href} target="_self">
      {children}
    </a>
  </span>
)

export let InlineLink = ({ href, children }) => (
  <span>
    <a href={href} target="_self">
      {children}
    </a>
  </span>
)

let FAFilePdf = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="fa-pdf">
    <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z" />
  </svg>
)

let PDFLink = ({ href, children }) => (
  <span>
    <FAFilePdf />{' '}
    <a href={href} target="extern">
      {children}
    </a>
  </span>
)

let Tags = ({ children }) => (
  <p class="tags">
    {children.split(/\s/).map((tag) => (
      <span>#{tag} </span>
    ))}
  </p>
)

let GalleryLink = ({ img, classname, alt }: { img: string; classname?: string; alt: string }) => (
  <div class="gallerylink">
    <img src={img} onClick="opengallery(this)" class={classname || 'img-3-2'} alt={alt} />
    <FAExternal />
  </div>
)

let Section = ({ children, project, header }: { children; project: Project; header: string }) => (
  <section id={project}>
    <div class="bg" />
    <h3>
      <div>{header}</div>
      <div></div>
    </h3>
    <div class="content">
      <h3>{header}</h3>
      {children}
    </div>
  </section>
)

export let Overview = () => (
  <article id="overview">
    {/* we need the sections element, because article is now the scroll container (since the gallery also is in the body) and scrollbars shall be on the right */}
    <header>
      <h1>works</h1>
      <h2>
        <p>computer science</p>
        <p>human computer interaction</p>
        <p>craft</p>
      </h2>
      <cite>
        <p>warum großschreiben wenn man nicht groß sprechen kann?</p>
        <p>why write uppercase if one cannot speak uppercase?</p>
        <p><br />(bauhaus)</p>
      </cite>
    </header>

    <Section project={Project.TV} header="tv production">
      <Tags>hci application mobile web agile</Tags>
      <p>
        tv production at speed, daily media. the well-tried production workflow should be adapted to modern technology. a serious
        challenge, since the efficiency of the huge planning board on the wall was hard to beat.
      </p>
      <p>
        on every project start i recall what i learnt at university about software projects: 50% never complete,
        30% are never used, 20% succeed. here i identified the risk to fall into the 30 pie, because we face the high benchmark of
        the current workflow and also need to cope with the transition effort.
      </p>
      <p>
        i considered the organisatorial aspects of human computer interaction (hci) critical. participatory design, attention on
        critical roles in the production workflow and perfect collaboration between all involved lead to success - we landed safely
        in the center of the 20 pie.
      </p>
      <p>
        the tool immediately became the indispensable information system for the (partly remote) team. production planning and tv
        programming by drag-and-drop is now available on phones, pads and web. 48578 production items have been entered while these
        letters were written.
      </p>
      <GalleryLink img="https://res.cloudinary.com/snuu/image/upload/f_auto,h_230,w_345/v1629150958/tv-large-2" alt="tv application small" />
    </Section>

    <Section project={Project.FFoqsi} header="ffoqsi">
      <Tags>web static-site-generator asp.net razor</Tags>
      <p>
        <ExternalLink href="https://www.ffoqsi.at/">www.ffoqsi.at</ExternalLink>
      </p>
      <p>ffoqsi communicates its research on food quality and safety with a static web page that is updated every few weeks.</p>
      <p>
        i suggested a static site generator setup where they update markdown files in visual studio code. inside markdown, html tag
        components make it easy to include content blocks like team members or photo collections. no available static site generator
        fullfilled the needs, so i wrote 'foxygen' in asp.net and razor.
      </p>
      <p>
        i was prepared to convert the page into a usual cms based solution if this way of site maintenance would be to raw for them
        - at my risk. but the opposite happened. all ffoqsi people involved in site updates gave very positive feedback and said
        that this way is much better than other tools they used before. convenience features like 1-click publishing to github via a
        browser bookmark have added to that. static site gens proved applicable beyond the developer community.
      </p>
      <GalleryLink
        img="https://res.cloudinary.com/snuu/image/upload/c_lfill,g_north,h_220,w_330,f_auto/v1628151278/ffoqsi-small"
        alt="ffoqsi webpage small"
      />
    </Section>

    <Section project={Project.Discretelogics} header="discretelogics">
      <Tags>c++ csharp python wpf ui high-performance</Tags>
      <p>
        <GithubLink href="https://github.com/discretelogics/TeaFiles.Net">teafiles.net</GithubLink>
        <br />
        <GithubLink href="https://github.com/discretelogics/TeaFiles.Cpp">teafiles.c++</GithubLink>
        <br />
        <GithubLink href="https://github.com/discretelogics/">github</GithubLink>
        <br />
        <ExternalLink href="http://discretelogics.com">website</ExternalLink>
      </p>
      <p>
        since time series storage is usually append only, persistence in plain files is a first choice. simple and fast. with the
        advent of 64bit address spaces, high performance processing of big data frequently utilizes file storage together with
        memory mapping.
      </p>
      <p>
        defined the <InlineLink href="http://discretelogics.com/resources/teafilespec/">teafiles</InlineLink> file format, that
        enables inclusion of metadata at the begin of such file to make larger collections of files holding raw structs managable.
      </p>
      <p>
        wrote teashell for easy data file browsing inside windows explorer. founded a company for tools around teafiles. with my
        cofounder wrote teahouse for efficient visualisation of very large data files.
      </p>
      <GalleryLink
        img="https://res.cloudinary.com/snuu/image/upload/h_220,w_330,f_auto/v1628151278/teahouse-small"
        alt="teahouse screenshot small"
      />
    </Section>

    <Section project={Project.ViennaGeo} header="vienna geo">
      <Tags>responsive web page</Tags>
      <p>
        <ExternalLink href="https://viennageo.github.io">website</ExternalLink>
        <br />
        <GithubLink href="https://github.com/viennageo/viennageo.github.io">repository</GithubLink>
      </p>
      <p>
        i founded und run a local meetup
        where we get all people involved in geo-information systems together to share experiences.
      </p>
      <p>
        the meetup's web page is pure static and hosted at github.
        i author it with a self written static site generator, that consists of 10 lines javascript and allows html componentisation via jsx.
      </p>
      <GalleryLink img="https://res.cloudinary.com/snuu/image/upload/h_220,w_330,f_auto/v1628151278/viennageo" alt="viennageo web page" />
    </Section>

    <Section project={Project.FileStructureWindow} header="f# file structure">
      <Tags>fsharp .net open-source vs-extension wpf</Tags>
      <p>
        <GithubLink href="https://github.com/snuup/FSharp-File-Structure-for-Visual-Studio">source code</GithubLink>
      </p>
      <p>
        f# is my favorite programming language. succinct expression of computations, superb domain modeling, a responsive pragmatic
        community around the best language designer and its interactive mode sets it apart from all other performant static typed
        languages. i find the latter indispensable for the design and analysis of complex algorithms.
      </p>
      <p>
        i am used to keep overview of code files with file structure windows (document outlines). visual studio lacked such window
        for f#, so i digged into the f# language service and built one. it is quick and a bit rough but satisfies my needs. no
        tests, just usage. positive community feedback on&nbsp;
        <InlineLink href="https://twitter.com/xosfaere/status/1262701565179310082">twitter</InlineLink> and&nbsp;
        <InlineLink href="https://marketplace.visualstudio.com/items?itemName=snuup.FSharpFileStructure&ssr=false#review-details">
          vs marketplace
        </InlineLink>
        .
      </p>
      <GalleryLink
        img="https://res.cloudinary.com/snuu/image/upload/c_crop,h_200,w_300,x_10,y_28,f_auto/v1628151278/fsharpfilestruct-small"
        alt="f# filestructure toolwindow small"
      />
    </Section>

    <Section project={Project.Klimpt} header="responsive webpages">
      <Tags>web mobile responsive</Tags>
      <p>
        <ExternalLink href="http://www.psychiater-klimpt.at/">psychiater-klimpt.at</ExternalLink>
        <br />
        <ExternalLink href="http://www.psychologiezentrum.at/">psychologiezentrum.at</ExternalLink>
      </p>
      <p>when i take the underground into the city, the mobile network breaks down after 3 stations. navigating websites halts.</p>
      <p>&lt;link rel="preload"&gt; mitigates such outages. when writing mobile web pages for 2 doctors i went further.</p>
      <p>
        the best navigation on small devices is scrolling - the whole screen is the handle for this gesture. since all content could
        fit on a single page here, the mobile version is a <b>single page</b>, the user navigates by scrolling up and down. soft
        background colors distinguish the sections while scrolling.
      </p>
      <p>
        the <b>desktop version</b> has one page per section but also loads in a single fetch. smooth transitions convey empathic
        human feeling. their fast speed (300ms) reflects the doctors determination to immediately act on patients concerns.
      </p>
      <div style="text-align:right">
        <GalleryLink
          img="https://res.cloudinary.com/snuu/image/upload/f_auto,h_330,w_330/v1628151278/docpages-small"
          alt="responsive webpages screenshots small"
          classname="img-1-1"
        />
      </div>
    </Section>

    <Section project={Project.TacidoNotes} header="tacido notes">
      <Tags>typescript viennajs</Tags>
      <p>
        <GithubLink href="https://github.com/snuup/tacidonotes">repository</GithubLink>
        <br />
        <PDFLink href="https://snuup.github.io/tacidonotes/tacido%20notes.pdf">presentation</PDFLink>
      </p>
      <p>
        combined the javascript client of dropbox, stanford javascript crypto library and a simple note editor/reader utilising
        browsers contenteditable into a <b>client side encrypting note taking app</b>. presented at the vienna js meetup. won a
        rasperry pie for best talk ;)
      </p>
      <GalleryLink
        img="https://res.cloudinary.com/snuu/image/upload/c_lfill,h_220,w_330,e_contrast:25,f_auto/v1628151278/tacido-notes-small"
        alt="tacido notes presentation image"
      />
    </Section>

    <Section project={Project.Sputnik4} header="sputnik4">
      <Tags>mobile recommendations readwriteweb collaboration design hci research .net csharp c++ javascript css</Tags>
      <p>
        before apple enabled the internet on phones, when phones and the web converged just so far, i invented, designed and
        implemented a recom&shy;mendation service targeted at mobile devices. implemented a cor&shy;relation engine engine that
        com&shy;putes results in single mil&shy;li&shy;second range via in memory computation.
      </p>
      <p>
        started as a student project as an open collabo&shy;rative filtering system - "recommendations in social context".
      </p>
      <GalleryLink
        img="https://res.cloudinary.com/snuu/image/upload/f_auto,c_crop,g_north,h_300,w_450,y_54/v1628268626/sputnik4-phones-small"
        alt="sputnik4 mobile phones picture"
      />
    </Section>

    <Section project={Project.BA} header="realtime analytics">
      <Tags>ui c++ realtime</Tags>
      <p>
        developed an analytics application for traders in a team of 5. wrote the realtime quoteboard and news feed but in particular
        the market profile, a specific analytics view used by derivative traders. for the complex visualisation wrote a widget
        library, that provides core functionalities like hittesting or roll hover effects in c++ . introduced clean object oriented
        design and model view controller architecture.
      </p>
      <GalleryLink
        img="https://res.cloudinary.com/snuu/image/upload/q_90,w_300,h_200,f_auto/v1628151278/realtime-analytics-application-small-large"
        alt="realtime analytics application screenshot small"
      />
    </Section>

    <Section project={Project.Chroma} header="chroma midi interface">
      <Tags>hardware software 6502</Tags>
      <p>
        the legendary rhodes chroma synthesizer has a computer interface but no midi, the standard that arrived after its
        production.
      </p>
      <p>
        i was asked to create a midi interface. after organizing technical documents soldered a parallel interface and a midi
        hardware interface for the commodore vic 20 (mind the φ2 line of the 6502 cpu). wrote software in machine language using raw
        mnemonics.
      </p>
      <p>
        adapted hard- and software for the rockwell 6511eab singlechip microcontroller. without an unaffordable emulator this was a
        blind flight but after erasing the eprom a hundred times with my parents sunray lamp it worked perfect. and it does since
        falco's first world tour. until today.
      </p>
      <GalleryLink
        img="https://res.cloudinary.com/snuu/image/upload/f_auto,q_90,w_300,h_200,e_sepia:80/v1628151278/chroma-synthesizer-opened"
        alt="rhodes chrome synthesizer opened"
      />
    </Section>

  </article>
)
