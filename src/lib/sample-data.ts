import { NewsArticle } from "./news-data";

export const sampleNewsData: Omit<NewsArticle, 'id' | 'creatorId' | 'createdAt'>[] = [
  // State News
  {
    title: "Karnataka Govt Launches 'Krishi Mitra AI' to Modernize Agriculture",
    category: "ರಾಜ್ಯ ಸುದ್ದಿ",
    imageUrl: "https://picsum.photos/seed/karnataka-agri/800/600",
    imageHint: "farmer using tablet",
    summary: "The state government has launched a new AI platform to provide real-time data on crop health, soil conditions, and weather to farmers, aiming to boost productivity.",
    content: "In a landmark move, the Karnataka government unveiled 'Krishi Mitra AI,' a new digital platform designed to empower farmers with cutting-edge technology. The platform uses satellite imagery and machine learning algorithms to analyze farm data and provide actionable insights directly to farmers' smartphones.",
    time: "2 hours ago"
  },
  {
    title: "Namma Metro's Yellow Line Set to Begin Operations in August",
    category: "ರಾಜ್ಯ ಸುದ್ದಿ",
    imageUrl: "https://picsum.photos/seed/namma-metro/800/600",
    imageHint: "modern metro train",
    summary: "BMRCL has announced that the much-awaited Yellow Line, connecting RV Road to Bommasandra, will be open to the public by the end of August 2024.",
    content: "The Bangalore Metro Rail Corporation Ltd. (BMRCL) is in the final stages of commissioning the Yellow Line. This new line is expected to significantly ease traffic congestion in the city's tech corridor, providing a much-needed public transport option for thousands of commuters working in Electronic City.",
    time: "1 day ago"
  },
  // Politics
  {
    title: "State Assembly Passes New Bill for Urban Development",
    category: "ರಾಜಕೀಯ",
    imageUrl: "https://picsum.photos/seed/vidhana-soudha/800/600",
    imageHint: "Vidhana Soudha building",
    summary: "A new bill aimed at streamlining urban planning and creating 'mini-cities' on the outskirts of major urban centers was passed in the legislative assembly today.",
    content: "The Karnataka Legislative Assembly has passed the Comprehensive Urban Development Bill, which aims to decongest major cities by developing satellite towns with dedicated infrastructure. The opposition raised concerns about land acquisition and environmental impact, but the bill was passed with a majority vote.",
    time: "8 hours ago"
  },
  // Sports (Cricket)
  {
    title: "Royal Challengers Bengaluru Announce New Captain for Upcoming Season",
    category: "ಕ್ರೀಡೆ",
    imageUrl: "https://picsum.photos/seed/rcb-cricket/800/600",
    imageHint: "cricket stadium floodlights",
    summary: "RCB management has officially named a new captain, a strategic move aimed at bringing a fresh perspective to the team's leadership for the next IPL season.",
    content: "In a major announcement, Royal Challengers Bengaluru (RCB) have appointed a new skipper. The franchise hopes this change will bring new energy and strategy to the team as they continue their quest for the elusive IPL trophy. The decision has been met with mixed reactions from fans on social media.",
    time: "15 hours ago"
  },
  // Health
  {
    title: "Karnataka Launches Telemedicine Hubs in 50 Rural Taluks",
    category: "ಆರೋಗ್ಯ",
    imageUrl: "https://picsum.photos/seed/telemedicine-karnataka/800/600",
    imageHint: "doctor video call",
    summary: "The Health Department has rolled out new telemedicine centers to provide specialist medical consultations to people in remote and underserved areas of the state.",
    content: "In an effort to bridge the urban-rural healthcare divide, the Karnataka government has established 50 telemedicine hubs. These centers will connect patients in rural areas with specialist doctors in Bengaluru and other major cities via video conferencing, providing access to quality healthcare without the need for travel.",
    time: "2 days ago"
  },
  // Crime
  {
    title: "Bengaluru Police Bust Major Cybercrime Racket; 5 Arrested",
    category: "ಕ್ರೈಂ ಸುದ್ದಿ",
    imageUrl: "https://picsum.photos/seed/cyber-crime/800/600",
    imageHint: "police investigation handcuffs",
    summary: "The Central Crime Branch (CCB) of Bengaluru has successfully dismantled a sophisticated online fraud operation, arresting five individuals involved in phishing scams.",
    content: "Acting on a tip-off, the CCB conducted a series of raids across the city, leading to the arrest of a gang that was creating fake websites to steal banking information. The police have recovered laptops, mobile phones, and several fraudulent documents from the accused.",
    time: "20 hours ago"
  },
  // International
  {
    title: "Karnataka-based IT Firm Signs Landmark AI Deal with European Automaker",
    category: "ಅಂತರಾಷ್ಟ್ರೀಯ",
    imageUrl: "https://picsum.photos/seed/it-deal/800/600",
    imageHint: "business handshake meeting",
    summary: "A leading Bengaluru-based IT services company has secured a multi-million dollar contract to develop an AI-powered autonomous driving system for a major European car brand.",
    content: "This deal marks a significant milestone for India's technology sector and highlights Karnataka's growing prowess in the global AI landscape. The project will involve over 500 engineers from the Bengaluru campus and will focus on developing next-generation autonomous vehicle technology.",
    time: "3 days ago"
  },
  // More sample news
   {
    title: "Mysuru Dasara Preparations Begin, Elephant Procession Route Finalized",
    category: "ರಾಜ್ಯ ಸುದ್ದಿ",
    imageUrl: "https://picsum.photos/seed/mysuru-dasara/800/600",
    imageHint: "decorated elephant festival",
    summary: "The district administration has finalized the route for the iconic 'Jumboo Savari' and has begun preparations for the world-renowned Mysuru Dasara festival.",
    content: "With the festival just a few months away, officials have started the extensive preparations required for the grand event. The first batch of elephants will arrive in the city next month for training and acclimatization. The festival is a major tourist attraction for the state.",
    time: "4 days ago"
  },
   {
    title: "New Policy to Promote Electric Vehicle Manufacturing in Karnataka",
    category: "ರಾಜಕೀಯ",
    imageUrl: "https://picsum.photos/seed/ev-policy/800/600",
    imageHint: "electric car charging",
    summary: "The state cabinet has approved a new policy offering incentives and subsidies for companies looking to set up electric vehicle (EV) manufacturing plants in Karnataka.",
    content: "Aiming to become a hub for electric mobility, the Karnataka government has announced a new EV policy. This includes benefits like tax exemptions and land subsidies for manufacturers, which is expected to attract significant investment and create thousands of jobs in the state.",
    time: "5 days ago"
  },
];
