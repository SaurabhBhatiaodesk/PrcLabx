import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainButton from "@/components/MainButton/MainButton";
import Link from "next/link";
import Image from "next/image";
import course2 from "../../../public/Images/aboutadmin.png";
import aboutbg from "../../../public/Images/aboutbg.svg";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import OurVision from "../../../public/Images/OurVision.png"
import Adminimage from "../../../public/Images/adminimage.png"
import Banner from "../../../public/Images/BannerImages/about.png"
import checkmark from "../../../public/Images/icons/checkmark.svg"
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import UnderLine from "../../../public/Images/about/about-line.svg"
import Line from "../../../public/Images/about/line.svg"
import Leap from "../../../public/Images/about/leap.svg"
import NeedLine from "../../../public/Images/about/need-line.svg"
import Hand from "../../../public/Images/about/hand.svg"
import Break from "../../../public/Images/about/break.svg"
import User from "../../../public/Images/about/user.png"
import Hill from "../../../public/Images/about/hill.png"
import Express from "../../../public/Images/about/express.png"
import Entry from "../../../public/Images/about/entry.png"
import Helping from "../../../public/Images/about/halping.png"
import Dream from "../../../public/Images/about/dream.png"
import Need from "../../../public/Images/about/need.png"
import Chapter from "../../../public/Images/about/chapter.png"
import Team from "../../../public/Images/about/team.png"
import New from "../../../public/Images/about/new.svg"
import Service from "../../../public/Images/about/service.svg"
import Labx from "../../../public/Images/about/labx.svg"
import Techcity from "../../../public/Images/about/techcity.png"
import Traning from "../../../public/Images/about/traning.png"
import './about.css'

