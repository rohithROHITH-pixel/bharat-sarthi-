'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಹೊಸ ಹೂಡಿಕೆಗಳನ್ನು ಆಕರ್ಷಿಸಲು ಸರ್ಕಾರ ಬದ್ಧವಾಗಿದೆ',
    category: 'ರಾಜಕೀಯ',
    imageUrl: 'https://picsum.photos/seed/karnataka-investment/600/400',
    imageHint: 'government meeting',
    summary: 'ಮುಖ್ಯಮಂತ್ರಿಗಳು ಇಂದು ನಡೆದ ಉನ್ನತ ಮಟ್ಟದ ಸಭೆಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ಹೆಚ್ಚಿನ ಹೂಡಿಕೆಗಳನ್ನು ತರಲು ಹೊಸ ನೀತಿಗಳನ್ನು ಘೋಷಿಸಿದರು.',
    time: '2 ಗಂಟೆಗಳ ಹಿಂದೆ',
  },
  {
    id: 2,
    title: 'ಬೆಂಗಳೂರು: ನಾಳೆ ಹಲವು ಪ್ರದೇಶಗಳಲ್ಲಿ ವಿದ್ಯುತ್ ವ್ಯತ್ಯಯ',
    category: 'ನಗರ ಸುದ್ದಿ',
    imageUrl: 'https://picsum.photos/seed/power-cut-bangalore/600/400',
    imageHint: 'power lines',
    summary: 'ಬೆಸ್ಕಾಂ ನಿರ್ವಹಣಾ ಕಾರ್ಯಗಳಿಂದಾಗಿ, ನಗರದ ಹಲವು ಬಡಾವಣೆಗಳಲ್ಲಿ ಬೆಳಿಗ್ಗೆ 10 ರಿಂದ ಸಂಜೆ 5 ರವರೆಗೆ ವಿದ್ಯುತ್ ಸರಬರಾಜಿನಲ್ಲಿ ವ್ಯತ್ಯಯ ಉಂಟಾಗಲಿದೆ.',
    time: '5 ಗಂಟೆಗಳ ಹಿಂದೆ',
  },
  {
    id: 3,
    title: 'ರಾಜ್ಯದಲ್ಲಿ ಮುಂಗಾರು ಚುರುಕು: ರೈತರಲ್ಲಿ ಸಂತಸ',
    category: 'ಕೃಷಿ',
    imageUrl: 'https://picsum.photos/seed/monsoon-karnataka/600/400',
    imageHint: 'farmland rain',
    summary: 'ಕಳೆದ ಕೆಲವು ದಿನಗಳಿಂದ ರಾಜ್ಯದಾದ್ಯಂತ ಉತ್ತಮ ಮಳೆಯಾಗುತ್ತಿದ್ದು, ಕೃಷಿ ಚಟುವಟಿಕೆಗಳು ಗರಿಗೆದರಿವೆ. ರೈತರು ಸಂತಸಗೊಂಡಿದ್ದಾರೆ.',
    time: '8 ಗಂಟೆಗಳ ಹಿಂದೆ',
  },
  {
    id: 4,
    title: 'ಐಪಿಎಲ್ 2025: ಆರ್‌ಸಿಬಿ ತಂಡದಲ್ಲಿ ದೊಡ್ಡ ಬದಲಾವಣೆಗಳ ನಿರೀಕ್ಷೆ',
    category: 'ಕ್ರೀಡೆ',
    imageUrl: 'https://picsum.photos/seed/rcb-auction/600/400',
    imageHint: 'cricket stadium',
    summary: 'ಮುಂದಿನ ಐಪಿಎಲ್ ಆವೃತ್ತಿಗಾಗಿ ಆಟಗಾರರ ಹರಾಜು ಪ್ರಕ್ರಿಯೆಗೆ ಮುನ್ನ, ಆರ್‌ಸಿಬಿ ತಂಡವು ಕೆಲವು ಪ್ರಮುಖ ಆಟಗಾರರನ್ನು ಕೈಬಿಡುವ ಸಾಧ್ಯತೆಯಿದೆ.',
    time: '1 ದಿನದ ಹಿಂದೆ',
  },
  {
    id: 5,
    title: 'ಕನ್ನಡ ಚಲನಚಿತ್ರ ರಂಗಕ್ಕೆ ಹೊಸ ಪ್ರಶಸ್ತಿ',
    category: 'ಮನರಂಜನೆ',
    imageUrl: 'https://picsum.photos/seed/kannada-film-award/600/400',
    imageHint: 'film award',
    summary: 'ರಾಜ್ಯ ಸರ್ಕಾರವು ಯುವ ಪ್ರತಿಭೆಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಲು ಹೊಸ ಚಲನಚಿತ್ರ ಪ್ರಶಸ್ತಿಯನ್ನು ಸ್ಥಾಪಿಸಿದೆ, ಇದನ್ನು ಮುಂದಿನ ತಿಂಗಳು ಪ್ರದಾನ ಮಾಡಲಾಗುವುದು.',
    time: '2 ದಿನಗಳ ಹಿಂದೆ',
  },
  {
    id: 6,
    title: 'ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ಗ್ರಾಮೀಣ ಶಿಕ್ಷಣದಲ್ಲಿ ಕ್ರಾಂತಿ',
    category: 'ತಂತ್ರಜ್ಞಾನ',
    imageUrl: 'https://picsum.photos/seed/rural-education-tech/600/400',
    imageHint: 'students computers',
    summary: 'ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ಡಿಜಿಟಲ್ ತರಗತಿಗಳನ್ನು ಅಳವಡಿಸುವ ಮೂಲಕ ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ನೀಡುವ ಪ್ರಯತ್ನಗಳು ಯಶಸ್ವಿಯಾಗಿವೆ.',
    time: '3 ದಿನಗಳ ಹಿಂದೆ',
  },
];


export default function NewsList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
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
            ))}
        </div>
    );
}
