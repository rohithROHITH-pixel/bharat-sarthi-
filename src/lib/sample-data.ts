import { NewsArticle } from "./news-data";

export const sampleNewsData: Omit<NewsArticle, 'id' | 'creatorId' | 'createdAt'>[] = [
  {
    title: "Karnataka Govt Launches AI-Powered Platform to Modernize Agriculture",
    category: "ರಾಜ್ಯ ಸುದ್ದಿ",
    imageUrl: "https://picsum.photos/seed/ai-agriculture/800/600",
    imageHint: "AI agriculture technology",
    summary: "The state government has launched a new AI platform, 'Krishi Mitra AI', to provide real-time data on crop health, soil conditions, and weather to farmers, aiming to boost productivity.",
    content: "In a landmark move, the Karnataka government unveiled 'Krishi Mitra AI,' a new digital platform designed to empower farmers with cutting-edge technology. The platform uses satellite imagery and machine learning algorithms to analyze farm data and provide actionable insights directly to farmers' smartphones. This initiative is expected to help farmers make informed decisions about irrigation, pesticide use, and harvest times, leading to better yields and reduced costs. The project will be rolled out in a phased manner, starting with Kolar and Mandya districts.",
    time: "2 hours ago"
  },
  {
    title: "Bengaluru to Host Global AI Conclave Focusing on Ethical Innovation",
    category: "ವಿಜ್ಞಾನ",
    imageUrl: "https://picsum.photos/seed/ai-conclave/800/600",
    imageHint: "AI conference",
    summary: "Bengaluru is set to host the world's leading AI researchers and ethicists to discuss the future of responsible AI development and its societal impact.",
    content: "The Global AI Conclave, scheduled for next month in Bengaluru, will address the critical need for ethical guidelines in artificial intelligence. The event will feature panel discussions on data privacy, algorithmic bias, and the future of work in an AI-driven world. Organizers hope to establish a framework for responsible innovation that can be adopted globally, reinforcing Bengaluru's status as a hub for conscientious technology leadership.",
    time: "10 hours ago"
  },
  {
    title: "New 'AI City' Planned on the Outskirts of Bengaluru to Foster Innovation",
    category: "ರಾಜ್ಯ ಸುದ್ದಿ",
    imageUrl: "https://picsum.photos/seed/ai-city/800/600",
    imageHint: "futuristic city skyline",
    summary: "The Karnataka government has announced an ambitious project to build a dedicated 'AI City' to attract global talent and investment in the artificial intelligence sector.",
    content: "Following the success of Electronic City, the state government is planning a new thematic technology park focused solely on artificial intelligence. The proposed 'AI City' will feature state-of-the-art research labs, data centers, and a startup incubator. The goal is to create a comprehensive ecosystem that supports the entire AI lifecycle, from academic research to commercial product development, and to position Karnataka as a global AI powerhouse.",
    time: "1 day ago"
  },
  {
    title: "Karnataka's Startups Lead the Charge in AI-Powered Healthcare Solutions",
    category: "ಆರೋಗ್ಯ",
    imageUrl: "https://picsum.photos/seed/ai-healthcare/800/600",
    imageHint: "AI medical scan",
    summary: "Bengaluru-based startups are making waves with innovative AI tools that assist in diagnosing diseases earlier and personalizing patient treatment plans.",
    content: "From using machine learning to detect cancer in medical scans to developing AI algorithms that predict patient risk for chronic diseases, Karnataka's health-tech startups are at the forefront of medical innovation. These new technologies are helping doctors make faster, more accurate diagnoses and are making healthcare more accessible and affordable for people across the state. Several of these startups have received international recognition and funding.",
    time: "2 days ago"
  },
  {
    title: "AI Skilling Programs Launched to Prepare Karnataka's Workforce for Future Jobs",
    category: "ರಾಜಕೀಯ",
    imageUrl: "https://picsum.photos/seed/ai-education/800/600",
    imageHint: "students learning code",
    summary: "The state is launching a massive upskilling initiative to train one million people in AI and data science skills over the next two years to meet growing industry demand.",
    content: "To address the skills gap in the rapidly evolving technology landscape, the Karnataka Digital Economy Mission (KDEM) has partnered with leading tech companies and educational institutions. The 'AI for All' program will offer a range of courses, from basic AI literacy to advanced machine learning engineering. The initiative aims to ensure that Karnataka's talent pool remains competitive and is well-equipped for the jobs of the future.",
    time: "3 days ago"
  }
];