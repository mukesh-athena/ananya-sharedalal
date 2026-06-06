'use client'
import Image from 'next/image'
import GomutraHeader from '@/components/layout/GomutraHeader'
import Footer from '@/components/layout/Footer'

export default function GomutraPaperPage() {

  const bodyText = {
    fontFamily: 'Crimson Text, serif',
    fontSize: '1.15rem',
    lineHeight: 1.85,
    color: '#3a2a1a',
    marginBottom: '1.5rem',
  }

  const sectionHeading = {
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
    fontWeight: 500,
    color: 'var(--inkbrown)',
    lineHeight: 1.2,
    marginBottom: '1.5rem',
  }

  const subHeading = {
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
    fontWeight: 500,
    color: 'var(--inkbrown)',
    lineHeight: 1.2,
    marginBottom: '1.25rem',
    marginTop: '2.5rem',
  }

  const sectionLabel = {
    fontFamily: 'Crimson Text, serif',
    fontSize: '0.78rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--turmeric)',
    marginBottom: '1rem',
    display: 'block',
  }

  const divider = {
    width: '40px',
    height: '2px',
    backgroundColor: 'var(--turmeric)',
    margin: '1.5rem 0',
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Crimson Text, serif',
    fontSize: '1rem',
    marginBottom: '1.5rem',
  }

  const thStyle = {
    padding: '0.85rem 1.2rem',
    textAlign: 'left',
    color: 'var(--parchment)',
    fontWeight: 600,
    fontFamily: 'Crimson Text, serif',
    backgroundColor: 'var(--inkbrown)',
  }

  const tdStyle = (i) => ({
    padding: '0.8rem 1.2rem',
    color: '#3a2a1a',
    borderBottom: '1px solid #E8DFD0',
    lineHeight: 1.6,
    backgroundColor: i % 2 === 0 ? 'var(--offwhite)' : 'var(--parchment)',
    verticalAlign: 'top',
  })

  const figureCaption = {
    fontFamily: 'Crimson Text, serif',
    fontSize: '0.88rem',
    fontStyle: 'italic',
    color: 'var(--stone)',
    marginTop: '0.65rem',
    lineHeight: 1.5,
    textAlign: 'center',
  }

 const linkedImage = (src, alt, caption, href) => (
  <div style={{ margin: '2rem 0', textAlign: 'center' }}>
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        sizes="(max-width: 768px) 100vw, 600px"
        style={{ width: '100%', maxWidth: '800px', height: 'auto', display: 'block', borderRadius: '2px' }}
      />
    </a>
    <p style={figureCaption}>{caption} (<a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--terracotta)' }}>link to YouTube video</a>)</p>
  </div>
)

const linkedImagePDF = (src, alt, caption, href) => (
  <div style={{ margin: '2rem 0', textAlign: 'center' }}>
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        sizes="(max-width: 768px) 100vw, 600px"
        style={{ width: '100%', maxWidth: '800px', height: 'auto', display: 'block', borderRadius: '2px' }}
      />
    </a>
    <p style={figureCaption}>{caption} (<a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--terracotta)' }}>link to NCERT &#8216;Materials Around Us&#8217; chapter here</a>)</p>
  </div>
)

  const linkStyle = {
    color: 'var(--terracotta)',
    textDecoration: 'none',
  }

  return (
    <>
      <GomutraHeader />
      <main style={{ backgroundColor: 'var(--offwhite)', color: 'var(--inkbrown)', paddingTop: '0' }}>

        {/* HERO */}
        <section style={{ minHeight: '50vh', position: 'relative', display: 'flex', alignItems: 'center', padding: '9rem 2rem 5rem', overflow: 'hidden' }}>
          <Image
            src="/images/gomutra-paper-hero.png"
            alt="Ancient Indian manuscripts"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30,18,8,0.78)', zIndex: 1 }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1.5rem' }}>The Paper</p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05, color: 'var(--parchment)', marginBottom: '0.5rem' }}>The Role of History</h1>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05, fontStyle: 'italic', color: 'var(--turmeric)', marginBottom: '2.5rem' }}>in the Acceptance of Gomutra</h1>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--turmeric)', marginBottom: '2rem' }} />
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.2rem', lineHeight: 1.8, color: 'rgba(245,237,214,0.7)', maxWidth: '620px' }}>
              How YouTube&#8217;s gomutra discourse is quietly rewriting Indian history &#8212; one wellness video at a time.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span style={sectionLabel}>Introduction</span>
            <div style={divider} />
            <h2 style={sectionHeading}>Introduction</h2>
            <p style={bodyText}>Before getting into the analytics, it&#8217;s worth discussing why cow urine of all things merits a whole paper. Gomutra sits at this unusual intersection where almost every faultline in contemporary India meets at once: Hindu religious practice (the cow is sacred), traditional medicine (it shows up in Ayurvedic texts), a multi-crore wellness industry (Baba Ramdev&#8217;s company Patanjali alone sells huge volumes of bottled cow urine under the brand Godhan Ark), and pseudoscience claims that have reached cabinet ministers and prime-time news anchors. What makes it useful as a case study is that the same yellow liquid gets framed as scripture, medicine, product, identity marker, and political tool, sometimes in the same video. Few other Indian topics let you study religion, science, commerce, and politics together in one corpus.</p>
            <p style={bodyText}>As you enter the gomutra sphere on YouTube, there is something that catches your attention right off the bat. People are not just discussing the healing properties of cow urine, and whether or not it can actually cure cancer; they are debating what kind of history India has had, and whose historical authority should take precedence. A <a href="https://www.youtube.com/@PatanjaliAyurved" target="_blank" rel="noopener noreferrer" style={linkStyle}>Patanjali</a> wellness video and a debunker video by <a href="https://www.youtube.com/@dhruvrathee" target="_blank" rel="noopener noreferrer" style={linkStyle}>Dhruv Rathee</a> (one of India&#8217;s most followed YouTubers, known for political commentary and myth-debunking content with audiences in the tens of millions) both seem to be participating in the same discourse, yet their rhetoric and evidence couldn&#8217;t be more different.</p>
            <p style={bodyText}>The actual purpose of this paper is narrower than it might sound. I&#8217;m not trying to settle whether cow urine works. I&#8217;m using gomutra as a small, somewhat manageable window into a much bigger thing: how Indian public memory is being shaped on YouTube in real time. What I care about is the <em>historiography</em>: which historical periods get amplified, which get erased, and who gets to be the authority on &#8220;what India was like&#8221; and what that means for Indians today. Cow urine is just a convenient case because that&#8217;s one of the windows where the historical claims are explicit and easy to count. If we want to understand how millions of Indians are forming a picture of their own past in 2026, the gomutra discourse is a surprisingly clean way in.</p>
            <p style={bodyText}>What I am really interested in is how something that seems to be about one subject on social media is in fact telling a complex story about a completely different aspect of Indian society. A useful comparison here is the 2020 case of Sushant Singh Rajput, a Hindi film actor whose death by suicide turned almost overnight into one of India&#8217;s biggest online conspiracy frenzies. Within days, YouTubers and news anchors were claiming he had been murdered, attacking his girlfriend Rhea Chakraborty, and using his death as a hammer against the &#8220;Bollywood elite.&#8221; Akbar et al (2022) studied how that coverage worked and showed how online media can rewrite a single event in real time. What was initially about mental health grew into a series of lurid stories about how certain ethnic groups are marginalized, how women of certain communities are witches, how an invisible mafia works to target and destroy anyone who dares break into circles of fame. The case I&#8217;m looking at is doing something related but slower &#8212; instead of rewriting one event, the gomutra corpus is rewriting <em>the past itself</em>, one wellness video at a time.</p>
            <p style={bodyText}>I focus on two findings that all touch on history and how it gets used: (1) the Vedic past is invoked, and (2) the West turns up not as a coloniser but as a validator.</p>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section style={{ backgroundColor: 'var(--parchment)', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={sectionLabel}>Methodology</span>
            <div style={divider} />
            <h2 style={sectionHeading}>Methodology</h2>
            <p style={bodyText}>I started with the 100 most-viewed gomutra-related videos on YouTube and ended up with 83 in the final dataset. The 17 that dropped out broke down roughly as follows: around 5 were duplicates or re-uploads of the same content on different channels, 6 weren&#8217;t really about gomutra (it was mentioned in passing inside a longer wellness or religious video), 4 didn&#8217;t have usable transcripts (no auto-captions, or in languages I couldn&#8217;t reliably translate), and 2 were too short to code anything meaningful. The remaining 83 YouTube videos about gomutra, mix promoter content (<a href="https://www.youtube.com/@PatanjaliAyurved" target="_blank" rel="noopener noreferrer" style={linkStyle}>Patanjali ads</a>, Ayurveda channels, wellness influencers, nightly-news segments) and debunker content (<a href="https://www.youtube.com/@dhruvrathee" target="_blank" rel="noopener noreferrer" style={linkStyle}>Dhruv Rathee</a>, <a href="https://www.youtube.com/@DrRamPuniyani" target="_blank" rel="noopener noreferrer" style={linkStyle}>Dr. Ram Punyani</a>, a couple of medical doctors). I went for the most-viewed videos in each camp rather than a random sample because the goal was to see what&#8217;s actually shaping the conversation about gomutra.</p>
            <p style={bodyText}>For each video I got the auto-generated transcript, translated all of them into English using LLMs, and then verified the result of the translations myself. I subsequently coded the videos into categories like views, gender of channel, themes, content style, narrative style, claimed benefits, named ancient texts, mentions of rishis or sages, references to the West, political mentions, and any explicit historical periodisation.</p>

            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '1rem', marginTop: '2rem' }}>Table 1: Sample description</h3>
            <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Variable</th>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Total (n = 83)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Views', 'Mean per video', '1,027,214'],
                    ['', 'Median per video', '91,000'],
                    ['', 'Total', '84,231,546'],
                    ['Gender of channel', 'Male', '54'],
                    ['', 'Female', '9'],
                    ['', 'Neutral / organisation', '20'],
                    ['Content Style', 'Monologue', '47'],
                    ['', 'Interview', '11'],
                    ['', 'News report', '10'],
                    ['', 'Repurposed clips', '8'],
                    ['', 'AI-generated', '5'],
                    ['Narrative style', 'Promotional / testimonial', '25'],
                    ['', 'Explainer / factual', '11'],
                    ['', 'Devotional / faith-based', '6'],
                    ['', 'Opinionated / political', '8'],
                    ['', 'Not coded', '33'],
                  ].map(([variable, category, total], i) => (
                    <tr key={i}>
                      <td style={{ ...tdStyle(i), fontWeight: variable ? 600 : 400 }}>{variable}</td>
                      <td style={tdStyle(i)}>{category}</td>
                      <td style={tdStyle(i)}>{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ ...bodyText, fontSize: '0.9rem' }}>
              <a href="https://docs.google.com/spreadsheets/d/1sL5OCSKUtZv3nrFb4C7ct3ZXCcCEMgzDfk0wVSu1970/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={linkStyle}>Entire sample of YouTube videos available here.</a>
            </p>
            <p style={bodyText}>Prior to starting my analysis, I read up on the basic methods of qualitative research analysis. Going through 83 transcripts line by line for qualitative analysis would have taken extremely long, so I used LLMs to pull out quotes, tag subthemes, and flag which historical references came up where. I then went back and manually verified every single quote against the original transcript myself, especially the ones I planned to actually use in the paper. Anything that didn&#8217;t match got dropped.</p>
            <p style={bodyText}>One limitation worth bringing to attention is that I only looked at gomutra. I can&#8217;t say yet whether the same historical pattern holds for yoga or general Ayurveda channels. That could be the next step.</p>
          </div>
        </section>

        {/* MAIN FINDINGS */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={sectionLabel}>Main Findings</span>
            <div style={divider} />
            <h2 style={sectionHeading}>Main Findings</h2>
            <p style={bodyText}>A lot of patterns came out of the coding (claim-bundling, the &#8220;Ramdev formula,&#8221; debunkers getting more views than promoters even though they&#8217;re outnumbered 5:1, etc.).</p>
            <p style={bodyText}>One of the cleaner patterns in the data is that gomutra claims almost never travel alone. If a video tells you cow urine is good for your liver, it&#8217;ll usually also tell you it&#8217;s good for your kidneys, your weight, your skin, and your digestion in the same breath. Barely anyone out there is pitching cow urine for <em>just</em> one thing. And the bundling isn&#8217;t random, it follows a reasonably predictable ladder.</p>
            <p style={bodyText}>At the base are the everyday, plausible-sounding claims: constipation and digestion (32 of 83 videos), skin and hair (21), obesity (16). The middle level is chronic disease &#8212; liver (23), kidney (14), immunity (14), joint pain (11), diabetes (7). As we notice most of these are chronic conditions for which there is no clear short-term cure, due to which is that someone may end up using these unproven &#8216;medicines&#8217; for several months to find no results. And even then, they may be told that some or another aspect of how they used the medicine was incorrect causing it not to have a desired effect.</p>
            <p style={bodyText}>At the very top sit the grand claims: cancer (25 videos) and the &#8220;there&#8217;s literally gold in cow urine&#8221; claim (only 2 creators say it, but debunkers love to attack it). The pattern is that promoters almost always <em>lead</em> with the small believable claims before escalating to the big ones. By the time a viewer has nodded along to &#8220;it helps with constipation,&#8221; they&#8217;re already several &#8220;yes&#8221;es deep when the cancer cure shows up. The structure is doing rhetorical work that no single claim could do on its own.</p>
            <p style={bodyText}>The single most revealing experiment in the whole dataset is that Baba Ramdev and Dhruv Rathee, the loudest promoter and the loudest debunker in the dataset, built entire videos around the exact same trick. Baba Ramdev&#8217;s setup is short and visual. He pours a few drops of betadine into a glass with water, adds cow urine, and within seconds the dark colour fades, turning almost clear. He holds the glass up to the camera and frames the result as proof of gomutra&#8217;s <em>vishaghna</em> or &#8220;poison-killing&#8221; property &#8212; the visual is the argument. Dhruv Rathee&#8217;s setup is the same demonstration but he does it with his own urine instead of gomutra and gets the same result. Rathee explains that colour change isn&#8217;t cow-specific, it&#8217;s a neutralising property which any liquid reducing agent can do. What makes this interesting isn&#8217;t just that they disagree, it&#8217;s that they&#8217;re fighting over the same prop. Most debunking of gomutra on YouTube argues abstractly (&#8220;there&#8217;s no peer-reviewed study&#8230;&#8221;), which lets promoters wave it away. The betadine experiment is different because Rathee doesn&#8217;t argue with Baba Ramdev verbally, his experiment does the talking. The &#8220;miracle&#8221; becomes just a magic trick the moment the same trick works with his own urine.</p>

            {/* IMAGE 1 - Dhruv Rathee betadine */}
            {linkedImage('/images/go-1.png', "Dhruv Rathee's betadine experiment using his own urine", "Image 1: Dhruv Rathee's 'betadine experiment' using his own urine", 'https://youtu.be/rjMbE9flUhQ?t=9')}

            {/* IMAGE 2 - Baba Ramdev betadine */}
            {linkedImage('/images/go-2.png', "Baba Ramdev's betadine experiment using gomutra", "Image 2: Baba Ramdev's 'betadine experiment' using gomutra", 'https://youtu.be/IB0lSmH4RKY?t=2')}

            <p style={bodyText}>I&#8217;m mainly going to focus on the two findings that have a direct implication for how history is being understood in India, because that&#8217;s what I think is genuinely new here. Many gomutra videos are doing historiography without realising it. They&#8217;re collectively writing a version of the Indian past where Vedic medicine flows uninterrupted to today&#8217;s bottle of Godhan Ark, the Mughals and British never existed, and the West shows up only as verification. And the debunker side, by sticking strictly to chemistry, has let that historiography go unchallenged.</p>

            <h3 style={subHeading}>3.1 The Past Refers Only to the Vedic Period</h3>
            <p style={bodyText}>The single most striking pattern in the dataset is how much of Indian history is missing. Out of 83 videos, more than half participate in a kind of ancient framing but it&#8217;s always the same, ancient. There are zero references to the medieval, Mughal or colonial period and only one mention of cow slaughter being banned. The story jumps directly from rishis to today. The lines between history and mythology are often blurred. This is meant to imply that Indian history has been a black hole between the Vedic period and today, essentially suggesting that Indian history got pushed back by whatever happened in between.</p>
            <p style={bodyText}>Here&#8217;s how the &#8220;Vedic&#8221; gets invoked, broken into subthemes:</p>

            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '1rem', marginTop: '1.5rem' }}>Table 1. How videos invoke the Vedic past (out of 83 videos)</h4>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Subtheme</th>
                    <th style={thStyle}>Count</th>
                    <th style={thStyle}>Example</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Named ancient texts (Charaka, Sushruta, Ashtanga Hridaya, Bhavaprakasha)', '26', '"we have three great textsâ€¦ Sushruta Samhita, Charaka Samhita, and Bhavaprakasha Nighantu" Rakesh Agarwal'],
                    ['"Thousands of years ago" / "since ancient times"', '12', '"For thousands of years, cow urine has been usedâ€¦" Dr. Raj Satpute'],
                    ['Rishis / sages / ancestors', '13', '"Vagbhata Rishi has described the \'Mutravarg\'â€¦" Dr. Rupali Jain'],
                    ['Vedas referenced', '13', '"in the Vedas, it is given the status of Amrit" Rakesh Agarwal'],
                    ['Sacred vocabulary (Amrit, Vishaghna, Rasayana, Shivambhu)', 'scattered', '"urine is called Vishagna or killer of all poisons" Akshay Chopra'],
                  ].map(([sub, count, example], i) => (
                    <tr key={i}>
                      <td style={tdStyle(i)}>{sub}</td>
                      <td style={tdStyle(i)}>{count}</td>
                      <td style={tdStyle(i)}>{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* IMAGE 3 - Dr. Rupali Jain */}
            {linkedImage('/images/go-3.png', "Dr. Rupali Jain talking about Mutravarg", "Image 3: Dr. Rupali Jain talking about 'Mutravarg'", 'https://youtu.be/YrOPq35xKoU?t=67')}

            <p style={bodyText}>A reasonable pushback at this point is: <em>if the Vedas actually do mention cow urine, how is invoking them a misrepresentation?</em> They do mention it. But two separate things are going wrong, and they&#8217;re worth keeping apart. First, the medical part: the Vedas aren&#8217;t a scientific text, they&#8217;re religious literature, where medicine wasn&#8217;t separated from ritual. Citing a Vedic verse as clinical proof would be an error. The Vedas existing isn&#8217;t the misinformation, treating them as a peer-reviewed source is. Second, the historical part, which this paper cares about more: even if you grant the medical claim, what these videos do with the citations is a selective rewriting of Indian history. The 2,000-year intervening medical tradition gets collapsed into a flat &#8220;ancient times,&#8221; when Charaka and Sushruta Samhita&#8217;s were written centuries after the Vedas and routinely disagreed with earlier sources. There are two misrepresentations stacked on each other: one about what the text says, one about what Indian history was.</p>
            <p style={bodyText}>What&#8217;s interesting isn&#8217;t just that these speakers reach for antiquity, but how they do it. The vocabulary slides quietly between registers. Rakesh Agarwal, for example, says, &#8220;in the Vedas, it is given the status of Amrit, Amrit means which does not let die, which is a life-saving drug.&#8221; The sentence quietly slides from myth to pharmacology. Amrit is the drink of the gods but by the end of the line it has become &#8220;a life-saving drug.&#8221; There are different frames stacked in the video: Vedic theology, his IIT credentials, and modern medicine. None of them are made to check each other, which is what makes the move work. The same thing happens with sacred terminology more broadly: words like Vishaghna (&#8220;killer of all poisons&#8221;), Rasayana, Sanjeevani, Shivambhu show up scattered across promoter videos, and each one quietly lifts cow urine out of the medical register and into a metaphysical one. You can&#8217;t run a clinical trial on an offering to the gods.</p>
            <p style={bodyText}>Time-distance claims do something a bit different. When Dr. Raj Satpute says &#8220;For thousands of years, cow urine has been used to prevent and eradicate incurable diseases from their root.&#8221; The hidden inference is, if it didn&#8217;t work, would people have used it for so long? &#8220;Incurable diseases&#8221; plus &#8220;from their root&#8221; also packs in two enormous claims: that cow urine handles what modern medicine can&#8217;t, and that it doesn&#8217;t just treat but eradicates. But, neither claim is defended in the sentence. Akshay Chopra does a related move when he says &#8220;a lot of yogis have shown the true use of urine therapy in our ancient Indian texts,&#8221; and then adds Chinese, African, and American traditions on top. The speaker spreads the claim across continents on purpose. If the practice is only Indian, critics can call it Hindu pseudoscience. If it&#8217;s universal, attacking it is like attacking all of human history. He doesn&#8217;t name a single non-Indian text, the vagueness is what makes the claim unfightable.</p>
            <p style={bodyText}>The implication is bigger than gomutra. If this is how a popular health debate is being historicised, where, from vedic times it directly cuts to the present, then a whole chunk of Indian history is being quietly edited out of public memory. The conventional script (Mughal destruction, British suppression, modern reclamation) doesn&#8217;t even need to be invoked here. The Vedic past, standing alone, is doing all the work.</p>
            <p style={bodyText}>The reason the Vedic-to-today jump actually matters is that this jump quietly decides what counts as &#8220;Indian&#8221; knowledge. If your only reference point for Indian medical tradition is the Vedas-and-now, then everything in between basically stops being part of &#8220;our tradition.&#8221; The medicine that came with the Mughals, Indo-Islamic medicine, colonial-era Indian doctors trained in Western medicine, post-Independence medical institutions, all of it becomes someone else&#8217;s history that happened to take place on Indian soil. The Vedic-to-today move isn&#8217;t just lazy storytelling, there is very specific political intent in it. It&#8217;s like a sorting mechanism: this is ours, that wasn&#8217;t. By extension, everything that happened between the Vedas and now is erased, and therefore, something to be ignored. And the political stakes of that sorting are obvious; it lines up with a much bigger conversation in Indian public life about who counts as authentically Indian. The Vedic past, standing alone, is doing all the work.</p>

            <h3 style={subHeading}>3.2 The West Shows Up as a Validator, Not a Destroyer</h3>
            <p style={bodyText}>This is the finding that surprised me the most. The Western validation comes in a few forms:</p>

            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '1rem', marginTop: '1.5rem' }}>Table 2. How the West is invoked in gomutra videos</h4>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Subtheme</th>
                    <th style={thStyle}>Example</th>
                    <th style={thStyle}>What&#8217;s doing the work</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['American patent as proof', '"America has granted it a patent" Baba Ramdev, Sudhir Chaudhary', 'The word "patent," with no detail on scope'],
                    ['Big-name institutions', '"NIHâ€¦ AYUSHâ€¦ International Journalâ€¦" Lotus Pregnancy Care', 'Stacking acronyms'],
                    ['WHO certification', '"certified by the World Health Organization" B.K. Sahu', 'The brand of WHO'],
                    ['Export markets as judges', '"Singapore, Germany, America, Britain, UAE are buying" Sushant Sinha', 'Foreign markets = validation'],
                    ['Western media as quality stamp', '"Washington Post, New York Times, Guardian have praisedâ€¦" Sudhir Chaudhary', 'Newspaper names as authority'],
                  ].map(([sub, example, work], i) => (
                    <tr key={i}>
                      <td style={tdStyle(i)}>{sub}</td>
                      <td style={tdStyle(i)}>{example}</td>
                      <td style={tdStyle(i)}>{work}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* IMAGE 4 - Sudhir Chaudhary */}
            {linkedImage('/images/go-4.png', 'Sudhir Chaudhary "Do those who insult gomutra know this?"', 'Image 4: Sudhir Chaudhary "Do those who insult gomutra know this?"', 'https://www.youtube.com/shorts/8nDDBoWTo8k?feature=share')}

            <p style={bodyText}>It&#8217;s worth being precise about what I am and am not claiming here. I&#8217;m not saying the West has to show up as a coloniser, or that validation from the West is inherently bad. People can cite whoever they want. What I&#8217;m flagging is two narrower things. First, the rhetorical function, phrases like &#8220;America has granted a patent&#8221; are being used to end the conversation rather than open one. None of the speakers describe what the patent actually covers, whether any medicine was approved, or what its legal scope is. There are 4 widely cited patents where cow urine, specifically gomutra or its distillate, is the core active ingredient or focus of the invention that have been granted by US courts. They are as follows: <a href="https://patents.google.com/patent/US6410059B1/en" target="_blank" rel="noopener noreferrer" style={linkStyle}>US Patent No. 6,410,059 (2002)</a>, <a href="https://patents.google.com/patent/US6896907B2/en" target="_blank" rel="noopener noreferrer" style={linkStyle}>US Patent No. 6,896,907 (2005)</a>, <a href="https://patents.google.com/patent/US7235262B2/en" target="_blank" rel="noopener noreferrer" style={linkStyle}>US Patent No. 7,235,262 (2007)</a>, and <a href="https://patents.google.com/patent/US7297659B2/en" target="_blank" rel="noopener noreferrer" style={linkStyle}>US Patent No. 7,297,659 (2007)</a>. The patents are presented as proof of medical efficacy whereas the patents are actually simply a legal test of novelty. The brand of &#8220;America&#8221; does all the work. That&#8217;s worth flagging regardless of whether you think the West is a hero or a villain in the story.</p>
            <p style={bodyText}>Second, the historiographical observation is that in most other Indian discourse (cow protection politics, Hindutva commentary, anti-secularist talk), the West is the destroyer of Indian local knowledge. Here, suddenly, it isn&#8217;t and that inversion is the finding, not a complaint.</p>
            <p style={bodyText}>Sushant Sinha&#8217;s quote is doing the most interesting work: <em>&#8220;These are the countries that understand the power of India&#8217;s centuries-old Ayurveda, but our people consider it a joke.&#8221;</em> Two things happen in that sentence. First, Western respect is treated as proof of value. Second, the argument is quietly shifted away from whether cow urine actually works to whether Indians are loyal enough to their own tradition. He&#8217;s also leaning on Western validation in the same line where he&#8217;s criticising Indians for caring about Western opinion, but the contradiction doesn&#8217;t hurt him because the line is built to make you feel guilty, not to make you think.</p>
            <p style={bodyText}>The Sudhir Chaudhary and Baba Ramdev patent claims work the same way. None of them actually describe what the patent covers, whether any medicine got approved, or what the legal scope is. Just saying &#8220;patent&#8221; carries weight.</p>
          </div>
        </section>

        {/* IMPLICATIONS */}
        <section style={{ backgroundColor: 'var(--parchment)', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={sectionLabel}>Implications</span>
            <div style={divider} />
            <h2 style={sectionHeading}>4. Implications</h2>

            <h3 style={subHeading}>4.1 What Does This Mean for Young People Who Grow Up Watching This?</h3>
            <p style={bodyText}>The most striking structural feature of the gomutra content I analysed is not what it says, but what it leaves out. No videos in this dataset mention the British and none mention the Mughals. There is no story of loss, suppression, or reclamation &#8212; it is just a seamless jump from ancient rishis straight to today&#8217;s bottle of Godhan Ark, with roughly 2,000 years of Indian history simply not spoken about. For a young person watching hours of this content, the picture of the past that gets formed is one where India had extraordinary medical knowledge in the Vedic period, this knowledge has existed uninterrupted ever since, and the only people who doubt it are those with an &#8220;agenda.&#8221; Sushant Sinha, on a channel with 625,000 views, puts it plainly: <em>&#8220;have the agenda-driven people specifically attacked the ancient practices by dismissing what Ayurveda says?&#8221;</em> The word &#8220;agenda-driven&#8221; does the magic here &#8212; it bluntly discredits any critic, turning scepticism itself into evidence of bad faith.</p>
            <p style={bodyText}>The effect of this framing, when absorbed repeatedly, is a warped understanding of both history and science. Because the Mughal and British periods are simply absent from this discourse, young viewers are not learning that those periods produced their own contributions to medicine, scholarship, and science &#8212; that Mughal-era physicians translated and brought together Greek, Persian, and Indian medical traditions, or that the colonial period, for all its downsides, introduced scientific methodologies that modern medicine now relies on. Instead, the story they receive is that the Vedic period was when real knowledge existed, and the only science worth trusting is the science that confirms what the rishis already knew. Rajiv Dixit hints to this in a video with 78,000 views: &#8220;<em>Today&#8217;s science proves what Baghbhatt ji said thousands of years ago.</em>&#8221; Science here is not a method for testing ideas, it&#8217;s just a way of getting official-sounding approval for beliefs that were already decided long ago. Consequently, this suggests therefore that whatever came in with the Mughals and British &#8211; Islam, Westernization of certain kinds &#8211; were all things that were bad for India.</p>
            <p style={bodyText}>This matters because it does not just affect how young people understand gomutra, it shapes the entire category of what counts as &#8220;legitimate knowledge.&#8221; If Vedic science is always already correct, and modern beliefs are only now catching up, then there is no independent role for evidence and experiments only confirm the claim instead of testing it.</p>

            <h3 style={subHeading}>4.2 Implications for Our Understanding of Medicine Itself</h3>
            <p style={bodyText}>One of the most disorienting features of this content is the genuine confusion it creates around authority. Rakesh Agarwal, introduced as an <em>&#8220;IIT Bombay PhD&#8221;</em>, tells viewers that Amrit means <em>&#8220;a life-saving drug&#8221;</em>, a switch from Vedic terminology into pharmacology that happens so quickly most viewers would not notice the shift. R.S. Chauhan, described as <em>&#8220;the former Director of the IVRI&#8221;</em>, is cited by Sushant Sinha as endorsing cow urine as <em>&#8220;a truly remarkable substance.&#8221;</em> These are not anonymous internet commentators, they are people with credible titles and their credentials are being used not to test ancient claims, but to vouch for them.</p>
            <p style={bodyText}>On the debunking side, Dr. Navin Agrawal says simply that <em>&#8220;the chances of benefiting from this in the eyes of modern medicine are not acknowledged&#8221;</em> &#8212; staying firmly in the present, citing institutional authority. It is also, according to my data, far less effective. His video has 8,400 views against Rakesh Agarwal&#8217;s 2.4 million.</p>
            <p style={bodyText}>The deeper problem is that people&#8217;s understanding of medicine is being shaped by their understanding of history. If you have already accepted that Vedic science is the foundation of all true knowledge, then a chemistry experiment performed by a YouTube creator using his own urine is not going to change your mind. The promoters have already answered the question on historical grounds and the debunkers are still trying to answer it at the level of chemistry. So, we see, they are not in the same conversation. This raises a difficult question: who do people learn to trust when they are sick? A doctor trained in modern medicine who dismisses traditional practice, or an influencer backed by ancient texts, IIT credentials, and an American patent? In my data, the influencers are winning; not because the claims are stronger, but because the historical frame that supports them has been left completely unchallenged.</p>

            <h3 style={subHeading}>4.3 Ayurveda in Indian Science Textbooks</h3>
            <p style={bodyText}>What happens on YouTube might seem like a self-contained problem but it is not. Under India&#8217;s National Education Policy (NEP) 2020, the current government has introduced Ayurveda into NCERT science textbooks for Classes 6 to 8. The Class 6 <em>Curiosity</em> textbook now references the <em>Ashtanga Hridaya Sutra Sthana</em>, the very same ancient text that Dr. Rupali Jain cites on YouTube, with 726,000 views, to authorise the medical properties of cow urine. The same texts that lives on wellness channels now lives in the national curriculum.</p>

            {/* IMAGE 5 - NCERT textbook */}
            {linkedImagePDF('/images/go-5.png', 'Ashtanga Hridaya Sutra Sthana referenced in the NCERT Class 6 Curiosity textbook', "Image 5: Ashtanga Hridaya Sutra Sthana referenced in the NCERT Class 6 Curiosity textbook in the chapter 'Materials Around Us'", 'https://ncert.nic.in/textbook/pdf/fecu106.pdf')}

            <p style={bodyText}>The Class 8 textbook includes a chapter titled &#8220;Ayurveda: Balance of Body, Mind, and Environment,&#8221; covering daily routines and seasonal habits drawn from traditional practice. The University Grants Commission (UGC) is simultaneously developing course modules to bring Ayurvedic principles into higher education. This is a systematic, institutional movement.</p>
            <p style={bodyText}>The connection back to this study&#8217;s findings is not incidental. The gomutra videos in our dataset operate by treating ancient texts as given authority &#8212; &#8220;the Charaka Samhita says so&#8221; is used as a conversation-ender, not to invite inquiry. When that same logic enters the science classroom through state-approved textbooks, it is no longer just one influencer among people, it becomes the curriculum. The movement from imagination of history to imagination of science to imagination of medicine is no longer just a pattern in online content.</p>
            <p style={bodyText}>The long-run implication is serious. If what counts as scientific knowledge is shaped by what confirms India&#8217;s ancient greatness, and if that idea becomes standard in classrooms and eventually in medical training, then the medical establishment itself (who gets trained, what gets funded, what treatments get recommended) will increasingly reflect a vision of science defined by history rather than by evidence.</p>
          </div>
        </section>

        {/* CONCLUSION */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span style={sectionLabel}>Conclusion</span>
            <div style={divider} />
            <h2 style={sectionHeading}>5. Conclusion</h2>
            <p style={bodyText}>This paper set out to answer a specific question: if the medical properties of gomutra are largely unproven, why do so many people believe in them? The answer this study finds is that belief is not being carried by chemistry. It is being carried by history, or more precisely, by a very selective version of history.</p>
            <p style={bodyText}>Across all the promotional videos, the pattern is consistent: the ancient Vedic and Ayurvedic past is invoked relentlessly (26 videos cite named Sanskrit texts, 13 cite the Vedas, 13 mention rishis and sages), while everything that happened between that golden past and the present is simply absent. The West shows up not as a villain but as a validator, American patents, Washington Post articles, NIH name-drops, ratifying what &#8220;history&#8221; already established. And the debunkers, for all their reach (Dhruv Rathee&#8217;s betadine video alone accumulated 8.1 million views), never actually engage with this historical frame. They argue about chemistry, the promoters argue on cultural grounds and so the two sides never meet.</p>
            <p style={bodyText}>This study offers insight into misinformation spreads in India. It&#8217;s not through outright political dialogue &#8212; videos that name Prime Minister Modi or the BJP actually get fewer views. It works through cultural memory and of ancient authority, it works through what people hear that makes them feel good about themselves in a sense. Viewers feel like they&#8217;re learning about their heritage, not being persuaded, but the ideas and messages they&#8217;re taking in are one where scepticism is &#8220;agenda-driven&#8221; and modern science only counts when it agrees with what the rishis already knew.</p>
            <p style={bodyText}>Once that framework makes it into NCERT textbooks (which it already has, with Ayurveda entering the Class 6 and 8 science curriculum under NEP 2020) it&#8217;s no longer just a YouTube problem. The same historical imagination that makes gomutra believable online will shape what a generation of Indian children understands as science, and eventually, as medicine.</p>
            <p style={bodyText}>What the gomutra case ultimately reveals is something larger than cow urine: it is a working model of how a society&#8217;s relationship with its past can be reshaped to serve its relationship with contested science. It happens one YouTube video at a time, in the same vocabulary of rishis and ancient texts and foreign endorsements, until it is simply the way things are.</p>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          table { font-size: 0.88rem !important; }
          table th, table td { padding: 0.6rem 0.8rem !important; }
        }
      `}</style>
    </>
  )
}
