import { Fragment, h } from 'preact'
import { cc, Project } from './base'
import { InlineLink } from './overview'

declare global {
  namespace preact.JSX {
    interface HTMLAttributes {
      onMouseDown?: string
      onClick?: string
    }
  }
}

let Link = ({ children }) => {
  let href = children
  let text = href.replace(/^https?:\/\/(www\.)?/, '')
  return (
    <a href={href} target="_self">
      {text}
    </a>
  )
}

let FullImg = (attrs) => (
  <div class="imgcontainer" onClick="toggleexplain()">
    <img {...attrs} src="/img/blank.gif" data-src={attrs.src} alt={attrs.alt || ''} />
  </div>
)

let Nav = ({ projname, total, current }: { projname: string; total?: number; current?: number }) => {
  total ??= 0
  current ??= 0
  let cn: any[] = []
  if (total > 1) {
    for (let i = 1; i <= total; i++) {
      cn.push(<span class={cc('num', current != 1 && i != current && 'hide', i > current && 'fut')}>{i}</span>)
    }
  }
  return (
    <nav style={`width:${(total - current + 1) * 100}vw`}>
      <div class="sticky">
        <span class={cc('pro', current > 1 && 'hide')}>{projname}</span>
        {cn}
      </div>
    </nav>
  )
}

// to create an inner border, need 2 divs
let Explain = ({ children }) => (
  <div class="explainbox" onClick="toggleexplain()">
    <div class="explain">{children}</div>
  </div>
)

let Buttons = () => (
  <Fragment>
    <svg id="btnclose" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="100" y2="100" />
      <line x1="100" y1="0" x2="0" y2="100" />
    </svg>
    <div id="leftfield">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="44px" height="44px" id="btnleft" class="chevron">
        <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
      </svg>
    </div>
    <div id="rightfield">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="44px" height="44px" id="btnright" class="chevron">
        <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
      </svg>
    </div>
  </Fragment>
)

let KeyMapDescription = ({ children, op, keys }) => (
  <tr>
    <td>{op}</td>
    <td>{children}</td>
    <td>
      {keys.split(' ').map((key) => (
        <kbd>{key}</kbd>
      ))}
    </td>
  </tr>
)

