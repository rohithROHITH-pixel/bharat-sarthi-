import { NewsArticle } from "./news-data";

export const sampleNewsData: Omit<NewsArticle, 'id' | 'creatorId' | 'createdAt'>[] = [
  {
    title: "Bengaluru Tech Summit 2024 to Focus on AI and Global Innovation",
    category: "ರಾಜ್ಯ ಸುದ್ದಿ",
    imageUrl: "https://picsum.photos/seed/bengaluru-tech/800/600",
    imageHint: "tech summit",
    summary: "The upcoming Bengaluru Tech Summit will bring together global leaders to discuss the future of AI, biotechnology, and sustainable technology, reinforcing Karnataka's position as India's innovation hub.",
    content: "The government of Karnataka announced that the Bengaluru Tech Summit 2024 will be held in November. This year's theme, 'Code the Future,' will explore advancements in artificial intelligence, machine learning, and their impact on various sectors. The summit aims to attract investment and foster collaboration between international companies and local startups, further solidifying Bengaluru's reputation as the Silicon Valley of India. Keynote speakers from major tech giants are expected to attend.",
    time: "45 minutes ago"
  },
  {
    title: "Mysuru Dasara Preparations Begin, Elephant Procession Route Finalized",
    category: "ಸಂಸ್ಕೃತಿ",
    imageUrl: "https://picsum.photos/seed/mysuru-dasara/800/600",
    imageHint: "elephant festival",
    summary: "Authorities in Mysuru have finalized the route for the iconic 'Jamboo Savari' elephant procession, marking the official start of preparations for the world-renowned Dasara festival.",
    content: "With the grand Mysuru Dasara festival just a few months away, the district administration has begun preparations. The traditional path for the majestic elephant procession, the main attraction of the festival, has been inspected and approved. This year, the festivities are expected to be grander than ever, attracting tourists from across the globe to witness the cultural heritage of Karnataka. The selection of elephants for the procession is also underway.",
    time: "2 hours ago"
  },
  {
    title: "New Metro Line to Connect Silk Board to Kempegowda International Airport",
    category: "ರಾಜ್ಯ ಸುದ್ದಿ",
    imageUrl: "https://picsum.photos/seed/bengaluru-metro/800/600",
    imageHint: "metro train",
    summary: "The Bangalore Metro Rail Corporation Ltd (BMRCL) has fast-tracked the construction of the new Blue Line, which will significantly reduce travel time between the city's tech corridor and the airport.",
    content: "Commuters in Bengaluru can look forward to easier airport travel as the BMRCL accelerates work on the ORR-Airport Metro line. This crucial infrastructure project will connect the Central Silk Board junction with the Kempegowda International Airport. Spanning over 58 kilometers, the line is expected to be operational by 2026 and will feature 30 stations, integrating the tech hubs of the Outer Ring Road with the airport, thereby easing traffic congestion significantly.",
    time: "5 hours ago"
  },
  {
    title: "Karnataka Government Announces Farm Loan Waiver to Support Farmers",
    category: "ರಾಜಕೀಯ",
    imageUrl: "https://picsum.photos/seed/karnataka-farmer/800/600",
    imageHint: "farmer field",
    summary: "In a major relief to the agricultural community, the Karnataka state government has announced a comprehensive farm loan waiver scheme for small and marginal farmers.",
    content: "Facing distress due to erratic monsoons, the Karnataka government has rolled out a loan waiver for farmers holding loans up to ₹1 lakh. The move is intended to provide immediate relief and prevent farmers from falling into a debt trap. The chief minister stated that the welfare of the 'annadata' (food provider) is the government's top priority and this step will help revive the rural economy. Opposition parties have welcomed the move but have also called for long-term solutions.",
    time: "8 hours ago"
  },
  {
    title: "Hampi's Ancient Ruins Attract Record Number of Tourists Post-Pandemic",
    category: "ಪ್ರವಾಸೋದ್ಯಮ",
    imageUrl: "https://picsum.photos/seed/hampi-ruins/800/600",
    imageHint: "ancient ruins",
    summary: "The UNESCO World Heritage site of Hampi is witnessing a massive influx of domestic and international tourists, signaling a strong recovery for Karnataka's tourism sector.",
    content: "The ancient city of Hampi, once the capital of the Vijayanagara Empire, is bustling with activity again. Tourism officials report that footfall has surpassed pre-pandemic levels, with visitors eager to explore the magnificent ruins, temples, and boulder-strewn landscapes. The state tourism department has introduced new guided tours and improved facilities to enhance the visitor experience, promoting Hampi as a must-visit destination for history and culture enthusiasts.",
    time: "1 day ago"
  },
  {
    title: "Chitradurga Fort Gets a New Light and Sound Show",
    category: "ಪ್ರವಾಸೋದ್ಯಮ",
    imageUrl: "https://picsum.photos/seed/chitradurga-fort/800/600",
    imageHint: "fort night",
    summary: "A new state-of-the-art light and sound show has been inaugurated at the historic Chitradurga Fort, narrating the heroic tales of Onake Obavva and the Nayaka rulers.",
    content: "To boost tourism and highlight the rich history of the region, the Karnataka tourism department has launched a new light and sound show at Chitradurga Fort. Using advanced laser technology and immersive storytelling, the show brings to life the fort's legendary past, including the story of the brave Onake Obavva who defended the fort from Hyder Ali's army. The show is expected to be a major attraction for visitors to the region.",
    time: "2 days ago"
  },
   {
    title: "ISRO Prepares for Next Major Launch from Sriharikota",
    category: "ವಿಜ್ಞಾನ",
    imageUrl: "https://picsum.photos/seed/isro-rocket/800/600",
    imageHint: "rocket launch",
    summary: "The Indian Space Research Organisation (ISRO) is gearing up for its next big mission, a commercial satellite launch that will carry payloads from several international clients.",
    content: "ISRO continues to be a leader in the commercial satellite launch market. The upcoming PSLV mission from the Satish Dhawan Space Centre in Sriharikota will deploy communication satellites for clients from Europe and Southeast Asia. This mission underscores ISRO's capability to provide reliable and cost-effective launch services, contributing significantly to India's space economy. The launch is scheduled for next month and preparations are in full swing.",
    time: "3 hours ago"
  },
  {
    title: "Record Mango Harvest in Kolar District Brings Cheer to Farmers",
    category: "ಕೃಷಿ",
    imageUrl: "https://picsum.photos/seed/mango-harvest/800/600",
    imageHint: "mango orchard",
    summary: "Farmers in the Kolar district, known as the 'mango city' of Karnataka, are celebrating a bumper crop this year, with exports expected to reach an all-time high.",
    content: "Favorable weather conditions have resulted in a record-breaking mango harvest in the Kolar and Chikkaballapur regions. Varieties like Alphonso, Badami, and Mallika are in high demand in both domestic and international markets. The state horticulture department has facilitated export logistics, ensuring that the 'king of fruits' from Karnataka reaches consumers worldwide. The abundant harvest has brought significant economic relief to the farming community in the region.",
    time: "12 hours ago"
  },
  {
    title: "Royal Challengers Bengaluru Announce New Captain for Upcoming IPL Season",
    category: "ಕ್ರೀಡೆ",
    imageUrl: "https://picsum.photos/seed/rcb-cricket/800/600",
    imageHint: "cricket stadium",
    summary: "In a much-anticipated announcement, Royal Challengers Bengaluru (RCB) have named their new captain ahead of the Indian Premier League (IPL) auction.",
    content: "The RCB management has appointed a new skipper to lead the team in the upcoming IPL season. The decision comes after much speculation among fans and cricket analysts. The franchise expressed confidence that the new captain will bring fresh energy and strategy to the team in their quest for a maiden IPL trophy. The announcement has created a buzz on social media, with fans eagerly awaiting the team's performance under the new leadership.",
    time: "1 day ago"
  }
];
