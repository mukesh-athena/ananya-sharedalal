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

  const policyCardColors = [
    { bg: 'var(--inkbrown)', text: 'var(--parchment)', accent: 'var(--turmeric)' },
    { bg: 'var(--parchment)', text: 'var(--inkbrown)', accent: 'var(--terracotta)' },
    { bg: '#2d1f0e', text: 'var(--parchment)', accent: 'var(--turmeric)' },
    { bg: 'var(--offwhite)', text: 'var(--inkbrown)', accent: 'var(--terracotta)' },
    { bg: 'var(--turmeric)', text: 'var(--inkbrown)', accent: 'var(--inkbrown)' },
  ]

  const references = [
    { text: 'More, V. (2025, June 25). Annamayya ASHA Worker Salary 2025. Career Meto.', url: 'https://careermeto.com/en/annamayya-asha-worker-salary-2025/' },
    { text: 'Ministry of Health & Family Welfare-Government of India. (n.d.). About Accredited Social Health Activist (ASHA) :: National Health Mission.', url: 'https://nhm.gov.in/index1.php?lang=1&level=1&sublinkid=150&lid=226' },
    { text: 'The Hindu Bureau. (2026, February 23). ASHA workers stage protest demanding fixed ₹18,000 salary and fulfilment of promises. The Hindu.', url: 'https://www.thehindu.com/news/cities/Hyderabad/asha-workers-stage-protest-demanding-fixed-18000-salary-and-fulfilment-of-promises/article70667231.ece' },
    { text: 'Chakraborty, R. (2026, February 24). The ASHA worker\'s mental health paradox. The Hindu.', url: 'https://www.thehindu.com/society/asha-workers-mental-health-paradox-rural-health-lack-of-incentive/article70147080.ece' },
    { text: 'Undefined. (2025, March 14). ASHA workers and honorarium. INSIGHTS IAS.', url: 'https://www.insightsonindia.com/2025/03/14/asha-workers-and-honorarium/' },
    { text: 'World Health Organization: WHO. (2021, December 3). ASHA — the driving force behind India\'s public health services.', url: 'https://www.who.int/india/news-room/feature-stories/detail/asha-the-driving-force-behind-india-s-public-health-services' },
    { text: 'Prakash, P. (2022, May 28). Explained | All about India\'s ASHA workers, recipients of WHO\'s Global Leaders Award. The Hindu.', url: 'https://www.thehindu.com/news/national/explained-all-about-indias-asha-workers-recipients-of-whos-global-leaders-award/article65457663.ece' },
    { text: 'Dudala, S. R., et al. (2021). Assessment of gaps of knowledge and practices of frontline community workers in Chandragiri Mandal, Chittoor district, Andhra Pradesh. International Journal of Community Medicine and Public Health, 8(3), 1299.', url: 'https://doi.org/10.18203/2394-6040.ijcmph20210817' },
    { text: 'S. Swarna. (2026). Knowledge of Accredited Social Health Activists on SDGs, Maternal Health, Child Health, Reproductive Health in selected District of Andhra Pradesh. Galore International Journal of Applied Sciences and Humanities, 88.', url: 'https://doi.org/10.52403/gijash.20260113' },
    { text: 'Biyyala, R., Moola, R. S. R., & Arepalli, S. (2019). Evaluating the performance of ASHA workers in rural and tribal areas in Kurnool division of Kurnool district, Andhra Pradesh. International Journal of Community Medicine and Public Health, 6(8), 3418.', url: 'https://doi.org/10.18203/2394-6040.ijcmph20193464' },
    { text: 'Abdel-All, M., Abimbola, S., Praveen, D., & Joshi, R. (2019). What do Accredited Social Health Activists need to provide comprehensive care that incorporates non-communicable diseases? Human Resources for Health, 17(1), 73.', url: 'https://doi.org/10.1186/s12960-019-0418-9' },
    { text: 'Sreerama, G., Matavalum, S., Chandresekharan, P., & Thunga, V. (2015). Difficulties in accessing and availing of public health care systems among rural population in Chittoor District, Andhra Pradesh. International Journal of Medicine and Public Health, 5(4), 265.', url: 'https://doi.org/10.4103/2230-8598.165085' },
    { text: 'Saxena, V., Kakkar, R., & Semwal, V. (2012). A study on ASHA - a change agent of the society. Indian Journal of Community Health, 24(1), 15–18.', url: 'https://www.cabdirect.org/cabdirect/abstract/20123357967' },
    { text: 'Padda, P., Devgun, S., Gupta, V., Chaudhari, S., & Singh, G. (2013, December 31). Role of ASHA in improvement of maternal health status in northern India: an urban rural comparison.', url: 'https://www.iapsmupuk.org/journal/index.php/IJCH/article/view/357' },
    { text: 'Gopalan, S. S., Mohanty, S., & Das, A. (2012). Assessing community health workers\' performance motivation: a mixed-methods approach on India\'s Accredited Social Health Activists (ASHA) programme. BMJ Open, 2(5), e001557.', url: 'https://doi.org/10.1136/bmjopen-2012-001557' },
    { text: 'Scott, K., George, A. S., & Ved, R. R. (2019). Taking stock of 10 years of published research on the ASHA programme. Health Research Policy and Systems, 17(1).', url: 'https://doi.org/10.1186/s12961-019-0427-0' },
    { text: 'Scott, K., & Shanker, S. (2010). Tying their hands? Institutional obstacles to the success of the ASHA community health worker programme in rural north India. AIDS Care, 22(sup2), 1606–1612.', url: 'https://doi.org/10.1080/09540121.2010.507751' },
    { text: 'Dholakia, R. H., & Bajpai, N. (2011). Improving the performance of accredited social health activists in India. Columbia Academic Commons.', url: 'https://doi.org/10.7916/d8988g63' },
    { text: 'Scott, K., Beckham, S. W., et al. (2018). What do we know about community-based health worker programs? A systematic review. Human Resources for Health, 16(1), 39.', url: 'https://doi.org/10.1186/s12960-018-0304-x' },
    { text: 'Child Rights and You. (2026, March 31). What is Anganwadi System in India? Objectives & Necessity. CRY.', url: 'https://www.cry.org/blog/anganwadi-system-in-india/' },
    { text: 'ASHA | Roles, responsibilities, and benefits. (2025, July 30).', url: 'https://www.doctutorials.com/guide/asha' },
    { text: 'Malhotra, R. K. M. D. (2025). Unrecognised pillars of public health: The struggles of ASHA workers in India. Vascular and Endovascular Review.', url: 'https://doi.org/10.64149/j.ver.8.15s.116-126' },
    { text: 'Sundararaman, T., Ved, R., Gupta, G., & Samatha, M. (2012). Determinants of functionality and effectiveness of community health workers. BMC Proceedings, 6(S5).', url: 'https://doi.org/10.1186/1753-6561-6-s5-o30' },
    { text: 'Ved, R., Scott, K., Gupta, G., et al. (2019). How are gender inequalities facing India\'s one million ASHAs being addressed? Human Resources for Health, 17(1), 3.', url: 'https://doi.org/10.1186/s12960-018-0338-0' },
    { text: 'Renuka, B., Sreedevi, A., & Paul, C. N. (2014). Impact of Educational Intervention on Knowledge of Asha Workers about Their Job Responsibilities in Rural and Tribal Areas of Kurnool Division. International Journal of Scientific and Research Publications, 4(11).', url: 'https://www.ijsrp.org/research-paper-1114/ijsrp-p3526.pdf' },
    { text: 'Government of Andhra Pradesh, Women Development & Child Welfare Department. (n.d.). Evaluation of Accredited Social Health Activist (ASHA) in Andhra Pradesh.', url: 'https://wdcw.ap.gov.in/Schemes/Saksham' },
    { text: 'Role of ASHA workers in Andhra Pradesh – A review article. (2024). DNR College Research Publication.', url: 'https://www.dnrcollege.org/2024/3/3.4.3/P_37.pdf' },
    { text: 'RURAL HEALTH — RISHI VALLEY EDUCATION CENTRE. (n.d.). RISHI VALLEY EDUCATION CENTRE.', url: 'https://www.rishivalley.org/rural-health-centre' },
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
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, lineHeight: 1.05, color: 'var(--parchment)', marginBottom: '0.5rem' }}>The <em>Nirasha</em> of ASHAs</h1>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, lineHeight: 1.3, color: 'rgba(245,237,214,0.75)', marginBottom: '2.5rem', fontStyle: 'italic' }}>The Invisible Labour of India&#8217;s Frontline Healthcare Workers</h1>
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
              ASHA stands for Accredited Social Health Activist, but it also means &#8220;hope&#8221; in Hindi. Since the introduction of the programme in 2005 under the National Rural Health Mission (NRHM), over nine lakh ladies have been recruited in India&#8217;s rural areas, and there is limited documentation of their day-to-day working conditions. This report is based on qualitative studies conducted with three ASHA workers, fifteen community members, and observations from field rounds in a group of villages in Annamayya district, Andhra Pradesh. The findings reveal that the official narrative of ASHAs as &#8220;part-time volunteers&#8221; is highly inappropriate since their work is comparable to that of full-time workers on multiple fronts, including maternal health, disease surveillance, digital reporting, and social welfare. These ASHA workers are very modestly remunerated; they bear the cost of transportation, equipment, and communication personally, and despite that, receive their dues irregularly. Further, this paper brings forth the interrelated dynamic between poor pay, community perception and disproportionate workload. The paper requests for a permanent classification of ASHA workers, a simplified incentive system and meaningful representation of these ladies in health policy decision making.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span style={sectionLabel}>Introduction</span>
            <div style={divider} />
            <h2 style={sectionHeading}>Introduction</h2>
            <p style={bodyText}>Community health in rural India is, as a matter of fact, held up by people who live right next to the problem &#8211; women in villages, local midwives, and volunteers who know everyone in their area. They know which house has a pregnant woman, which child has still not been vaccinated, and which elderly man keeps forgetting his blood pressure medicine. In a country where many villages still do not have access to medical clinics and hospitals, these grassroots workers are the crucial first interface between these marginalised communities and the public healthcare system. They translate what doctors say into the local language, carry medicines over long distances, and build a kind of trust that the government itself has struggled to build.</p>
            <p style={bodyText}>The ASHA (an acronym for Accredited Social Health Activist) programme was started in 2005 under the National Rural Health Mission (NRHM) and rolled out from 2006. The intention is to have one trained female health worker for every one thousand people in a community or village. ASHAs, wearing white sarees with a blue border, are recruited from the village itself by women&#8217;s groups, the Gram Sabha, and block officers, and they&#8217;re generally supposed to be women between the ages 25 and 45 who have studied till class 10 at least. Literacy requirements may be relaxed if no suitable candidates are available. They work alongside the Anganwadi system that was established in 1975 under the Integrated Child Development Services Scheme and runs village centres for nutrition, pre-school education, and basic health check-ups for children less than 6 years in age, pregnant women, and new mothers. Thus, most of the rural maternal and child health in India is taken care of by the Anganwadi and ASHA systems. Today, there are over nine lakh ASHA workers across the country, making it one of the biggest community health worker programmes in the world.</p>
            <p style={bodyText}>The issue is, even though everyone talks about how important ASHA workers are, almost no one really looks at what their actual day-to-day routines are like. A lot of what is written about them is just quantitative data like the number of child deliveries they helped with, the number of vaccines administered, etc. There isn&#8217;t much discussion on the conditions they are working in, the challenges they face or how they think they can be more effective. Engaging with the ASHA workers in Annamayya district in Andhra Pradesh made it apparent that the way the government describes their role does not adequately reflect what they actually do and the real cost at which they do it. Honorariums fixed with little regard to performance, overtime work not being compensated, travel and conveyance costs having to be incurred personally, and absorbing patients&#8217; stress as a normal part of the job, are all factors that are rarely mentioned in official reviews of this group of medical workers.</p>
            <div style={{ width: '100%', margin: '2rem 0' }}>
              <Image src="/images/asha-6.jpg" alt="Field visit shadowing ASHA workers" width={1200} height={900} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <p style={bodyText}>One specific rural area was therefore chosen as a sample for case study and the work done essentially focussed on exploring the ground realities of being an ASHA worker and developing a perspective on how they are perceived by the people they take care of. It is based on a cross section of interviews and field observations carried out in villages near the Rishi Valley Rural Health Centre, Kurabalakota Primary Healthcare Centre (PHC), and Madanapalle in Annamayya district of Andhra Pradesh. I spoke to ASHA workers, Anganwadi teachers, and patients from a mix of Hindu and Muslim households across different ages. Statistically, it is not a large survey since the focus is more on exploring ground realities: what is working, what better can be done, and where the trust isn&#8217;t really reaching.</p>
            <p style={bodyText}>The rest of the report is structured as follows: a literature review of what has already been said about ASHA workers, followed by field observations and interview findings concluding with a discussion of what is missing in existing reportage.</p>
          </div>
        </section>

        {/* LITERATURE REVIEW */}
        <section style={{ backgroundColor: 'var(--parchment)', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span style={sectionLabel}>Literature Review</span>
            <div style={divider} />
            <h2 style={sectionHeading}>Literature Review</h2>
            <p style={bodyText}>This section reviews what has already been written about ASHA workers. It is organised into three themes: what studies say about their roles and how effective they are; their specific role in maternal, child, and nutrition-related health, and the problems and challenges they face. The section concludes with a brief discussion on what is missing from the existing research, which is the gap this report is trying to fill.</p>
            <p style={bodyText}>Most of the literature describes ASHAs as the &#8220;first port of call&#8221; for rural health needs, especially for women and children. Saxena, Kakkar, and Semwal (2012) looked at 150 ASHAs in Haridwar district and found that the majority saw antenatal care, vaccinations, and family planning as their main work, and a lot of them also saw the job as a way into future employment. The National Health Mission&#8217;s own writing describes ASHAs both as service providers (they carry a basic drug kit that contains Oral Rehydration Salts, Iron &amp; Folic Acid tablets, condoms, delivery kits and some basic Over The Counter medications) and as activists who spread awareness about health and push the community to actually use the health services that exist. What I saw in the field matches this almost completely: ASHAs in Annamayya district carry medicine and vaccine boxes between villages, pick up vaccines weekly from the PHC, run Non Communicable Disease (NCD) surveys door-to-door, and go with pregnant women to the PHC or district hospital. But what doesn&#8217;t show up in the official description is how long their actual day is (usually a full 9am to 5pm day with no holidays) and how many additional duties they handle, like dengue checks, Tuberculosis (TB) follow-ups and registering participants for India&#8217;s digital healthcare ecosystem, Ayushman Bharat Health Account (ABHA).</p>
            <p style={bodyText}>A lot of studies also look at how ASHAs affect maternal and child health specifically. Padda et al (2013) compared urban and rural Faridkot in Punjab and found that maternal and child health services in rural areas clearly improved after ASHA workers were introduced, with rural indicators sometimes doing better than urban ones. ASHAs are the ones making sure babies are exclusively breastfed for the first six months, that vaccinations are done at the stipulated 45 day, 75 day, 105 day, and 10 month intervals, and that high-risk pregnancies actually make it to the right hospital. They also work with the Anganwadi system, helping with monthly immunisation, handing out &#8216;Balamrut&#8217; powder (an Ayurvedic immunity booster) and eggs for children between 3 and 5 years of age, and distributing iron syrup and deworming tablets in schools.</p>
            <div style={{ width: '100%', margin: '2rem 0' }}>
              <Image src="/images/asha-4.jpg" alt="Saturday immunisation at the Anganwadi school" width={1200} height={800} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <p style={bodyText}>The interviews backed this up too. Patients in villages around Madanapalle said ASHAs were most helpful with anaemia, vaccinations, and calling the Emergency Response Service on 108 for ambulances. One ASHA worker had just spent three days, travelling 45 kilometres each way on each day to Punganur, to arrange for a tubectomy for a lady from her village. What was especially striking in this instance was that she had to personally bear the full cost of all this travel.</p>
            <p style={bodyText}>The literature is also consistent on the challenges. Gopalan, Mohanty and Das (2012) did a mixed-methods study of 386 ASHAs in Orissa and found that what demotivates ASHAs most is bad health infrastructure, too much workload, and how the incentives are structured, while what keeps them going is mostly internal, like a sense of social responsibility and self-efficacy. Across studies, ASHAs come across as overworked, under-resourced, and financially insecure. They don&#8217;t get a fixed salary, just a small honorarium and performance-based incentives, so what they actually earn varies from month to month. And all of this sits on top of gender. Every ASHA is a lady, and a lot of them are widowed or separated or from Below-Poverty-Line homes doing community health work over and above all the housework. Saxena et al (2012) also pointed out that even basic things like the age and education criteria are not always followed during selection, so even the small protections built into the programme do not always apply.</p>
            <p style={bodyText}>What the existing research doesn&#8217;t really evaluate is the actual economics of being an ASHA. How the &#8377;10,000 a month honorarium in areas like the ones investigated in this study actually plays out when each worker has to pay for transport costs, their mobile device and its data charges, and all the paperwork. Or what it is like when three ASHAs are doing the work of five because there aren&#8217;t enough workers. Or how women deal with the fact that the job is not permanent, there is no pension, and that many need to take microloans to manage cash flows. There is also not much research on how ASHA workers&#8217; perception differs across communities and categories. Some families think they are extremely important, but others, especially in semi-urban Muslim or higher-income households, said they barely see them and just go to private clinics instead. The fieldwork and interviews in this report attempt to address these gaps by focusing on what the workers themselves say about their conditions and what the community actually thinks, in a part of Andhra Pradesh that has not really been written about much.</p>

            {/* TABLE 2 — COMPENSATION */}
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '1.25rem', marginTop: '3rem' }}>Table 2: ASHA Compensation Structure, Annamayya District (2025)</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text, serif', fontSize: '1rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--inkbrown)' }}>
                    <th style={{ padding: '0.85rem 1.2rem', textAlign: 'left', color: 'var(--parchment)', fontWeight: 600, fontFamily: 'Crimson Text, serif' }}>Compensation Component</th>
                    <th style={{ padding: '0.85rem 1.2rem', textAlign: 'left', color: 'var(--parchment)', fontWeight: 600, fontFamily: 'Crimson Text, serif' }}>Details</th>
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
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'var(--offwhite)' : 'var(--parchment)', borderBottom: '1px solid #E8DFD0' }}>
                      <td style={{ padding: '0.8rem 1.2rem', color: 'var(--inkbrown)', fontWeight: i === 6 ? 600 : 400, verticalAlign: 'top' }}>{component}</td>
                      <td style={{ padding: '0.8rem 1.2rem', color: '#3a2a1a', fontWeight: i === 6 ? 600 : 400 }} dangerouslySetInnerHTML={{ __html: detail }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.82rem', color: 'var(--stone)', marginTop: '0.75rem', fontStyle: 'italic' }}>
              Source: <a href="https://careermeto.com/en/annamayya-asha-worker-salary-2025/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--terracotta)' }}>careermeto.com/en/annamayya-asha-worker-salary-2025/</a>
            </p>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={sectionLabel}>Methodology</span>
            <div style={divider} />
            <h2 style={sectionHeading}>Methodology</h2>
            <p style={bodyText}>This report uses a qualitative approach, which essentially means that the findings are developed from conversations and direct observation rather than from surveys or statistical data. This method was chosen because the answers sought (a day in the life of an ASHA worker, her community&#8217;s perception and treatment of her, and what it feels like to do this job in the context of the money earned) are not the sort that a questionnaire can answer well. Individuals&#8217; relationships with the healthcare system are layered and personal. Every attempt was made to get the participants to describe these views in their own words. Statistics can tell you that an ASHA worker vaccinated sixty per cent of the women in her community, but they can&#8217;t tell you why she walked two kilometres in the scorching heat to make that happen.</p>
            <p style={bodyText}>The fieldwork for this study was done in a cluster of small villages in a semi-arid rural region. Agriculture, mainly groundnut, paddy, tomatoes, and millets, is the principal economic activity in this region and it is essentially reliant on monsoon rains as only a small amount of the land is irrigated. Public health infrastructure is poor: the closest complete hospital is a long bus ride away and the roads often become unusable during the monsoon months.</p>
            <p style={bodyText}>Two villages were visited. One lay close to an all weather road and the other was at a distance away from it. This criteria was chosen because the ability to commute and the access to transport meaningfully changes a community&#8217;s experience with the healthcare system and it was therefore relevant to hear both perspectives.</p>
            <p style={bodyText}>Two groups of people were interviewed. The first was the ASHA workers for the area, Chamundeshwari, Ammajan and Hemlata. These three ladies covered the chosen area collectively so all of them were interviewed. The second group comprised fifteen members from the local community recruited from people visiting the Rural Health Centre and from an immunisation drive under way during the field visit. A conscious effort was made to assemble a diverse group rather than the most convenient group available. The final sample included Hindu and Muslim families, women and men, young mothers and older women, Telugu-only and Telugu-Urdu speakers, and residents from both the more central as well as the more outlying parts of the villages. The aim was to hear voices from as broad a range as possible.</p>
            <p style={bodyText}>Three methods were used to collect data.</p>
            <p style={bodyText}>The first was interviews. All interviews were personally conducted in Telugu, the local language. Respondents were not given time limits, they could speak for as long or as little as they liked depending on their comfort and convenience. Consequently, some conversations ended in twenty minutes while some others went on for forty five minutes. Participants were asked about their routines, income, household circumstances, experiences with the healthcare system and how things had changed over time. Conversations did not follow a set question-answer format, the flow was a bit informal, like they were talking to a family friend.</p>
            <p style={bodyText}>The second method was observation. Over the course of a field visit with the ASHA workers, homes and families on the call sheet were visited, prenatal checks and evaluations were attended and documentation completed was considered. Insights were gained from discussions that the ASHA workers engaged in with the people being met. This method added perspective to the information gained from the interviews. The patience and perseverance required to communicate effectively with patients given the modest levels of literacy and awareness; the physical resilience required for all the walking, every day, and the application of judgement and experience in situations that were not standard.</p>
            <p style={bodyText}>The third method was the study of relevant documents. Some very useful sources of information were government websites like the National Health Mission pages about the ASHA programme; various research papers and news articles about ASHA workers in different states, and brochures available at the rural sub-centre. These documents all provided context and awareness.</p>
            <p style={bodyText}>Analysis followed. Repeated scrutiny of interview notes and observations recorded in the field resulted in the discovery of insightful comments, helpful feedback and recurring patterns. These patterns were then grouped into four broad themes: what ASHA workers actually do day to day, the pay and financial conditions of the role, the community&#8217;s perceptions of them, and the structural problems built into the wider system. These themes structure the findings section that follows.</p>

            {/* TABLE 1 — SCHEDULE */}
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 500, color: 'var(--inkbrown)', marginBottom: '1.25rem', marginTop: '3rem' }}>Table 1: Weekly and Monthly Schedule of ASHA Workers (Annamayya District Cluster)</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text, serif', fontSize: '1rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--inkbrown)' }}>
                    <th style={{ padding: '0.85rem 1.2rem', textAlign: 'left', color: 'var(--parchment)', fontWeight: 600, whiteSpace: 'nowrap', fontFamily: 'Crimson Text, serif' }}>Day / Frequency</th>
                    <th style={{ padding: '0.85rem 1.2rem', textAlign: 'left', color: 'var(--parchment)', fontWeight: 600, fontFamily: 'Crimson Text, serif' }}>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Monday &#8211; Tuesday', 'Village rounds: antenatal follow-ups, household surveys, NCD screenings'],
                    ['Wednesday', 'Thettu subcentre &#8212; immunisation session + village rounds'],
                    ['Thursday', 'School and Anganwadi visits: iron tablets (6+yrs), Vitamin A, height/weight, deworming'],
                    ['Friday', 'Dry Day survey: larva/dengue checks, sanitation inspections, drain monitoring'],
                    ['Saturday', 'Anganwadi immunisation (rotating across four villages each month); iron syrup for ages 3&#8211;5'],
                    ['Sunday', 'Emergency standby; early finish if no urgent cases'],
                    ['3rd Friday', 'All pregnant women are escorted to Kurabalakota PHC'],
                    ['Twice monthly', 'All pregnant women to Madanapalle District Hospital; Village Health Nutrition Day; Village Health Sanitation Day'],
                    ['1st Tuesday', 'Compulsory ASHA meeting, Kurabalakota PHC'],
                    ['Monthly', 'Gram Sabha meeting'],
                  ].map(([day, activity], i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'var(--offwhite)' : 'var(--parchment)', borderBottom: '1px solid #E8DFD0' }}>
                      <td style={{ padding: '0.8rem 1.2rem', color: 'var(--inkbrown)', fontWeight: 600, whiteSpace: 'nowrap', verticalAlign: 'top' }} dangerouslySetInnerHTML={{ __html: day }} />
                      <td style={{ padding: '0.8rem 1.2rem', color: '#3a2a1a', lineHeight: 1.6 }}>{activity}</td>
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
            <div style={{ marginBottom: '5rem' }}>
              <h2 style={sectionHeading}>What ASHA workers really do</h2>
              <div style={{ width: '100%', margin: '2rem 0' }}>
                <Image src="/images/asha-2.jpg" alt="An ASHA worker detailing the nature of her work" width={1200} height={800} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <p style={bodyText}>A typical working day for the ladies spoken to begins around nine in the morning and does not have a clear end. Officially, ASHA workers are classified as part-time volunteers and are only required to work for a few hours, but in practice, they are on duty from 9am to 5pm and, in case of emergencies, are on call around the clock. Chamundeshwari described being reachable at any hour &#8211; when a lady in her area goes into labour at two in the morning, she is the person who gets the phone call. Hemlata reiterated this. Weekends too are rarely free, especially during immunisation drives or surveys.</p>
              <p style={bodyText}>The range of work that each of them is expected to handle is striking. Based on interview learnings and field visit observations, responsibilities include prenatal check-ups and follow-ups, escorting pregnant women to hospital when labour begins, post-delivery home visits, newborn weighing and the administration of the full schedule of childhood vaccinations, TB screening and follow-up with patients on long courses of treatment, household-level dengue and malaria surveys (that involve walking from door to door checking for stagnant water), distributing iron tablets, family planning counselling, contact tracing during outbreaks, and a substantial amount of register-keeping. Ammajan also mentioned tasks that fall outside any official remit, such as helping families apply for disability certificates and personally following up on patients who have stopped taking their TB medication.</p>
              <p style={bodyText}>Each ASHA worker is responsible for about a thousand people, and sometimes more. When asked whether this caseload was too high, all three ladies laughed. Hemlata pointed out that the official one-ASHA-per-thousand guideline does not account for the fact that the villages are physically spread out, so reaching a single household can take half an hour on foot; many times, if there is no one else in the village willing to take up the job of being an ASHA worker, they have to cover larger populations. As she put it, the number on paper does not capture what the job actually demands.</p>
            </div>

            {/* Pay */}
            <div style={{ marginBottom: '5rem' }}>
              <h2 style={sectionHeading}>Pay and money problems</h2>
              <p style={bodyText}>Pay was the single issue that came up in every interview, with all three ASHA workers and with most of the community members too. ASHA workers do not receive a fixed salary. Their income consists of a small monthly honorarium of roughly &#8377;10,000 (the exact figure varies by state) together with an incentive. The incentive structure looks reasonable on paper, but payment is often delayed by months or never given. Chamundeshwari told me she was still waiting on incentives from work she had done five months earlier and others, regardless of the effort they put in, never received incentives at all.</p>
              <p style={bodyText}>In addition to the compensation being meagre, ASHA workers absorb a significant amount of out-of-pocket expenses. They use their personal phones for work, making calls to patients, sending photos of registers, navigating government apps, and they pay for their own mobile data. During the first months of the COVID-19 pandemic, they bought their own Personal Protective Equipment (PPE). They buy their own registers, pens, and at times even bus tickets when they have to travel to the block office to submit reports.</p>
              <p style={bodyText}>Their personal financial situations makes these costs much harder to bear. Chamundeshwari&#8217;s husband has been unwell for years and cannot work consistently, which means her ASHA income is essentially what keeps the household running. Ammajan, whose husband has passed away, is the sole earner for children still in school, and she described having to choose between paying her phone bill and paying their school fees. Hemlata&#8217;s situation was a little easier because her husband works, but she was still firm that the income did not match the hours she put in. None of the three women has any form of pension, leave entitlement, or job security to fall back on.</p>
              <div style={{ width: '100%', margin: '2rem 0' }}>
                <Image src="/images/asha-1.jpg" alt="An ASHA worker describing her living conditions" width={1200} height={800} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>

            {/* Community */}
            <div style={{ marginBottom: '5rem' }}>
              <h2 style={sectionHeading}>What the community thinks</h2>
              <p style={bodyText}>The community&#8217;s views were more divided than expected. Some respondents spoke about their ASHA worker in genuinely warm terms. One young mother credited the ASHA worker with saving her baby&#8217;s life: she had had a complicated pregnancy, and the ASHA worker had visited her again and again, pushing her to attend her scans and accompanying her to hospital when labour began. An older woman said the ASHA worker was the only person in any official capacity who had ever come to her door simply to ask whether she was alright.</p>
              <p style={bodyText}>Other respondents had little or no contact with their ASHA worker at all, and a few did not know who their ASHA was. When probed further, the explanation usually came down to one of two things. Either the household lived in one of the more outlying hamlets that were difficult to reach regularly, or there was a quiet social distance, usually along religious or caste lines, that no one quite stated openly, but was clearly present.</p>
              <p style={bodyText}>A subset of respondents preferred to go to private hospitals or clinics, despite the cost. Their reasoning was partly about trust &#8211; they felt the government sub-centre was understaffed and rushed &#8211; and partly about status. One man indicated that government services were &#8220;for the poor&#8221; and that he did not want to be perceived in that way.</p>
              <p style={bodyText}>COVID-19 came up in nearly every community interview. Several respondents felt that ASHA workers deserved greater recognition and compensation for their work during that period, and expressed frustration that their conditions had not improved since. Respondents reported dissatisfaction with compensation relative to workload.</p>
            </div>

            {/* System */}
            <div>
              <h2 style={sectionHeading}>Problems in the system</h2>
              <p style={bodyText}>There is more to the story than what we see every day. The principal issue with ASHA workers is that they are not permanent employees. The government states their employment status as &#8220;voluntary&#8221;. This means ASHA workers do not get a salary that they can count on. They do not get time off when they need it or a pension when they are old. ASHA workers don&#8217;t have any of the things that come with a real government job. Many ASHA workers have been in the role for two decades and still not classified as permanent. A few of the women spoken to had been doing this work for over twelve years and still had no job security, no pension, and no real path forward. They are still waiting for something that will give them security. Given the critical role they play, the issue of ASHA workers is a problem that needs to be solved.</p>
              <p style={bodyText}>This becomes especially visible when ASHA workers are compared with Auxiliary Nurse Midwives (ANMs), who do overlapping work in the same villages. ANMs are formally employed by the government, with a fixed monthly salary, leave entitlements, and a pension. In practice, the ASHA worker often does the legwork (visiting houses, identifying patients, bringing them in) while the ANM handles the clinical portion. The ASHA worker is then paid a fraction of what the ANM earns. All three ASHA workers raised this comparison without prompting, and it was clear that the disparity stung.</p>
              <div style={{ width: '100%', margin: '2rem 0' }}>
                <Image src="/images/asha-5.jpg" alt="An ANM comparing her job details and compensation with that of ASHAs" width={1200} height={800} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <p style={bodyText}>A specific case made the unfairness particularly clear. A woman in one of the villages had undergone a tubectomy and developed complications afterwards. The ASHA worker had been the one to counsel her, bring her in for the procedure, and follow up at home for weeks. The incentive for the whole episode was small. When complications arose however, it was the ASHA worker the family blamed, not the doctor and not the ANM. She absorbed the social cost without receiving either the professional standing or the pay that would have come with it.</p>
              <p style={bodyText}>The final structural issue is the move to digital reporting. The government has been steadily shifting registers, reports, and surveys onto smartphone applications. None of the three ASHA workers I spoke to had been given a phone by the government, and none had received meaningful training on the apps. They were navigating the software on their personal handsets, often with help from their children, while still being held to the same deadlines as before. Chamundeshwari said she had been pulled up for late submissions even though her phone was old and the application kept crashing. The system, in short, is asking these women to function as digital workers without giving them the tools or the instructions to do so.</p>
            </div>
          </div>
        </section>

        {/* DISCUSSION */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={sectionLabel}>Discussion</span>
            <div style={divider} />
            <h2 style={sectionHeading}>Discussion</h2>
            <p style={bodyText}>The three themes that came up across the interviews &#8211; workload, pay, and community perception &#8211; don&#8217;t really stand on their own. They are interrelated and point to deeper issues in the system. The ASHAs spoken to were doing substantially more than what their original job description covered: maternal health visits, COVID follow-ups, NCD screening, TB tracking, election duty, distributing iron tablets to young girls, and even helping fill out Ayushman Bharat and Aadhaar-linked beneficiary lists. But the incentive structure hasn&#8217;t expanded with the workload. So they end up doing more work for the same unpredictable pay, which then affects how their families and neighbours view the job. A few women mentioned that their husbands or in-laws kept asking why they were &#8220;running around&#8221; so much for so little money, and this constant questioning seemed to tire them more than the physical work itself. The community perception piece isn&#8217;t separate from the pay piece either. When people in the village see that the government doesn&#8217;t pay you a proper salary, they don&#8217;t take the role as seriously, and that makes it harder to do the actual work of convincing women to get safe deliveries in the hospital or vaccinate their children. So pay shapes perception, perception shapes how much cooperation an ASHA gets, and that in turn shapes how heavy her workload feels. It&#8217;s a loop, not three separate problems.</p>
            <div style={{ width: '100%', margin: '2rem 0' }}>
              <Image src="/images/asha-3.jpg" alt="Community meeting at Zila Parishad High School" width={1200} height={900} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <p style={bodyText}>The issue with the system is underlying to all of this. The ASHA programme was designed in 2005 as a &#8220;voluntary&#8221; scheme to bridge the gap between communities and the public health system, but two decades later the same framing is being used to justify keeping wages low even though the role has completely transformed. The experiences documented in this field site raise concerns that these ASHA workers are doing what would, in any other country, be considered the work of a community health nurse, but they&#8217;re being paid like part-time volunteers and managed like government employees, expected to attend meetings, fill forms, meet targets, and answer to multiple supervisors (ANM, PHC medical officer, block coordinator). This in-between status is what creates most of the day-to-day friction.</p>
            <p style={bodyText}>These findings mostly line up with what researchers have documented in other states. Ved et al (2019) and Saprii et al (2015) both pointed out the mismatch between the scope of ASHA work and the volunteer framing, and that came through clearly in interviews conducted for this research. The delays in compensation mentioned (some women said they hadn&#8217;t received incentives for almost five months) match the patterns Bajpai and Dholakia (2011) have written about, and also what came up during the ASHA strikes in Maharashtra, Karnataka, and Haryana between 2020 and 2023. Scott&#8217;s (2018) global review of community health workers brought up similar issues: unclear job descriptions, weak supervisory support, and the gendered devaluation of &#8220;care work&#8221;. This suggests this isn&#8217;t just an Indian problem.</p>
            <p style={bodyText}>However, the findings of this research differ a little in the sphere of community perception. A lot of the literature, especially from Kerala and Tamil Nadu, talks about ASHAs being respected in their community, but in the villages visited for this research, the impression was a lot less consistent. Some women were admired, but others described feeling judged or looked down upon within their communities. This tracks more with studies from Bihar and UP and therefore suggests that the &#8220;ASHA experience&#8221; is really shaped by state-level investment, training quality, and local caste/gender dynamics. The Kerala model works in Kerala partly because the basic public health system is stronger due to their education system, higher gender equity, and less rigid social structures.</p>
            <p style={bodyText}>It is readily acknowledged that the sample for this research was small and so the findings cannot be substantially generalized. The dynamics could be really different in another district and there would definitely be differences in another state. The ladies interviewed were also the ones willing to talk. For example, it was not possible to talk to ASHAs who had quit so their perspectives are missing from this data, and their reasons might also be the most important ones to state. Lastly, as a school-student researcher, an &#8216;outsider&#8217; not fluent in the local language, and someone from a different class background than most of the ladies interviewed, the responses received could possibly have been impacted for their depth and candour. A longer fieldwork period would likely have provided a better picture. Thus, what is put together here is really a starting point rather than a final piece.</p>
          </div>
        </section>

        {/* POLICY RECOMMENDATIONS */}
        <section id="recommendations" style={{ backgroundColor: 'var(--parchment)', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span style={sectionLabel}>Policy Recommendations</span>
            <div style={divider} />
            <h2 style={{ ...sectionHeading, marginBottom: '3rem' }}>Policy Recommendations</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'Permanent employment',
                  body: 'The most fundamental shift the government could make is to stop calling ASHAs "volunteers" and recognize them as permanent health workers with a fixed monthly salary. Right now, their pay is split between the centre and state and is unpredictable, which means in some months, an ASHA might earn ₹5,000 while doing the same amount of effort as someone earning ₹10,000 in a different state. Several state-level commissions and the 45th and 46th Indian Labour Conferences have already recommended that ASHAs be classified as regular workers, but nothing has actually moved at the central level. A guaranteed minimum monthly salary, even ₹15,000, with incentives layered on top, would give these ladies some financial stability and also signal that their work is taken seriously by the state.',
                },
                {
                  num: '02',
                  title: 'Incentives',
                  body: 'Even if permanent employment takes time, the incentive structure itself needs fixing. Currently there are over 60 different incentive heads, each with its own paperwork and verification process, which is part of why payments get delayed for months. Consolidating these into approximately 8–10 broader categories tied to outcomes (maternal health, child health, NCDs, etc.) would reduce the administrative work for both ASHAs and the PHC staff who process payments. Linking payments to a direct digital transfer system with a public dashboard where ASHAs can see what they\'re owed would also reduce dependence on supervisors who sometimes hold up payments.',
                },
                {
                  num: '03',
                  title: 'Social security',
                  body: 'ASHAs currently fall through almost every social security net in the country. They don\'t get EPF, ESIC, gratuity, or a pension, even though many of them have been doing this work for over a decade and treat it as their primary occupation. Extending these benefits would acknowledge the long-term nature of the role. At the very least, health insurance for the ASHA and her immediate family can be provided along with maternity benefits (which is almost ironic given that they are the ones promoting institutional deliveries), and a retirement amount that pays out after 10+ years of service.',
                },
                {
                  num: '04',
                  title: 'Workplace safety',
                  body: 'Safety came up again and again in the interviews and is almost completely missing from current policy. The ASHAs spoken to described doing night visits during deliveries, walking alone through fields and unlit roads, dealing with aggressive male relatives during household surveys, and, during COVID, being sent into infected homes without proper PPE. A basic safety protocol needs to be put in place: a transport allowance or arrangement, especially in rural and tribal areas, and PPE supply during emergencies.',
                },
                {
                  num: '05',
                  title: 'Representation in decision-making',
                  body: 'The last thing to push for is giving ASHAs an actual seat at the table when health policy gets made. Right now, they\'re treated as the people who implement decisions made by people who have never done a household visit. Mandating ASHA representation (with voting rights, not just attendance) would change this. They have ground-level knowledge that no bureaucrat or consultant has, and using that knowledge would probably make health programmes work better, not just be fairer to the ladies doing the work.',
                },
              ].map((p, i) => {
                const c = policyCardColors[i]
                return (
                  <div key={p.num} style={{ backgroundColor: c.bg, padding: '2.5rem 2rem', borderRadius: '2px' }}>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: c.accent, lineHeight: 1, marginBottom: '1rem', opacity: 0.6 }}>{p.num}</p>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 500, color: c.text, marginBottom: '1rem', lineHeight: 1.2, fontStyle: 'italic' }}>{p.title}</h3>
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
            <h2 style={sectionHeading}>Conclusion</h2>
            <p style={bodyText}>This study found that ASHAs in the villages visited are carrying a workload that has expanded far beyond their original role, while their pay remains unpredictable and their position in the community is more uncertain than the official narrative suggests. The three themes of workload, pay, and community perception are deeply tied together, and they all point to a system that depends on ladies&#8217; labour without giving them the recognition, security, or voice that the work deserves.</p>
            <p style={bodyText}>What this implies is that surface-level fixes like a small incentive raise here, a one-time bonus there, are not going to solve anything. Findings from this case study suggest: permanent employment, a fixed incentive structure, real social security and safety provisions, and actual decision-making power for ASHAs themselves. Future research could push this much further. A larger, multi-state sample would help show how much of what is found in this work is specific to this region versus a national pattern. A longitudinal study following the same ASHAs over a few years would capture how burnout and changing policy actually play out in their lives. And a comparative study across states with very different ASHA outcomes (say Kerala vs. Bihar) could help figure out which policy choices actually make a difference.</p>
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
                  <li key={i} style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.98rem', lineHeight: 1.7, color: '#4a3520', marginBottom: '0.85rem' }}>
                    {ref.text}{' '}
                    {ref.url && <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--terracotta)', wordBreak: 'break-all' }}>{ref.url}</a>}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .asha-two-col,
          .asha-two-col-img-right,
          .asha-two-col-img-left {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </>
  )
}