const AboutUs = () => {
  return (
    <div>
      <section
        className="bg-no-repeat bg-cover p-0"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="max-container">
          <div className="grid lg:grid-cols-[5fr_3fr] items-center pt-3">
            <div className="w-full px-4">
              <div className="text-center lg:text-left">
                <ul className="flex items-center lg:justify-start justify-center gap-[10px]">
                  <li>
                    <Link
                      href="/"
                      className="text-dark flex items-center gap-[10px] text-base font-medium dark:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <p className="text-body-color flex items-center gap-[10px] text-base font-medium mb-0">
                      <span className="text-body-color dark:text-dark-6">/</span>
                      About Us
                    </p>
                  </li>
                </ul>
                <h1 className="text-dark mb-0 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Meet Bharat Dhingra  (Founder)
                </h1>
                <Image  height="80" width="600"src={UnderLine.src} alt=" labx repair " className="mb-3 about_line" />
                <p className="text-body-color dark:text-dark-6 mb-5 text-base">
                  Born in 1986 in Punjab, India, my journey has been one of passion, perseverance, and purpose.
                </p>
              </div>

            </div>
            <div className="admin-image relative 2xl:h-[500px] lg:h-[350px] h-[350px]">
              <Image
                src={Adminimage}
                alt="Admin Visual"
                className="object-contain pt-3"
                fill // Makes the image fill the parent max-container
              />
            </div>
          </div>
        </div>
      </section>
      <div className="about__bg__gradiant">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:py-6 py-3 items-center ">
          <div className="max-container text-white text-center rounded-md">
            <p className="">
              From a young age, I was fascinated with technology, particularly mobile phones.  After completing my higher secondary education, in 2005, I enrolled in a six-month course at one of the big city &apos;s institutes to learn mobile phone repair. My passion and dedication quickly set me apart— I was not only excelling in my assignments but also helping my classmates with theirs. Recognizing my potential, the institute&apos;s owner, who ran a well-known repair shop, offered me an unpaid apprenticeship at his store—a rare opportunity, as most paid for the chance to work there. I gladly worked for two years without pay, absorbing everything I could about the trade.
            </p>
            <p className=" ">
              After gaining hands-on experience, I opened my first small repair business in my village. Within six months, it was thriving. However, my ambitions took me beyond my hometown—I migrated to Australia in 2008 in search of greater opportunities.
            </p>
          </div>
        </div>
      </div>

      <section data-aos="fade-up" className="aos-init aos-animate">
        <div className="max-container">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div className="User_Image">
              <Image  height="1000" width="1000" src={User} alt=" labx repair " className="" />
            </div>
            <div className="">
              <h2>Starting From Scratch in Australia</h2>
              <Image  height="1000" width="1000"src={Line.src} alt=" labx repair " className="pb-3 m-auto" />
              <p>When I arrived in Australia, I quickly realized the road ahead would be anything but easy. People often told me that my skills were useless here because mobile phones were mostly on contracts, and broken ones were typically replaced rather than repaired. My poor English made things even harder, but I refused to give up on my passion. </p>
              <p>Desperate to stay in the industry, I took a job at a phone repair shop. The working conditions were tough— two weeks of unpaid training, followed by a very low hourly wage, with no guarantee of regular payment. Many days, I couldn&apos;t even afford train fare to attend my classes. I vividly remember standing at the shop, asking the staff for $10 to buy a train ticket. Often, I had to wait for the shop &apos;s first sale of the day to get the money I needed.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-container "   >
        <section>
          <div className="bg-black text-white flex flex-col items-center py-2 lg:py-4">

            <div className="w-full p-6">
              <h2 className="font-bold text-center mb-2 text-white">A Breakthrough </h2>
              <Image  height="100" width="400"src={Break.src} alt=" labx repair " className="pb-3 m-auto" />
              <p className="  text-center  text-white">
                Despite these hardships, I stayed there for six months, determined to learn and grow. Eventually, I found another opportunity at a repair shop in Blacktown. When I approached the owner, I struggled to communicate in English and asked if he spoke Hindi. He didn &apos;t, but he gave me a chance, recognizing my skills instead of focusing on my language barrier.
              </p>
              <p className="  text-center  text-white">
                I still remember the day I worked my first shift at that shop—<span className="text-sm">it was a Thursday night. After three hours of work, I was handed $50. It felt like a fortune compared to what I had been earning</span> </p>
              <p className="text-center">Over the next two years, I invested countless hours into my work. The shop closed at 5 PM, but I often stayed late, honing my craft and preparing myself for the future.  </p>
            </div>
          </div>
        </section>
      </div>

      <section className=""  >
        <div className="max-container">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div className="">
              <h2 className="mb-2 w-auto">Taking a Leap of Faith</h2>
              <Image  height="100" width="400"src={Leap.src} alt=" labx repair " className="pb-3  about_line" />
              <p>After working for three years at the shop in Blacktown, I began to feel a strong urge to start something of my own. While the job provided stability, I wanted to pursue my dream of independence and building something for myself. Eventually, I made the tough decision to leave the job and began working from home.   </p>
              <p>During this time, I relied on small repair jobs from other shops, using the relationships I had built in the industry. I would visit local shops and offer my services for motherboard repairs and phone unlocks, collecting phones during the week and returning them repaired. However, this was not sustainable in the long term, and I knew I needed a more permanent solution.</p>
              <p>One weekend in early 2012, while delivering repaired phones to a market, I noticed the bustling activity and thought to myself, Why not start here? I approached the information desk at Parklea Markets to inquire about setting up a stall. The staff explained that I could rent a stall for $282 for two days (Saturday and Sunday only). At that moment, I had just enough money to pay for one week, and despite having no plan or resources, I decided to take the leap.</p>
            </div>
            <div className="User_Image">
              <Image  height="1000" width="1000"src={Hill} alt=" labx repair " className="" />
            </div>
          </div>
        </div>
      </section>


      <div className="about__bg__gradiant "  >
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:py-6 py-3 items-center ">
          <div className="max-container text-white text-center rounded-md">
            <h2 className="mb-2">A Helping Hand</h2>
            <Image  height="100" width="300"src={Hand.src} alt=" labx repair " className="pb-3 m-auto" />
            <p className=""> Back at home, I shared my plans with my uncle, Paramjit Thiara (I was a paying guest at his place), who had always been a pillar of support. Recognizing my determination, he gave me an old, broken cupboard, which we creatively transformed into a makeshift workbench. This simple gesture played a crucial role in getting me started.
            </p>

            <p className=" ">
              Around the same time, my close friend, Gagan Jhutty, stepped in with both financial and moral support. Together, we initially started the venture as partners. Gagan believed in my vision and contributed funds to help with essential supplies and setup. His unwavering trust and encouragement allowed me to focus on building the business without the stress of financial burdens.
            </p>
            <p>As the business began to take shape, Gagan made an extraordinary decision that demonstrated his selflessness and generosity. He saw my relentless dedication and hard work and decided to step away from the partnership, offering me full ownership of the business. He insisted that my efforts deserved to be rewarded fully and selflessly left the venture in my hands, asking for nothing in return.
            </p>
            <p>Gagan &apos;s act of kindness was a defining moment in my journey. It gave me the freedom to grow the business and the confidence to pursue my dream independently. To this day, I am deeply grateful for his role in helping me build the foundation of my career.
            </p>

            <div className="overlap__section_labX relative">
              <Image  height="1000" width="1000"src={Helping.src} alt=" labx repair " />
              <div className="overlap__description ">
                <h3 >Building My Dream</h3>
                <p>After one week of preparation, I transformed a simple cupboard into a makeshift workbench. My setup at Parklea Markets was modest—a plastic chair, a laptop, a few spare parts, and a black-and-white paper sign that read, “Yes, we do repairs.”</p>
                <p>With my wife &apos;s help in packing and organizing, I arrived at the market ready to begin. As I sat there that morning, I felt a surge of pride. This was the realization of my dream to start my own business in Australia.
                </p>
                <p>To my delight, the day exceeded all expectations. I sold accessories, completed repairs, and even handled advanced soldering work, building trust with customers who brought me their devices. By the end of the day, I had earned enough to cover the rent for the following week.
                </p>
                <p>That Sunday marked the beginning of an incredible journey. Sitting at my stall, I didn &apos;t just feel accomplished—I felt like a king.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our value */}


      <section className="py-4 lg-py-[20px] pt-8 mt-5" >
        <div className="max-container text-center">
          <h2 className="mt-5"> From Market Stall to a Full-Fledged Shop </h2>
          <Image  height="100" width="700"src={Leap.src} alt=" labx repair " className="pb-3 pl-3 m-auto about_line" />
          <p>By 2013, as my business at Parklea Markets thrived, I realized it was time to upgrade. I replaced my modest table and chair setup with a proper counter, creating a more professional and welcoming space. Over time, I expanded from a single stall to a double stall, complete with a roof, fans, seating, and improved displays. Eventually, I moved to a better location within the market, equipping the shop with a full fit-out, LED lighting, and a polished appearance. My shop became one of the standout businesses in the market, known for its professional look and high-quality service. </p>
          <div >
            <p>Despite this progress, I felt the need to expand further. While I was busy on weekends at the market, my weekdays were relatively free. I decided it was time to open a dedicated shop outside the market. One of my suppliers, who had helped me early on by providing accessories on credit, suggested I look for an affordable location. When I asked about areas with low rent, he smiled and said, Try St Marys. </p>
          </div>
          <div >
            <p>At the time, St Marys was not considered a prime area. The streets were plagued by issues, and many businesses failed shortly after opening. However, the low rents made it a viable option for me to take the risk. After some exploration, I found an empty shop that used to be a Kodak store. </p>
          </div>

          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">

            <div className="about__Image">
              <Image  height="1000" width="1000"src={Express} alt=" labx repair " className="" />
            </div>
            <div className="about__Image">
              <Image  height="1000" width="1000"src={Entry} alt=" labx repair " className="" />
            </div>
          </div>

          <div >
            <p>I had saved about $10,000, which I thought would be enough to cover the setup and initial stock. But I underestimated the costs—security deposits, advance rent, and other expenses quickly drained my funds. By the time I got the keys to the shop, I had no money left to stock it or set it up. </p>
          </div>
          <div >
            <p>I reached out to my friends, Gagan Jhutty and Robin, who both came to my rescue. They lent me additional funds and helped me search Gumtree for free items—counters, displays, and anything that could be repurposed. The shop was a massive 150-square-meter space, but I could only afford to fill half of it initially. </p>
          </div>
          <div >
            <p>With no money to hire professional shopfitters or tradespeople, we rolled up our sleeves and did everything ourselves. We bought inexpensive materials, screws, and tools to build wall panels, counters, and fittings. Those same fittings, built with our hands, remain in use today, even as of late 2024. Over time, we upgraded the shop with better counters and showcases, but the foundation of our work remained a testament to resourcefulness and determination. </p>
          </div>
          <div >
            <p>When we first opened, we had no budget for proper signage. However, my confidence in our services and the shop &apos;s potential kept me motivated. Despite the challenges, I was steadfast and determined to succeed, knowing this shop would become the cornerstone of my growing business. </p>
          </div>
        </div>
      </section>


      <section  className="">
        <div className="max-container">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div className="User_Image">
              <Image  height="1000" width="1000"src={Dream} alt=" labx repair " className="" />
            </div>
            <div className="">
              <h2 className="mb-0 w-auto">Balancing Dreams with Determination </h2>
              <Image  height="1000" width="600"src={Leap.src} alt=" labx repair " className="pb-3  about_line" />
              <p>As my shop grew and I worked tirelessly day and night to build it, a new challenge emerged—my application for permanent residency in Australia. To qualify, I was required to pass an English proficiency test (IELTS) with a score of 7 in each module: reading, writing, speaking, and listening. </p>
              <p>At the time, my English proficiency level was only 5.5, and the gap seemed daunting. Adding to the challenge, I was still a student, juggling my studies, running my business, and preparing for the exam. Despite these pressures, I began rigorous training to improve my English skills, dedicating significant time to studying. This shift in focus meant I had to divide my attention between my shop and my studies, which impacted my business operations.              </p>
            </div>

          </div>
          <p>The journey was far from easy. I sat for the test 43 times before finally achieving the required score. It took nearly 18 months of relentless effort and perseverance, but on the 43rd attempt, I succeeded and secured my permanent residency—a moment of triumph that made all the struggles worthwhile.
          </p>
          <p>During this challenging time, my friend Robin became an invaluable part of my journey. He stepped in to manage the shop while I concentrated on my studies. I trained him extensively in phone repairs and the day-to-day operations of the business, and he took on the responsibility with dedication and care.
          </p>
          <p>Achieving all this while still an international student made the accomplishment even more rewarding. When I finally returned to focusing fully on the shop after obtaining my residency, I was filled with gratitude for Robin &apos;s support and proud of the resilience that carried me through one of the most demanding phases of my life. This chapter reminded me that with determination, persistence, and the right support, even the most difficult goals are achievable.
          </p>
        </div>
      </section>


      <div className="about__bg__gradiant pt-8 " >
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:py-6 py-3 items-center ">
          <div className="max-container text-white text-center rounded-md">
            <h2 className="mb-2">Scaling Up: Building a Team and Expanding Services</h2>
            <Image  height="1000" width="900"src={Service.src} className="pb-3 m-auto" alt=" labx repair " />
            <p className="">
              After securing my residency, I shifted my full focus back to growing the business. The shop at St Marys flourished alongside the stall at Parklea Markets, and both locations gained momentum. I worked tirelessly to maximize their potential, experimenting with different strategies and services to meet the growing demand.
            </p>
            <p className=" ">
              As the business expanded, it became clear that I couldn &apos;t handle everything on my own. We needed additional hands to keep up with the increasing workload. That &apos;s when we found Rakesh Vaghela in 2015. Rakesh joined our team and quickly became an integral part of the business. To this day, Rakesh, Robin, and I continue to work as a cohesive team, driving the business forward together.
            </p>
            <p>With a strong team in place, I was able to take the business to the next level. I began offering professional motherboard repairs and launched a YouTube channel to showcase my expertise and reach a wider audience. This increased our visibility and helped us secure partnerships with local repair shops.
            </p>
            <Image  height="1000" width="1000" style={{ width: '100%' }} src={Team.src} alt=" labx repair " />
            <p>Our B2B services became a significant part of the business, with local shops sending us devices for advanced repairs they couldn &apos;t handle. Many were curious about the techniques and expertise that allowed us to fix complex issues. This recognition and trust from others in the industry further solidified our reputation as specialists in mobile phone repairs.
            </p>
            <p>This phase marked a turning point for the business as we transitioned from a local repair shop to a hub for specialized services and industry collaborations.</p>
          </div>
        </div>
      </div>

      <section  className="">
        <div className="max-container">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">

            <div className="">
              <h2 className="mb-2 w-auto">Recognizing a Need for Training
              </h2>
              <Image  height="1000" width="600"src={NeedLine.src} alt=" labx repair " className="pb-3 about_line" />
              <p>As my business grew, I began noticing a troubling trend in the industry: many technicians were inadvertently damaging customers devices due to a lack of proper skills and knowledge. It became clear to me that there was a need for structured training to elevate the standard of repairs in the industry.</p>
              <p>Rather than accepting poorly executed repairs from other technicians, I decided to shift my focus toward education. My idea was simple yet impactful: instead of taking repair jobs from technicians, I would teach them the right way to perform these repairs and charge for my coaching.</p>
              <p>Around 2018 or 2019, I began investing in the necessary equipment and laying the groundwork for training programs. I was preparing to launch my first batch of students, and there was significant interest from individuals eager to learn the skills I had mastered over the years.</p>
              <p>Unfortunately, the outbreak of COVID-19 put everything on hold. Lockdowns and restrictions delayed my plans, but the experience reinforced the importance of creating a platform to upskill technicians and improve the industry overall.</p>
            </div>
            <div className="User_Image">
              <Image  height="1000" width="1000"src={Need} alt=" labx repair " className="" />
            </div>
          </div>
          {/* <p> During this challenging time, my friend Robin became an invaluable part of my journey. He stepped in to manage the shop while I concentrated on my studies. I trained him extensively in phone repairs and the day-to-day operations of the business, and he took on the responsibility with dedication and care.
          </p>
          <p> Achieving all this while still an international student made the accomplishment even more rewarding. When I finally returned to focusing fully on the shop after obtaining my residency, I was filled with gratitude for Robin &apos;s support and proud of the resilience that carried me through one of the most demanding phases of my life. This chapter reminded me that with determination, persistence, and the right support, even the most difficult goals are achievable.
          </p> */}
        </div>
      </section>

      <section className="mt-5 pt-8 bg_light_black " >
        <div className="max-container">
          <div className="text-center mt-5">
            <h2 className="mb-2 w-auto">A New Chapter: Focus and Growth
            </h2>
            <Image  height="1000" width="600" src={New.src} alt=" labx repair " className="pb-3 m-auto" />
          </div>
          <p className="text-center">During the COVID-19 pandemic, something remarkable happened—my business thrived despite the challenges. While I had initially planned to focus on launching training programs, the surge in demand for repairs and services led me to postpone those plans. Whether it was due to luck, goodwill, or sheer hard work, I found myself busier than ever.</p>
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div className="chap_Image">
              <Image  height="1000" width="1000"src={Chapter} alt=" labx repair " className="" />
            </div>
            <div className="">
              <p>One significant milestone during this period was securing authorization to become a Samsung Service Centre. This partnership brought a tremendous influx of work and solidified our reputation as a trusted repair provider.
              </p>
              <p>Around the same time, I decided to let go of my stall at Parklea Markets. It was a tough decision, as it was my first shop and the foundation of my journey in Australia. However, managing both the market stall and the Samsung Service Centre became overwhelming, and it was time to move on. In 2020 (or perhaps 2021), I sold the market stall and shifted my complete focus to our main shop, Phone Repair Centre, at St Marys.
              </p>
              <p>This transition allowed us to improve operations further. We renovated the back end of the St Marys store to optimize our workflow and storage, ensuring we could keep up with the increasing demand. The decision to focus entirely on the Phone Repair Centre proved to be a turning point, enabling us to provide exceptional service and continue growing the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 pt-8 bg_light_yellow " >
        <div className="max-container ">
          <div className="text-center mt-5">
            <h2 className="mb-0 w-auto text-black">Expanding Horizons: The Birth of TechCity
            </h2>
          </div>
          <p className="text-black text-center">With a strong and cohesive team in place, built on mutual understanding and cooperation, we reached a point where expansion felt like the natural next step. Confident in our ability to manage growth, we began exploring opportunities for new locations.
          </p>
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div >
              <p className="text-black">Our first expansion materialized in a small village shopping center at Schofields. The shopping center management requested a more modern and appealing brand name, so we created TechCity to meet their expectations. This marked the beginning of our journey under the TechCity banner.
              </p>
              <p className="text-black">In 2023, we continued to grow, opening a second TechCity branch in Box Hill, followed shortly by a third location in Kellyville. These stores were strategically designed to offer a welcoming environment and high-quality service, ensuring consistency across all locations.
              </p>
              <p className="text-black">With these new branches, we expanded to four thriving locations, successfully managing operations while maintaining the same level of professionalism and service that defined our original business. This phase of growth represents a milestone in our journey, driven by teamwork, innovation, and a commitment to excellence.
              </p>
            </div>
            <div className="tech_Image">
              <Image  height="1000" width="1000"src={Techcity} alt=" labx repair " className="" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-8 bg_light_black " >
        <div className="max-container text-white pt-8 mt-5">
          <div className="text-center">
            <h2 className="mb-0"> Introducing Screen Refurbishing with a Transparent Approach</h2>
            <Image  height="1000" width="1000"src={Service.src} className="pb-3 m-auto" alt=" labx repair " />
            <p>As my business continued to grow and operations became more streamlined—with excellent staff, management, repairs, and customer service—I knew it was time to take another bold step forward. Around this time, I welcomed Imran to the team, a talented and creative addition who brought innovative ideas and energy. Together, we formed a dedicated team committed to elevating the business to new heights.</p>
            <p>One of the biggest frustrations in the industry was the lack of transparency in screen buyback programs. Suppliers would grade screens as A, B, or C, or reject them outright, often without any explanation. This lack of clarity felt like a monopoly, and I knew there was a better way</p>
            <p>Driven by the desire to offer transparency and fairness, we decided to bring screen refurbishing in-house. We invested in the latest machines, crafted a fair pricing model, and set out to do things differently. The results were transformative. For every screen we handled, we provided clear grading criteria and photos, ensuring complete honesty and trust.</p>
            <p>When we launched this service for other businesses, the response was overwhelming. Customers were thrilled with our fast turnaround, competitive pricing, and above all, our commitment to transparency. The demand grew beyond anything we had anticipated, and our screen refurbishing quickly became one of the most sought-after services in the industry.</p>
            <p>This venture not only strengthened our reputation but also solidified our belief in doing business the right way. By setting new standards of honesty and quality, we redefined screen refurbishment as a service customers could trust, laying the foundation for even greater success.</p>
          </div>
        </div>
      </section>

      <div className="max-container text-white pt-8 mt-5 " >
        <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
          <div className="tech_Image">
            <Image  height="1000" width="1000"src={Techcity} alt=" labx repair " className="" />
          </div>
          <div>
            <h2 className="mb-2">The Vision Behind LabX</h2>
            <Image  height="1000" width="1000"src={Service.src} className="pb-3 m-auto" alt=" labx repair " />
            <p>My focus has always been on providing top-notch services at truly affordable prices. I believe that good repairs shouldn &apos;t come at an unreasonable cost. Unfortunately, many technicians charge excessively for basic services, like replacing an iPhone battery for $100 to $200. This often stems from a lack of skill—technicians add hidden costs to cover potential mistakes, such as cracking the screen during disassembly, instead of mastering their craft.
            </p>
            <p>As a technician, you are entrusted with customers devices and data. It is your responsibility to handle their property with care and professionalism. You should know how to perform repairs without damaging the device, respect their privacy, and honor the trust they place in you.
            </p>
            <p>This belief inspired me to create LabX—a one-stop solution for consumers, businesses, wholesalers, and retailers. At LabX, we focus on delivering transparent, professional services at affordable prices. Whether it &apos;s data recovery, screen refurbishing, or advanced repairs, our mission is to provide exceptional value while setting new standards in the industry.
            </p>
          </div>

        </div>

      </div>

      <div className="max-container pt-8 mt-5 mb-5 " >
        <div className="overlap__section_labX relative">
          <Image  height="1000" width="1000"src={Traning.src} alt=" labx repair " />
          <div className="overlap__description ">
            <h3 className="pt-6">The Decision to Provide Training
            </h3>
            <p>I noticed a troubling trend in the repair industry—technicians lacking the necessary skills, leading to damaged devices and lost customer trust. Many focused solely on profits, creating a significant gap in expertise and ethics.
            </p>
            <p>I also saw a need for accessible skill development among various groups. Many international students struggle to find stable jobs and are eager to learn practical skills that can help them build a career. Additionally, DIY enthusiasts and individuals passionate about the repair industry want to upgrade their abilities to pursue opportunities in this field.
            </p>
            <p>Instead of simply fixing the mistakes of others, I decided to address the root cause by providing structured training. My goal is to empower aspiring technicians and enthusiasts with the right skills, professionalism, and a customer-focused mindset, allowing them to grow, find opportunities, and contribute to raising the standards of the industry.
            </p>
          </div>
        </div>
      </div>


      <div className="about__bg__gradiant pt-8 mt-5 " >
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:py-6 py-3 items-center ">
          <div className="max-container text-white text-center rounded-md">
            <h2 className="mb-2">LabX: A Passion Project Born from Purpose </h2>
            <Image  height="1000" width="800"src={Service.src} className="pb-3 m-auto" alt=" labx repair " />
            <p className=""> 
            The concept of LabX emerged from a vision to bring together every aspect of the repair industry under one roof. I wanted to go beyond just running a repair shop—to create a space that offers solutions for everyone. From wholesale services and data recovery to screen refurbishing, business-to-business repairs, selling spare parts, and accessories online, LabX was designed to be a comprehensive hub for all things repair-related.
            </p>
            <p className=" ">
            But LabX is not just about providing services; it &apos;s about sharing knowledge. I&apos;ve always believed in empowering others by teaching them how to fix phones and build their own expertise. This lab isn &apos;t just for consumers or businesses; it &apos;s a place where skills are nurtured, trust is built, and industry standards are elevated.
            </p>
            <p>With a strong team in place, I was able to take the business to the next level. I began offering professional motherboard repairs and launched a YouTube channel to showcase my expertise and reach a wider audience. This increased our visibility and helped us secure partnerships with local repair shops.
            </p>
           <p>LabX, Powered by Bharat, represents the culmination of years of dedication, hard work, and a relentless pursuit of excellence. It &apos;s not a project driven by money; it &apos;s driven by passion. Fixing phones, solving problems, and helping others thrive in this field are what I love most. LabX is my way of giving back to an industry that has given me so much and transforming it into something better for everyone involved.
           </p> 
           
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default AboutUs;
