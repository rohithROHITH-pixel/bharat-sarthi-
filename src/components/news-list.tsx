'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಮ್ಮ ಮೆಟ್ರೋ ಹಳದಿ ಲೈನ್ ಈ ವರ್ಷಾಂತ್ಯಕ್ಕೆ ಸಿದ್ಧ',
    category: 'ರಾಜ್ಯ ಸುದ್ದಿ',
    imageUrl: 'https://picsum.photos/seed/namma-metro-yellow/600/400',
    imageHint: 'metro train',
    summary: 'ಬೆಂಗಳೂರಿನ ಬಹುನಿರೀಕ್ಷಿತ ನಮ್ಮ ಮೆಟ್ರೋ ಹಳದಿ ಲೈನ್ (ಆರ್.ವಿ. ರಸ್ತೆ - ಬೊಮ್ಮಸಂದ್ರ) ನಿರ್ಮಾಣ ಕಾರ್ಯ ಅಂತಿಮ ಹಂತದಲ್ಲಿದ್ದು, ಈ ವರ್ಷದ ಅಂತ್ಯದ ವೇಳೆಗೆ ಸಂಚಾರಕ್ಕೆ ಮುಕ್ತವಾಗುವ ನಿರೀಕ್ಷೆಯಿದೆ.',
    time: '2 ಗಂಟೆಗಳ ಹಿಂದೆ',
  },
  {
    id: 2,
    title: 'ಮಹಾರಾಜ ಟ್ರೋಫಿ: ಮೈಸೂರು ವಾರಿಯರ್ಸ್ ತಂಡಕ್ಕೆ ರೋಚಕ ಜಯ',
    category: 'ಕ್ರೀಡೆ',
    imageUrl: 'https://picsum.photos/seed/maharaja-trophy/600/400',
    imageHint: 'cricket players',
    summary: 'ಮಹಾರಾಜ ಟ್ರೋಫಿ ಟಿ20 ಪಂದ್ಯಾವಳಿಯಲ್ಲಿ ನಡೆದ ರೋಚಕ ಪಂದ್ಯದಲ್ಲಿ ಮೈಸೂರು ವಾರಿಯರ್ಸ್ ತಂಡವು ಹುಬ್ಬಳ್ಳಿ ಟೈಗರ್ಸ್ ವಿರುದ್ಧ ಕೊನೆಯ ಎಸೆತದಲ್ಲಿ ಜಯ ಸಾಧಿಸಿತು. ನಾಯಕ ಕರುಣ್ ನಾಯರ್ ಅವರ ಅಮೋಘ ಆಟ ತಂಡದ ಗೆಲುವಿಗೆ ಕಾರಣವಾಯಿತು.',
    time: '5 ಗಂಟೆಗಳ ಹಿಂದೆ',
  },
  {
    id: 3,
    title: 'ರಾಜ್ಯಾದ್ಯಂತ ಆರೋಗ್ಯ ತಪಾಸಣಾ ಶಿಬಿರಗಳಿಗೆ ಚಾಲನೆ',
    category: 'ಆರೋಗ್ಯ',
    imageUrl: 'https://picsum.photos/seed/health-checkup-karnataka/600/400',
    imageHint: 'doctor patient',
    summary: 'ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಬಲಪಡಿಸುವ ಉದ್ದೇಶದಿಂದ, ರಾಜ್ಯ ಆರೋಗ್ಯ ಇಲಾಖೆಯು "ಆರೋಗ್ಯ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ" ಎಂಬ ಹೊಸ ಯೋಜನೆಯಡಿ ರಾಜ್ಯಾದ್ಯಂತ ಉಚಿತ ಆರೋಗ್ಯ ತಪಾಸಣಾ ಶಿಬಿರಗಳನ್ನು ಆರಂಭಿಸಿದೆ.',
    time: '8 ಗಂಟೆಗಳ ಹಿಂದೆ',
  },
  {
    id: 4,
    title: 'ಮಲೆನಾಡಿನಲ್ಲಿ ಭಾರಿ ಮಳೆ: ಜನಜೀವನ ಅಸ್ತವ್ಯಸ್ತ',
    category: 'ರಾಜ್ಯ ಸುದ್ದಿ',
    imageUrl: 'https://picsum.photos/seed/malnad-rain/600/400',
    imageHint: 'heavy rain',
    summary: 'ಚಿಕ್ಕಮಗಳೂರು, ಶಿವಮೊಗ್ಗ ಮತ್ತು ಕೊಡಗು ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಕಳೆದ 48 ಗಂಟೆಗಳಿಂದ ಎಡಬಿಡದೆ ಸುರಿಯುತ್ತಿರುವ ಮಳೆಯಿಂದಾಗಿ ಹಲವು ಪ್ರದೇಶಗಳು ಜಲಾವೃತಗೊಂಡಿದ್ದು, ಜನಜೀವನ ಅಸ್ತವ್ಯಸ್ತಗೊಂಡಿದೆ.',
    time: '1 ದಿನದ ಹಿಂದೆ',
  },
  {
    id: 5,
    title: 'ದಸರಾ 2024: ಗಜಪಡೆಯ ಮೊದಲ ತಂಡ ಮೈಸೂರಿಗೆ ಆಗಮನ',
    category: 'ಸಂಸ್ಕೃತಿ',
    imageUrl: 'https://picsum.photos/seed/mysore-dasara-elephants/600/400',
    imageHint: 'decorated elephant',
    summary: 'ವಿಶ್ವವಿಖ್ಯಾತ ಮೈಸೂರು ದಸರಾ ಮಹೋತ್ಸವಕ್ಕೆ ಸಿದ್ಧತೆಗಳು ಆರಂಭವಾಗಿದ್ದು, ಕ್ಯಾಪ್ಟನ್ ಅಭಿಮನ್ಯು ನೇತೃತ್ವದ ಗಜಪಡೆಯ ಮೊದಲ ತಂಡ ಅರಮನೆ ನಗರಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ಸ್ವಾಗತದೊಂದಿಗೆ ಆಗಮಿಸಿದೆ.',
    time: '2 ದಿನಗಳ ಹಿಂದೆ',
  },
  {
    id: 6,
    title: 'ಬೆಂಗಳೂರು ಟೆಕ್ ಸಮ್ಮಿಟ್ 2024: ನವೆಂಬರ್‌ನಲ್ಲಿ ಆಯೋಜನೆ',
    category: 'ತಂತ್ರಜ್ಞಾನ',
    imageUrl: 'https://picsum.photos/seed/bangalore-tech-summit/600/400',
    imageHint: 'tech conference',
    summary: 'ಏಷ್ಯಾದ ಅತಿದೊಡ್ಡ ತಂತ್ರಜ್ಞಾನ ಮೇಳವಾದ ಬೆಂಗಳೂರು ಟೆಕ್ ಸಮ್ಮಿಟ್‌ನ 27ನೇ ಆವೃತ್ತಿಯು ನವೆಂಬರ್ 19 ರಿಂದ 21 ರವರೆಗೆ ಅರಮನೆ ಮೈದಾನದಲ್ಲಿ ನಡೆಯಲಿದೆ ಎಂದು ಸರ್ಕಾರ ಘೋಷಿಸಿದೆ.',
    time: '3 ದಿನಗಳ ಹಿಂದೆ',
  },
  {
    id: 7,
    title: 'ಶಿವಮೊಗ್ಗದಲ್ಲಿ ಹೊಸ ವಿಮಾನ ನಿಲ್ದಾಣ: ಪ್ರವಾಸೋದ್ಯಮಕ್ಕೆ ಉತ್ತೇಜನ',
    category: 'ರಾಜ್ಯ ಸುದ್ದಿ',
    imageUrl: 'https://picsum.photos/seed/shimoga-airport/600/400',
    imageHint: 'airport runway',
    summary: 'ಮಲೆನಾಡಿನ ಹೆಬ್ಬಾಗಿಲು ಶಿವಮೊಗ್ಗದಲ್ಲಿ ನೂತನವಾಗಿ ನಿರ್ಮಾಣವಾಗಿರುವ ವಿಮಾನ ನಿಲ್ದಾಣವು ಪ್ರಧಾನಿ ನರೇಂದ್ರ ಮೋದಿಯವರಿಂದ ಉದ್ಘಾಟನೆಗೊಂಡಿತು. ಇದು ಈ ಭಾಗದ ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ವಾಣಿಜ್ಯ ಚಟುವಟಿಕೆಗಳಿಗೆ ದೊಡ್ಡ ಉತ್ತೇಜನ ನೀಡಲಿದೆ.',
    time: '4 ದಿನಗಳ ಹಿಂದೆ'
  },
  {
    id: 8,
    title: 'ಐಪಿಎಲ್: ರಾಯಲ್ ಚಾಲೆಂಜರ್ಸ್ ಬೆಂಗಳೂರು ತಂಡಕ್ಕೆ ಹೊಸ ಕೋಚ್',
    category: 'ಕ್ರೀಡೆ',
    imageUrl: 'https://picsum.photos/seed/rcb-new-coach/600/400',
    imageHint: 'cricket coach',
    summary: 'ಮುಂದಿನ ಐಪಿಎಲ್ ಆವೃತ್ತಿಗಾಗಿ ರಾಯಲ್ ಚಾಲೆಂಜರ್ಸ್ ಬೆಂಗಳೂರು ತಂಡವು ಆಸ್ಟ್ರೇಲಿಯಾದ ಮಾಜಿ ಆಟಗಾರ ಆಂಡಿ ಫ್ಲವರ್ ಅವರನ್ನು ಮುಖ್ಯ ಕೋಚ್ ಆಗಿ ನೇಮಿಸಿದೆ.',
    time: '5 ದಿನಗಳ ಹಿಂದೆ'
  },
  {
    id: 9,
    title: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಡೆಂಗ್ಯೂ ಪ್ರಕರಣಗಳ ಏರಿಕೆ: ಆರೋಗ್ಯ ಇಲಾಖೆ ಎಚ್ಚರಿಕೆ',
    category: 'ಆರೋಗ್ಯ',
    imageUrl: 'https://picsum.photos/seed/karnataka-dengue/600/400',
    imageHint: 'mosquito prevention',
    summary: 'ರಾಜ್ಯದಲ್ಲಿ ಮಳೆಗಾಲದ ನಂತರ ಡೆಂಗ್ಯೂ ಪ್ರಕರಣಗಳ ಸಂಖ್ಯೆಯಲ್ಲಿ ಗಣನೀಯ ಏರಿಕೆ ಕಂಡುಬಂದಿದ್ದು, ಸೊಳ್ಳೆಗಳ ನಿಯಂತ್ರಣಕ್ಕೆ ಮತ್ತು ಸ್ವಚ್ಛತೆಗೆ ಆದ್ಯತೆ ನೀಡುವಂತೆ ಆರೋಗ್ಯ ಇಲಾಖೆ ಸಾರ್ವಜನಿಕರಲ್ಲಿ ಮನವಿ ಮಾಡಿದೆ.',
    time: '6 ದಿನಗಳ ಹಿಂದೆ'
  }
];

type NewsListProps = {
  category?: string;
};

export default function NewsList({ category }: NewsListProps) {
    const filteredNews = category
        ? newsItems.filter((item) => item.category === category)
        : newsItems;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
                filteredNews.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <Link href="#">
                            <div className="relative h-56 w-full">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={item.imageHint}
                                />
                            </div>
                            <CardHeader>
                                <Badge variant="secondary" className="mb-2 w-fit">{item.category}</Badge>
                                <CardTitle className="text-xl font-bold leading-snug">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.summary}</p>
                            </CardContent>
                            <CardFooter>
                                <p className="text-xs text-muted-foreground">{item.time}</p>
                            </CardFooter>
                        </Link>
                    </Card>
                ))
            ) : (
                <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">ಈ ವರ್ಗದಲ್ಲಿ ಯಾವುದೇ ಸುದ್ದಿ ಲಭ್ಯವಿಲ್ಲ.</p>
                </div>
            )}
        </div>
    );
}