// add sections requires adaptation of the stylesheet: grid-template-columns: repeat(23, 100vw);
export let Gallery = () => (
  <Fragment>
    <article id="gallery">
      <Buttons />
      <section class="tv" id={Project.TV}>
        <Nav projname="tv production" />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/c_scale,f_auto,q_80/v1629150961/tv-large-2"
          alt="tv application screenshot large"
        />
        <Explain>
          <h4>design forces</h4>
          <p>
            the established workflow centered around a <b>huge physical board</b>. design naturally departed visualising this
            board, a regular grid proved best after iterations.
          </p>
          <p>
            producers evaluate many items against each other. dense presentation of items that expand on mouse click provide{' '}
            <b>overview</b>.
          </p>
          <p>
            {' '}
            producers decide and act fast. <b>hovering</b> an item brings up buttons to start <b>inplace editing</b>. all pre
            production decisions are done on this single page. this aligns cognitive activity with the previous workflow at the
            physical board - the board always stays in front.
          </p>
          <p>
            this is television, glamour and glory! avoided a typical 'database ui' with forms and lists. its not a game either,
            but tough production, so staid serious and practical. integrated corporate and program ci where possible.
          </p>
          <p>other pages allow tv programming by drag and drop or ressource planning.</p>
        </Explain>
      </section>
      <section class="ffoqsi1" id={Project.FFoqsi}>
        <Nav projname="ffoqsi" total={2} current={1} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/c_crop,g_center,h_900,q_70,w_1300,x_20,f_auto/v1628288125/ffoqsi-large"
          alt="ffoqsi web-page large"
        />
        <Explain>
          <p>
            research center ffoqsi had graphic elements, visual corporate identity and visual web page design ready, when they
            asked me to finalize the design, implement and host the page and provide a way to update site content.
                    </p>
          <p>
            developers favor github pages and static site generators to get fast hosting, version control and ease of operation
            for free. i took the challenge to train ffoqsi personell this developer way of site maintenance.
                    </p>
          <Link>http://ffoqsi.at</Link>
        </Explain>
      </section>
      <section class="ffoqsi2" id={Project.FFoqsi}>
        <Nav projname="ffoqsi" total={2} current={2} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/f_auto,q_30/v1629151770/ffoqsi-ssg-large"
          alt="ffoqsi - static site generator"
        />
        <Explain>
          <h4>site generator</h4>
          <p>
            ffoqsi personell writes content in markdown. inside markdown they use components i prepared for them, for instance
            components for team members, scientific partner profiles or foto galleries. the site generator 'foxygen' serves an
            internal preview. with a single click, by fetching a bookmarked page, the preview is published to github.
                    </p>
          <p>
            all involved persons praised this tool as being better than systems they used before. static site gens apply beyond
            the developer community.
                    </p>
          <p>the implementation is based on razor view engine's tag helpers - components in tag form.</p>
        </Explain>
      </section>
      <section class="discretelogics" id={Project.Discretelogics}>
        <Nav projname="discretelogics" />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/f_auto/v1629294479/discretelogics-large"
          alt="discretelogics overview large"
        />
        <Explain>
          <p>discretelogics provides tools for time series analysis and processing.</p>
          <p>
            wrote the teafile file format definition and 3 platform agnostic open source apis for this file format in{' '}
            <InlineLink href="https://github.com/discretelogics/TeaFiles.Net-Time-Series-Storage-in-Files">c#</InlineLink>,
                        <InlineLink href="https://github.com/discretelogics/TeaFiles.Cpp-Time-Series-Storage-in-Files">c++</InlineLink> and{' '}
            <InlineLink href="https://github.com/discretelogics/TeaFiles.Py-Time-Series-Storage-in-Files">python</InlineLink>.
                        unicredit italy released one for the{' '}
            <InlineLink href="https://github.com/andreaferretti/nim-teafiles">nim</InlineLink> language.
                    </p>
          <p>
            teahouse and teashell are windows applications, written in <b>.net</b> and <b>wpf</b>.
                    </p>
          <p>created all visuals like corporate logo, icons and the web page (with github pages + jekyll).</p>
          <p>
            <Link>http://discretelogics.com</Link>
          </p>
        </Explain>
      </section>
      <section class="viennageo" id={Project.ViennaGeo}>
        <Nav projname="vienna-geo" />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/f_auto/v1628151278/viennageo"
          alt="vienna-geo website screenshot large"
          width={1600}
          height={900}
        />
        <Explain>
          <p>
            simple static web page.</p>
          <p>the page has a lighthouse score of 100/100/100/100 for desktop
          and 99/100/100/100 for mobile. the 1 percent off is for the short (10min) cache intervals on images.
          lighthouse suggests a year. well, for now that 99 score does not force me to put the images onto another host.
          tough netlify might be a good alternative to github pages.
          </p>
          <p><a href="http://viennageo.github.io">website</a> (best on mobile phone)</p>
        </Explain>
      </section>
      <section class="toolwindow" id={Project.FileStructureWindow}>
        <Nav projname="f# toolwindow" />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/v1629155891/toolwindow-large"
          alt="f# file structure toolwindow large"
        />
        <Explain>
          <h4>visual studio toolwindow</h4>
          <ul>
            <li>f# language service</li>
            <li>wpf</li>
            <li>visual studio integration</li>
          </ul>
          <InlineLink href="https://github.com/snuup/FSharp-File-Structure-for-Visual-Studio">repository</InlineLink>
        </Explain>
      </section>
      <section class="klimpt" id={Project.Klimpt}>
        <Nav projname="responsive web pages" />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/f_auto/v1629293057/docs-pages-large"
          alt="responsive web pages large"
          width={1600}
          height={900}
        />
        <Explain>
          <h5>use case</h5>
          <p>the user gets the name of the doctor, is located in the train or at home, wants to inform herself and then call.</p>
          <h5>design</h5>
          <ul>
            <li>mobile page loads in a single fetch</li>
            <li>on desktop shows animated page transitions</li>
            <li>can call directly: href="tel:0680 55 55 555"</li>
            <li>google maps entry</li>
          </ul>
          <p>did not use lighthouse during development but still has 100 / 92 / 93 / 100</p>
          <p>
            <Link>http://www.psychiater-klimpt.at</Link>
            <br />
            <Link>http://www.psychologiezentrum.at</Link>
          </p>
        </Explain>
      </section>
      <section class="tacidonotes" id={Project.TacidoNotes}>
        <Nav projname="tacido notes" />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/f_auto,q_53/v1629153619/tacido-notes-large"
          alt="tacido notes large"
        />
        <Explain>
          <p>client side encrypting note taking app. built with</p>
          <ul>
            <li>drop box js api</li>
            <li>stanford javascript crypto library</li>
            <li>contenteditable - i believed in this technique for a long time</li>
            <li>typescript (use it since 0.8)</li>
          </ul>
          <Link>https://github.com/snuup/tacidonotes</Link>
        </Explain>
      </section>
      <section class="sputnik-1" id={Project.Sputnik4}>
        <Nav projname="sputnik4" total={7} current={1} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/f_auto/v1629153792/sputnik-large-1"
          alt="sputnik4 screenshot 1 large"
        />
        <Explain>
          <p>a universal recommendation service, started with events in london + vienna</p>
          <p>programmed in c# and c++ with in memory processing for results within 1 millisecond.</p>
          <p>here the skin for london ...</p>
        </Explain>
      </section>
      <section class="sputnik-2" id={Project.Sputnik4}>
        <Nav projname="sputnik4" total={7} current={2} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/q_60/v1629154099/sputnik-large-2"
          alt="sputnik4 screenshot 2 large"
        />
        <Explain>
          <p>... and here the skin for vienna</p>
          <p>
            i always found skeuomorphism in screen design too dominant, underestimating users. the 5 buttons in the header are
            the only slight skeuomorph elements, justified as a contrast to the remainung ui, which was flat. this was in 2003,
                        many years later flat <span class="strike"> was </span> is en vogue. same with the large fotos that set the mood
                        here.
                    </p>
        </Explain>
      </section>
      <section class="sputnik-3" id={Project.Sputnik4}>
        <Nav projname="sputnik4" total={7} current={3} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/q_50/v1629154098/sputnik-large-3"
          alt="sputnik4 screenshot 3 large"
        />
        <Explain>
          <p>users read recommended events based on their own ratings and the ratings of selected other users.</p>
        </Explain>
      </section>
      <section class="sputnik-4" id={Project.Sputnik4}>
        <Nav projname="sputnik4" total={7} current={4} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/q_75/v1629185988/sputnik-large-4"
          alt="sputnik4 screenshot 4 large"
        />
        <Explain>
          <p>the weekly overview</p>
        </Explain>
      </section>
      <section class="sputnik-5" id={Project.Sputnik4}>
        <Nav projname="sputnik4" total={7} current={5} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/q_51/v1629188267/sputnik-large-5"
          alt="sputnik4 screenshot 5 large"
        />
        <Explain>
          <p>channel selection - similar to newsgroups</p>
        </Explain>
      </section>
      <section class="sputnik-6" id={Project.Sputnik4}>
        <Nav projname="sputnik4" total={7} current={6} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/q_49/v1629185987/sputnik-large-6"
          alt="sputnik4 screenshot 6 large"
        />
        <Explain>
          <p>users find likeminded users with similar ratings ...</p>
        </Explain>
      </section>
      <section class="sputnik-7" id={Project.Sputnik4}>
        <Nav projname="sputnik4" total={7} current={7} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/f_auto/v1629294013/sputnik-large-7"
          alt="sputnik4 screenshot 7 large"
        />
        <Explain>
          <p>and use the service on their mobile phones.</p>
        </Explain>
      </section>
      <section class="ba1" id={Project.BA}>
        <Nav projname="realtime analytics" total={3} current={1} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/c_crop,g_north,h_830,w_1132,x_0,y_0/v1628203320/realtime-analytics-1-large"
          alt="realtime analytics 1 large"
        />
        <Explain>
          <p>
            implemented the <b>realtime quoteboard</b> (model and view), the realtime <b>news feed</b> and, most challenging,
                        the ...
                    </p>
        </Explain>
      </section>
      <section class="ba2" id={Project.BA}>
        <Nav projname="realtime analytics" total={3} current={2} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/v1628203320/realtime-analytics-2-large"
          alt="realtime analytics 2 large"
        />
        <Explain>
          <p>
            <b>marketprofile</b>, with hover and selection features on every element and
                    </p>
        </Explain>
      </section>
      <section class="ba3" id={Project.BA}>
        <Nav projname="realtime analytics" total={3} current={3} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/c_crop,g_north,h_837/v1628203319/realtime-analytics-application-small-large"
          alt="realtime analytics 3 large"
        />
        <Explain>
          <p>fold / collapse per day.</p>
        </Explain>
      </section>
      <section class="chroma1" id={Project.Chroma}>
        <Nav projname="midi interface" total={4} current={1} />
        <FullImg
          src="https://res.cloudinary.com/snuu/image/upload/c_scale,f_auto,q_10,w_1600/v1628111321/chroma1-large"
          alt="rhodes chroma 1 large"
        />
        <Explain>
          <p>the rhodes chroma synthesizer - cult.</p>
        </Explain>
      </section>
      <section class="chroma2" id={Project.Chroma}>
        <Nav projname="midi interface" total={4} current={2} />
        <FullImg src="https://res.cloudinary.com/snuu/image/upload/q_30/v1628203320/chroma2-large" alt="rhodes chroma 2 large" />
        <Explain>
          <p>i lived inside it while builing a midi interface for it.</p>
        </Explain>
      </section>
      <section class="chroma3" id={Project.Chroma}>
        <Nav projname="midi interface" total={4} current={3} />
        <FullImg src="https://res.cloudinary.com/snuu/image/upload/q_30/v1628203320/chroma3-large" alt="microcontroller large" />
        <Explain>
          <ul>
            <li>soldered parallel hardware interface for commodore vic 20</li>
            <li>soldered serial midi interface for commodore vic 20</li>
            <li>developed software with vic 20 using raw 6502 mnemonics</li>
            <li>transferred hard- and software to a rockwell 6511eab singlechip microcontroller</li>
            <li>integrated the controller into the synthesizer</li>
          </ul>
        </Explain>
      </section>
      <section class="chroma4" id={Project.Chroma}>
        <Nav projname="midi interface" total={4} current={4} />
        <FullImg src="https://res.cloudinary.com/snuu/image/upload/q_30/v1628203320/chroma4-large" />
        <Explain>
          <p>lets end with another picture of this wonderful synth.</p>
        </Explain>
      </section>
      <section class="fin">
        <div class="end-text">
          <div>this is the end. but since this was in reverse chronological order, it actually is the&nbsp;<span id="rewind">beginning</span>.</div>
        </div>
        <div class="controls">
          <table>
            <KeyMapDescription op="previous slide" keys="left-arrow">swipe, mousewheel, scrollbar</KeyMapDescription>
            <KeyMapDescription op="next slide" keys="right-arrow enter">swipe, mousewheel, scrollbar</KeyMapDescription>
            <KeyMapDescription op="first slide" keys="pos1">scrollbar</KeyMapDescription>
            <KeyMapDescription op="last slide" keys="end">scrollbar</KeyMapDescription>
            <KeyMapDescription op="close gallery" keys="esc">close-button (top right corner)</KeyMapDescription>
            <KeyMapDescription op="toggle explanation" keys="space">click or touch page</KeyMapDescription>
          </table>
        </div>
      </section>
    </article>
  </Fragment>
)
