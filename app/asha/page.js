'use client'
import { useState } from 'react'
import Image from 'next/image'
import AshaHeader from '@/components/layout/AshaHeader'
import Footer from '@/components/layout/Footer'

export default function AshaPage() {

  const [refsOpen, setRefsOpen] = useState(false)

  const sectionLabel = {
    fontFamily: 'Crimson Text, serif',
    fontSize: '0.78rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--turmeric)',
    marginBottom: '1rem',
    display: 'block',
  }

  const sectionHeading = {
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
    fontWeight: 500,
    color: 'var(--inkbrown)',
    lineHeight: 1.2,
    marginBottom: '1.5rem',
  }

  const bodyText = {
    fontFamily: 'Crimson Text, serif',
    fontSize: '1.15rem',
    lineHeight: 1.85,
    color: '#3a2a1a',
    marginBottom: '1.5rem',
  }

  const divider = {
    width: '40px',
    height: '2px',
    backgroundColor: 'var(--turmeric)',
    margin: '1.5rem 0',
  }

  const figureCaption = {
    fontFamily: 'Crimson Text, serif',
    fontSize: '0.88rem',
    fontStyle: 'italic',
    color: 'var(--stone)',
    marginTop: '0.65rem',
    lineHeight: 1.5,
    textAlign: 'center',
  }

  const policyCardColors = [
    { bg: 'var(--inkbrown)', text: 'var(--parchment)', accent: 'var(--turmeric)' },
    { bg: 'var(--parchment)', text: 'var(--inkbrown)', accent: 'var(--terracotta)' },
    { bg: '#2d1f0e', text: 'var(--parchment)', accent: 'var(--turmeric)' },
    { bg: 'var(--offwhite)', text: 'var(--inkbrown)', accent: 'var(--terracotta)' },
    { bg: 'var(--turmeric)', text: 'var(--inkbrown)', accent: 'var(--inkbrown)' },
  ]

  const policies = [
    {
      num: '01',
      title: 'Permanent Employment',
      body: 'Stop calling ASHAs "volunteers" and recognise them as permanent health workers with a fixed monthly salary. Several state-level commissions and the 45th and 46th Indian Labour Conferences have already recommended this, but nothing has moved at the central level. A guaranteed minimum of ₹15,000 per month, with incentives layered on top, would signal that their work is taken seriously by the state.',
    },
    {
      num: '02',
      title: 'Simplified Incentives',
      body: 'There are currently over 60 incentive heads, each with its own paperwork and verification process — which is part of why payments get delayed for months. Consolidating these into 8–10 broader categories tied to outcomes (maternal health, child health, NCDs, etc.) would reduce administrative burden. Linking payments to a direct digital transfer system with a public dashboard where ASHAs can see what they are owed would also reduce dependence on supervisors who sometimes hold up payments.',
    },
    {
      num: '03',
      title: 'Social Security',
      body: 'ASHAs currently fall through almost every social security net in the country — no EPF, ESIC, gratuity, or pension, even though many have been doing this work for over a decade. At the very least: health insurance for the ASHA and her immediate family, maternity benefits (almost ironic given they are the ones promoting institutional deliveries), and a retirement amount that pays out after 10 or more years of service.',
    },
    {
      num: '04',
      title: 'Workplace Safety',
      body: 'ASHAs described doing night visits during deliveries, walking alone through unlit roads, dealing with aggressive male relatives during household surveys, and during COVID being sent into infected homes without adequate PPE. A basic safety protocol is needed: a transport allowance especially in rural and tribal areas, and PPE supply during public health emergencies.',
    },
    {
      num: '05',
      title: 'Representation',
      body: 'ASHAs are currently treated as the people who implement decisions made by people who have never done a household visit. Mandating ASHA representation in health policy bodies — with voting rights, not just attendance — would change this. They have ground-level knowledge that no bureaucrat or consultant has, and using that knowledge would make health programmes work better, not just be fairer to the women doing the work.',
    },
  ]

  const references = [
    'More, V. (2025). Annamayya ASHA Worker Salary 2025. Career Meto. https://careermeto.com/en/annamayya-asha-worker-salary-2025/',
    'Ministry of Health & Family Welfare. (n.d.). About Accredited Social Health Activist (ASHA). National Health Mission. https://nhm.gov.in/index1.php?lang=1&level=1&sublinkid=150&lid=226',
    'The Hindu Bureau. (2026, February 23). ASHA workers stage protest demanding fixed ₹18,000 salary. The Hindu.',
    'Chakraborty, R. (2026, February 24). The ASHA worker\'s mental health paradox. The Hindu.',
    'World Health Organization. (2021). ASHA — the driving force behind India\'s public health services. WHO India.',
    'Saxena, V., Kakkar, R., & Semwal, V. (2012). A study on ASHA — a change agent of the society. Indian Journal of Community Health, 24(1), 15–18.',
    'Padda, P., Devgun, S., Gupta, V., Chaudhari, S., & Singh, G. (2013). Role of ASHA in improvement of maternal health status in northern India: an urban rural comparison. IJCH.',
    'Gopalan, S. S., Mohanty, S., & Das, A. (2012). Assessing community health workers\' performance motivation: a mixed-methods approach on India\'s ASHA programme. BMJ Open, 2(5), e001557.',
    'Scott, K., George, A. S., & Ved, R. R. (2019). Taking stock of 10 years of published research on the ASHA programme. Health Research Policy and Systems, 17(1).',
    'Scott, K., & Shanker, S. (2010). Tying their hands? Institutional obstacles to the success of the ASHA programme in rural north India. AIDS Care, 22(sup2), 1606–1612.',
    'Dholakia, R. H., & Bajpai, N. (2011). Improving the performance of accredited social health activists in India. Columbia Academic Commons.',
    'Scott, K., Beckham, S. W., et al. (2018). What do we know about community-based health worker programs? A systematic review. Human Resources for Health, 16(1), 39.',
    'Ved, R., Scott, K., Gupta, G., et al. (2019). How are gender inequalities facing India\'s one million ASHAs being addressed? Human Resources for Health, 17(1), 3.',
    'Abdel-All, M., Abimbola, S., Praveen, D., & Joshi, R. (2019). What do ASHAs need to provide comprehensive care incorporating NCDs? Human Resources for Health, 17(1), 73.',
    'Dudala, S. R., et al. (2021). Assessment of gaps of knowledge and practices of frontline community workers in Chandragiri Mandal, Chittoor district, AP. IJCMPH, 8(3), 1299.',
    'Biyyala, R., Moola, R. S. R., & Arepalli, S. (2019). Evaluating the performance of ASHA workers in rural and tribal areas in Kurnool division. IJCMPH, 6(8), 3418.',
    'Sreerama, G., et al. (2015). Difficulties in accessing and availing of public health care systems among rural population in Chittoor District, AP. IJMPH, 5(4), 265.',
    'Malhotra, R. K. M. D. (2025). Unrecognised pillars of public health: The struggles of ASHA workers in India. Vascular and Endovascular Review.',
    'Sundararaman, T., Ved, R., Gupta, G., & Samatha, M. (2012). Determinants of functionality and effectiveness of community health workers: results from evaluation of ASHA program in eight Indian states. BMC Proceedings, 6(S5).',
    'Child Rights and You. (2026). What is Anganwadi System in India? CRY India.',
    'RURAL HEALTH — RISHI VALLEY EDUCATION CENTRE. (n.d.). https://www.rishivalley.org/rural-health-centre',
  ]

  return (
    <>
      <AshaHeader />
      <main style={{ backgroundColor: 'var(--offwhite)', color: 'var(--inkbrown)', paddingTop: '0' }}>

        {/* HERO */}
        <section style={{ minHeight: '55vh', position: 'relative', display: 'flex', alignItems: 'center', padding: '9rem 2rem 5rem', overflow: 'hidden' }}>
          <Image src="/images/asha-hero.png" alt="ASHA worker in rural Andhra Pradesh" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(30,18,8,0.55) 0%, rgba(30,18,8,0.45) 40%, rgba(30,18,8,0.88) 100%)', zIndex: 1 }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--turmeric)', marginBottom: '1.5rem' }}>The Field Study</p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, lineHeight: 1.05, color: 'var(--parchment)', marginBottom: '0.5rem' }}>ASHA Workers</h1>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, lineHeight: 1.05, fontStyle: 'italic', color: 'var(--turmeric)', marginBottom: '2.5rem' }}>of Annamayya</h1>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--turmeric)', marginBottom: '2rem' }} />
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.2rem', lineHeight: 1.8, color: 'rgba(245,237,214,0.7)', maxWidth: '580px' }}>
              A qualitative field study based on interviews with three ASHA workers and fifteen community members in Annamayya district, Andhra Pradesh.
            </p>
          </div>
        </section>

        {/* ABSTRACT */}
        <section id="abstract" style={{ backgroundColor: 'var(--inkbrown)', padding: '6rem 2rem' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <span style={{ ...sectionLabel, color: 'var(--turmeric)' }}>Abstract</span>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--turmeric)', marginBottom: '2rem' }} />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.2rem, 2vw, 1.55rem)', lineHeight: 1.75, color: 'var(--parchment)', fontWeight: 400 }}>
              ASHA stands for Accredited Social Health Activist, but it also means &#8220;hope&#8221; in Hindi. Since the introduction of the programme in 2005 under the National Rural Health Mission, over nine lakh women have been recruited across rural India. This report &#8212; based on qualitative studies conducted with three ASHA workers, fifteen community members, and field observations in Annamayya district, Andhra Pradesh &#8212; finds that the official narrative of ASHAs as &#8220;part-time volunteers&#8221; is highly inappropriate. Their work is comparable to that of full-time workers across maternal health, disease surveillance, digital reporting, and social welfare. They are modestly remunerated, bear transportation and communication costs personally, and receive their dues irregularly. This paper documents the interrelated dynamic between poor pay, community perception, and disproportionate workload, and calls for permanent classification, a simplified incentive system, and meaningful representation in health policy.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="asha-two-col-img-right" style={{ alignItems: 'center' }}>
              <div>
                <span style={sectionLabel}>Introduction</span>
                <div style={divider} />
                <h2 style={sectionHeading}>The invisible infrastructure of rural health</h2>
                <p style={bodyText}>Community health in rural India is held up by people who live right next to the problem &#8212; women in villages, local midwives, and volunteers who know everyone in their area. They know which house has a pregnant woman, which child has still not been vaccinated, and which elderly man keeps forgetting his blood pressure medicine. In a country where many villages still do not have access to medical clinics, these grassroots workers are the crucial first interface between marginalised communities and the public healthcare system.</p>
                <p style={bodyText}>The ASHA programme was started in 2005 under the National Rural Health Mission and rolled out from 2006 &#8212; one trained female health worker for every thousand people in a village. ASHAs, wearing white sarees with a blue border, are recruited from the village itself and are generally women between the ages of 25 and 45 who have studied till class 10. They work alongside the Anganwadi system, established in 1975, which runs village centres for nutrition, pre-school education, and basic health check-ups. Together, these two systems carry most of rural maternal and child health in India.</p>
                <p style={bodyText}>Engaging with ASHA workers in Annamayya district made it apparent that the way the government describes their role does not adequately reflect what they actually do &#8212; or the real cost at which they do it. Honorariums fixed with little regard to performance, overtime work not compensated, travel costs incurred personally, and absorbing patients&#8217; stress as a normal part of the job are all factors rarely mentioned in official reviews.</p>
              </div>
              <div className="asha-sticky-img">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', overflow: 'hidden' }}>
                  <Image src="/images/asha-5.jpg" alt="Field visit shadowing ASHA workers" fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover', objectPosition: '70% center' }} />
                </div>
                <p style={figureCaption}>Field visit shadowing ASHA workers</p>
              </div>
            </div>
          </div>
        </section>

        {/* LITERATURE REVIEW */}
        <section style={{ backgroundColor: 'var(--parchment)', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span style={sectionLabel}>Literature Review</span>
            <div style={divider} />
            <div className="asha-two-col">
              <div>
                <h2 style={{ ...sectionHeading, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>What the existing research says</h2>
                <p style={bodyText}>Most literature describes ASHAs as the &#8220;first port of call&#8221; for rural health needs. Saxena, Kakkar, and Semwal (2012) looked at 150 ASHAs in Haridwar district and found that the majority saw antenatal care, vaccinations, and family planning as their main work. The National Health Mission describes ASHAs both as service providers &#8212; carrying a basic drug kit with ORS, Iron &amp; Folic Acid tablets, condoms, and delivery kits &#8212; and as activists who spread awareness and push communities to use existing health services.</p>
                <p style={bodyText}>What field observation in Annamayya confirmed was this picture, and more: ASHAs carry medicine and vaccine boxes between villages, pick up vaccines weekly from the PHC, run NCD surveys door-to-door, and accompany pregnant women to district hospitals. What doesn&#8217;t show up in official descriptions is how long their actual day is &#8212; usually 9am to 5pm with no holidays &#8212; and how many additional duties they handle: dengue checks, TB follow-ups, ABHA registration.</p>
              </div>
              <div>
                <p style={{ ...bodyText, marginTop: '3.2rem' }}>Studies on maternal and child health are consistent. Padda et al (2013) found that rural indicators in Faridkot sometimes outperformed urban ones after ASHAs were introduced. They ensure vaccinations are done at the stipulated 45-day, 75-day, 105-day, and 10-month intervals; they work with the Anganwadi system distributing &#8216;Balamrut&#8217; powder, eggs for children aged 3&#8211;5, and iron syrup in schools.</p>
                <p style={bodyText}>The literature is equally consistent on challenges. Gopalan, Mohanty and Das (2012) found that what demotivates ASHAs most is poor infrastructure, excessive workload, and unpredictable incentives. What existing research doesn&#8217;t evaluate is the actual economics: how &#8377;10,000 a month plays out when each worker pays for transport, her mobile device, data charges, and paperwork herself.</p>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginTop: '1rem' }}>
                  <Image src="/images/asha-4.jpg" alt="Saturday immunisation at the Anganwadi school" fill sizes="(max-width: 768px) 100vw, 500px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <p style={figureCaption}>Saturday immunisation at the Anganwadi school</p>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={sectionLabel}>Methodology</span>
            <div style={divider} />
            <h2 style={sectionHeading}>A qualitative approach</h2>
            <p style={bodyText}>This report uses a qualitative approach &#8212; findings developed from conversations and direct observation rather than surveys or statistical data. This method was chosen because the answers sought (a day in the life of an ASHA worker, her community&#8217;s perception of her, and what it feels like to do this job for the money earned) are not the kind a questionnaire can answer well. Statistics can tell you that an ASHA worker vaccinated sixty per cent of the women in her community, but they can&#8217;t tell you why she walked two kilometres in the scorching heat to make that happen.</p>
            <p style={bodyText}>The fieldwork was done in a cluster of small villages in a semi-arid rural region of Annamayya district. Two villages were visited: one close to an all-weather road, and one at a distance from it. This was deliberate &#8212; access to transport meaningfully changes a community&#8217;s experience with the healthcare system. Three ASHA workers were interviewed: Chamundeshwari, Ammajan, and Hemlata, who collectively covered the chosen area. Fifteen community members were recruited from the Rural Health Centre and an immunisation drive, assembled to represent Hindu and Muslim families, women and men, young mothers and older women, Telugu-only and Telugu-Urdu speakers.</p>
            <p style={bodyText}>Three methods were used: interviews conducted personally in Telugu with no time limits, direct observation during field rounds (prenatal checks, documentation, home visits), and study of relevant documents including National Health Mission pages and research papers. Analysis involved repeated scrutiny of field notes, grouping patterns into four themes: daily work, pay and financial conditions, community perception, and structural problems.</p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '1.25rem', marginTop: '3rem' }}>Weekly &amp; Monthly Schedule &#8212; Annamayya District Cluster</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text, serif', fontSize: '1rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--inkbrown)' }}>
                    <th style={{ padding: '0.85rem 1.2rem', textAlign: 'left', color: 'var(--parchment)', fontWeight: 600, letterSpacing: '0.05em', whiteSpace: 'nowrap', fontFamily: 'Crimson Text, serif' }}>Day / Frequency</th>
                    <th style={{ padding: '0.85rem 1.2rem', textAlign: 'left', color: 'var(--parchment)', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'Crimson Text, serif' }}>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Monday &#8211; Tuesday', 'Village rounds: antenatal follow-ups, household surveys, NCD screenings'],
                    ['Wednesday', 'Thettu subcentre &#8212; immunisation session + village rounds'],
                    ['Thursday', 'School and Anganwadi visits: iron tablets (6+ yrs), Vitamin A, height/weight, deworming'],
                    ['Friday', 'Dry Day survey: larva/dengue checks, sanitation inspections, drain monitoring'],
                    ['Saturday', 'Anganwadi immunisation (rotating across four villages each month); iron syrup for ages 3&#8211;5'],
                    ['Sunday', 'Emergency standby; early finish if no urgent cases'],
                    ['3rd Friday', 'All pregnant women escorted to Kurabalakota PHC'],
                    ['Twice monthly', 'All pregnant women to Madanapalle District Hospital; Village Health Nutrition Day; Village Health Sanitation Day'],
                    ['1st Tuesday', 'Compulsory ASHA meeting, Kurabalakota PHC'],
                    ['Monthly', 'Gram Sabha meeting'],
                  ].map(([day, activity], i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'var(--offwhite)' : 'var(--parchment)' }}>
                      <td style={{ padding: '0.8rem 1.2rem', color: 'var(--inkbrown)', fontWeight: 600, whiteSpace: 'nowrap', borderBottom: '1px solid #E8DFD0', verticalAlign: 'top' }} dangerouslySetInnerHTML={{ __html: day }} />
                      <td style={{ padding: '0.8rem 1.2rem', color: '#3a2a1a', borderBottom: '1px solid #E8DFD0', lineHeight: 1.6 }}>{activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FINDINGS */}
        <section id="findings" style={{ backgroundColor: 'var(--parchment)', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span style={sectionLabel}>Findings</span>
            <div style={divider} />

            {/* What ASHA workers really do */}
            <div style={{ marginBottom: '6rem' }}>
              <h2 style={sectionHeading}>What ASHA workers really do</h2>
              <div className="asha-two-col-img-left">
                <div>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <Image src="/images/asha-2.jpg" alt="An ASHA worker, in the white saree, detailing the nature of her work" fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <p style={figureCaption}>An ASHA worker, in the white saree, detailing the nature of her work</p>
                </div>
                <div>
                  <p style={bodyText}>A typical working day begins around nine in the morning and does not have a clear end. Officially, ASHA workers are classified as part-time volunteers required to work only a few hours, but in practice they are on duty from 9am to 5pm and, in emergencies, on call around the clock. Chamundeshwari described being reachable at any hour &#8212; when a woman in her area goes into labour at two in the morning, she is the person who gets the phone call. Weekends are rarely free, especially during immunisation drives or surveys.</p>
                  <p style={bodyText}>The range of work is striking: prenatal check-ups and follow-ups, escorting pregnant women to hospital, post-delivery home visits, newborn weighing, the full childhood vaccination schedule, TB screening and follow-up, door-to-door dengue and malaria surveys, distributing iron tablets, family planning counselling, contact tracing during outbreaks, and substantial register-keeping. Ammajan also mentioned tasks outside any official remit, such as helping families apply for disability certificates and personally following up on patients who had stopped taking TB medication.</p>
                  <p style={bodyText}>Each ASHA worker is responsible for about a thousand people &#8212; and sometimes more. When asked whether this caseload was too high, all three laughed. Hemlata pointed out that the official one-ASHA-per-thousand guideline does not account for the physical spread of villages: reaching a single household can take half an hour on foot.</p>
                </div>
              </div>
            </div>

            {/* Pay */}
            <div style={{ marginBottom: '6rem' }}>
              <h2 style={sectionHeading}>Pay and money problems</h2>
              <div className="asha-two-col-img-right" style={{ alignItems: 'center' }}>
                <div>
                  <p style={bodyText}>Pay was the single issue that came up in every interview. ASHA workers do not receive a fixed salary &#8212; their income consists of a small monthly honorarium of roughly &#8377;10,000, together with performance-based incentives. The incentive structure looks reasonable on paper, but payment is often delayed by months or never given. Chamundeshwari told me she was still waiting on incentives from work she had done five months earlier.</p>
                  <p style={bodyText}>In addition to meagre compensation, ASHA workers absorb significant out-of-pocket expenses. They use their personal phones for work &#8212; calls to patients, sending register photos, navigating government apps &#8212; and pay for their own mobile data. During the first months of COVID-19 they bought their own PPE. They buy their own registers, pens, and at times even bus tickets to submit reports to the block office.</p>
                  <p style={bodyText}>Their personal circumstances make these costs much harder to bear. Chamundeshwari&#8217;s husband has been unwell for years and cannot work consistently, so her ASHA income is essentially what keeps the household running. Ammajan, whose husband has passed away, is the sole earner for children still in school &#8212; she described having to choose between paying her phone bill and paying their school fees. None of the three women has any form of pension, leave entitlement, or job security.</p>
                </div>
                <div className="asha-sticky-img">
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                    <Image src="/images/asha-1.jpg" alt="An ASHA worker describing her living conditions outside her house" fill sizes="(max-width: 768px) 100vw, 380px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                  <p style={figureCaption}>An ASHA worker describing her living conditions outside her house</p>
                </div>
              </div>
            </div>

            {/* Community */}
            <div style={{ marginBottom: '6rem' }}>
              <h2 style={sectionHeading}>What the community thinks</h2>
              <p style={{ ...bodyText, maxWidth: '820px' }}>Community views were more divided than expected. Some respondents spoke about their ASHA worker in genuinely warm terms &#8212; one young mother credited her ASHA with saving her baby&#8217;s life after a complicated pregnancy. An older woman said the ASHA was the only person in any official capacity who had ever come to her door simply to ask whether she was alright.</p>
              <p style={{ ...bodyText, maxWidth: '820px' }}>Other respondents had little or no contact with their ASHA at all, and a few did not know who their ASHA was. When probed, the explanation usually came down to one of two things: either the household lived in an outlying hamlet that was difficult to reach regularly, or there was a quiet social distance along religious or caste lines that no one quite stated openly but was clearly present. COVID-19 came up in nearly every community interview &#8212; several respondents felt ASHAs deserved far greater recognition for their work during that period.</p>
            </div>

            {/* System */}
            <div>
              <h2 style={sectionHeading}>Problems in the system</h2>
              <div className="asha-two-col-img-right" style={{ alignItems: 'center' }}>
                <div>
                  <p style={bodyText}>The principal issue is that ASHA workers are not permanent employees. The government classifies their status as &#8220;voluntary&#8221; &#8212; which means no guaranteed salary, no leave, no pension. Many have been in the role for over a decade and still have no job security, no real path forward. When ASHA workers are compared with Auxiliary Nurse Midwives (ANMs), who do overlapping work in the same villages, the disparity is stark. ANMs are formally employed with a fixed salary, leave entitlements, and a pension. In practice the ASHA worker often does the legwork while the ANM handles the clinical portion. All three ASHA workers raised this comparison without prompting.</p>
                  <p style={bodyText}>The move to digital reporting adds another layer of burden. The government has been steadily shifting registers and surveys onto smartphone applications &#8212; but none of the three women had been given a government phone, and none had received meaningful training on the apps. They were navigating software on personal handsets, often with help from their children, while still being held to the same submission deadlines. Chamundeshwari said she had been pulled up for late submissions even though her phone kept crashing.</p>
                </div>
                <div className="asha-sticky-img">
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <Image src="/images/asha-3.jpg" alt="Community engagement at Zila Parishad High School, Thettu" fill sizes="(max-width: 768px) 100vw, 380px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                  <p style={figureCaption}>Community engagement at Zila Parishad High School, Thettu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPENSATION TABLE */}
        <section style={{ padding: '7rem 2rem', backgroundColor: 'var(--inkbrown)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span style={{ ...sectionLabel, color: 'var(--turmeric)' }}>Compensation</span>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--turmeric)', marginBottom: '2rem' }} />
            <h2 style={{ ...sectionHeading, color: 'var(--parchment)' }}>ASHA Compensation Structure, Annamayya District (2025)</h2>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text, serif', fontSize: '1.05rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--turmeric)' }}>
                    <th style={{ padding: '0.85rem 1.2rem', textAlign: 'left', color: 'var(--turmeric)', fontWeight: 600, letterSpacing: '0.06em', fontFamily: 'Crimson Text, serif' }}>Component</th>
                    <th style={{ padding: '0.85rem 1.2rem', textAlign: 'left', color: 'var(--turmeric)', fontWeight: 600, letterSpacing: '0.06em', fontFamily: 'Crimson Text, serif' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Fixed Monthly Honorarium', '&#8377;10,000'],
                    ['Task-Based Incentives', '&#8377;2,000 &#8211; &#8377;4,000 (approx., often unpaid)'],
                    ['Gratuity on Retirement', '&#8377;1.5 Lakh (after 30 years of service)'],
                    ['Maternity Leave Benefit', '&#8377;60,000 for 180 days'],
                    ['Retirement Age', '62 years'],
                    ['Employment Classification', 'Honorary / Voluntary (not permanent govt. employee)'],
                    ['ANM (for comparison)', '&#8377;30,000/month + pension + 20 days leave/year'],
                  ].map(([component, detail], i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(245,237,214,0.1)', backgroundColor: i === 6 ? 'rgba(201,122,29,0.12)' : 'transparent' }}>
                      <td style={{ padding: '0.9rem 1.2rem', color: 'var(--parchment)', fontWeight: i === 6 ? 600 : 400, verticalAlign: 'top' }}>{component}</td>
                      <td style={{ padding: '0.9rem 1.2rem', color: i === 6 ? 'var(--turmeric)' : 'rgba(245,237,214,0.75)', fontWeight: i === 6 ? 600 : 400 }} dangerouslySetInnerHTML={{ __html: detail }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.82rem', color: 'rgba(245,237,214,0.4)', marginTop: '1rem', fontStyle: 'italic' }}>Source: careermeto.com/en/annamayya-asha-worker-salary-2025/</p>
          </div>
        </section>

        {/* DISCUSSION */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={sectionLabel}>Discussion</span>
            <div style={divider} />
            <h2 style={sectionHeading}>A loop, not three separate problems</h2>
            <p style={bodyText}>The three themes that came up across interviews &#8212; workload, pay, and community perception &#8212; don&#8217;t really stand on their own. They are interrelated and point to deeper issues in the system. The ASHAs spoken to were doing substantially more than their original job description: maternal health visits, COVID follow-ups, NCD screening, TB tracking, election duty, distributing iron tablets to young girls, and even helping fill out Ayushman Bharat and Aadhaar-linked beneficiary lists. But the incentive structure hasn&#8217;t expanded with the workload.</p>
            <p style={bodyText}>So they end up doing more work for the same unpredictable pay, which affects how their families and neighbours view the job. A few women mentioned that their husbands or in-laws kept asking why they were &#8220;running around&#8221; so much for so little money &#8212; and this constant questioning seemed to tire them more than the physical work itself. The community perception piece isn&#8217;t separate from the pay piece either. When people in the village see that the government doesn&#8217;t pay you a proper salary, they don&#8217;t take the role seriously, which makes it harder to convince women to get safe deliveries or vaccinate their children. Pay shapes perception, perception shapes cooperation, cooperation shapes how heavy the workload feels. It is a loop, not three separate problems.</p>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', overflow: 'hidden', margin: '3rem 0' }}>
              <Image src="/images/asha-6.jpg" alt="Parent-Teacher Meeting at Zila Parishad High School" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
            </div>
            <p style={figureCaption}>Parent-Teacher Meeting at Zila Parishad High School where ASHA workers were checking height and weight and distributing iron and deworming tablets</p>
            <p style={{ ...bodyText, marginTop: '2rem' }}>These findings align with what researchers have documented in other states. Ved et al (2019) and Saprii et al (2015) both pointed out the mismatch between the scope of ASHA work and the volunteer framing. The compensation delays match patterns Bajpai and Dholakia (2011) have written about, and what surfaced during the ASHA strikes in Maharashtra, Karnataka, and Haryana between 2020 and 2023. Scott&#8217;s (2018) global review of community health workers raised similar issues: unclear job descriptions, weak supervisory support, and the gendered devaluation of care work.</p>
            <p style={bodyText}>The sample for this research was small and the findings cannot be substantially generalised. The women interviewed were also the ones willing to talk &#8212; ASHAs who had quit are absent from this data, and their reasons might be the most important ones. What is put together here is a starting point rather than a final piece.</p>
          </div>
        </section>

        {/* POLICY RECOMMENDATIONS */}
        <section id="recommendations" style={{ backgroundColor: 'var(--parchment)', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span style={sectionLabel}>Policy Recommendations</span>
            <div style={divider} />
            <h2 style={{ ...sectionHeading, marginBottom: '3rem' }}>Five things that would actually change something</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {policies.map((p, i) => {
                const c = policyCardColors[i]
                return (
                  <div key={p.num} style={{ backgroundColor: c.bg, padding: '2.5rem 2rem', borderRadius: '2px' }}>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: c.accent, lineHeight: 1, marginBottom: '1rem', opacity: 0.6 }}>{p.num}</p>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 500, color: c.text, marginBottom: '1rem', lineHeight: 1.2 }}>{p.title}</h3>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', lineHeight: 1.75, color: c.text, opacity: 0.85 }}>{p.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span style={sectionLabel}>Conclusion</span>
            <div style={divider} />
            <h2 style={sectionHeading}>What this study found</h2>
            <p style={bodyText}>This study found that ASHAs in the villages visited are carrying a workload that has expanded far beyond their original role, while their pay remains unpredictable and their position in the community is more uncertain than the official narrative suggests. The three themes of workload, pay, and community perception are deeply tied together, and they all point to a system that depends on women&#8217;s labour without giving them the recognition, security, or voice that the work deserves.</p>
            <p style={bodyText}>Surface-level fixes &#8212; a small incentive raise here, a one-time bonus there &#8212; are not going to solve anything. What the findings suggest is: permanent employment, a fixed incentive structure, real social security and safety provisions, and actual decision-making power for ASHAs themselves. Future research could push this much further. A larger, multi-state sample would help show how much of what was found here is specific to this region versus a national pattern. A longitudinal study following the same ASHAs over a few years would capture how burnout and changing policy actually play out in their lives.</p>
            <div style={{ borderLeft: '3px solid var(--turmeric)', paddingLeft: '2rem', marginTop: '3rem' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--inkbrown)' }}>&#8220;They are doing what would, in any other country, be considered the work of a community health nurse &#8212; but being paid like part-time volunteers and managed like government employees.&#8221;</p>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginTop: '1rem' }}>Ananya Sharedalal</p>
            </div>
          </div>
        </section>

        {/* REFERENCES */}
        <section style={{ backgroundColor: 'var(--parchment)', padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <button onClick={() => setRefsOpen(!refsOpen)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: '100%', textAlign: 'left' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 500, color: 'var(--inkbrown)' }}>References</span>
              <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.85rem', color: 'var(--stone)', letterSpacing: '0.1em' }}>{refsOpen ? '▲ collapse' : '▼ expand'}</span>
            </button>
            {refsOpen && (
              <ol style={{ marginTop: '2rem', paddingLeft: '1.5rem' }}>
                {references.map((ref, i) => (
                  <li key={i} style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.98rem', lineHeight: 1.7, color: '#4a3520', marginBottom: '0.85rem' }}>{ref}</li>
                ))}
              </ol>
            )}
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .asha-two-col {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,1fr);
          gap: 4rem;
          align-items: start;
        }
        .asha-two-col-img-right {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,400px);
          gap: 5rem;
          align-items: start;
        }
        .asha-two-col-img-left {
          display: grid;
          grid-template-columns: minmax(0,400px) minmax(0,1fr);
          gap: 4rem;
          align-items: start;
        }
        .asha-sticky-img { position: static; }
        @media (max-width: 768px) {
          .asha-two-col,
          .asha-two-col-img-right,
          .asha-two-col-img-left {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .asha-sticky-img {
            position: static !important;
          }
        }
      `}</style>
    </>
  )
}

