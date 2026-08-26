const S = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" {...p} />
)

export const SERVICES = [
  {
    icon: <S><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 10l2 2 4-4M9 15h6"/></S>,
    name: 'Project Management',
    desc: 'Organized timelines, cross-team coordination, and task tracking so your projects ship on time.',
  },
  {
    icon: <S><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M8 13l-2 2 2 2M16 13l2 2-2 2M12 18l1-4"/></S>,
    name: 'Website Development',
    desc: 'Landing pages and full websites built to look great, load fast, and convert visitors into clients.',
  },
  {
    icon: <S><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.4 10.9l7.2-4M8.4 13.1l7.2 4"/></S>,
    name: 'Social Media Management',
    desc: 'Strategy, scheduling, community management, and growth across all your platforms — handled completely.',
  },
  {
    icon: <S><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></S>,
    name: 'Content Creation',
    desc: 'Engaging posts, captions, newsletters, and brand storytelling crafted to connect with your audience.',
  },
  {
    icon: <S><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></S>,
    name: 'Photo & Video Editing',
    desc: 'Professional editing and post-production that keeps your content polished, on-brand, and scroll-stopping.',
  },
  {
    icon: <S><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M12 12v4M10 14h4"/></S>,
    name: 'Executive Support',
    desc: 'Calendar control, inbox management, research, and strategic admin for busy CEOs and leaders.',
  },
  {
    icon: <S><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></S>,
    name: 'Customer Support',
    desc: 'Professional, responsive customer service via calls — keeping your clients happy and loyal.',
  },
  {
    icon: <S><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1"/></S>,
    name: 'Automation Setup',
    desc: 'Smart workflow automations and tool integrations that save hours every week.',
  },
]

export const TESTIMONIALS = [
  {
    text: '"Working with Tanja as my Operations Manager has been a game-changer. I didn\'t have to worry about recruitment or meetings — she handled it all. I\'ve found Eastern European VAs to be not only cost-effective but incredibly efficient."',
    name: 'Greig Wells',
    role: 'Founder, Love Thy Neighbor Marketing & Virtual Dinner Party',
    photo: '/greig-wells.png',
  },
  {
    text: '"I am very much impressed with Tanja and my virtual assistant, Una! Tanja personally took time to introduce us and make sure everything flowed smoothly. Una is smart, efficient, kind, and communicates quickly and well."',
    name: 'KennaRae Miller Thomas',
    role: 'Life & Business Coach',
    photo: '/kennarae.png',
  },
  {
    text: '"I deeply appreciate that my VA stays ahead of the curve. I ask for help, go to sleep, and wake up for it to be done! I feel like Snow White who has her 7 gnomes keeping her business house clean while she sleeps."',
    name: 'Sylvia Becker Hill',
    role: 'Authentic Living & Prosperity Neuroplastician for Professional Women',
    photo: '/sylvia.png',
  },
  {
    text: '"Tanja is a fantastic project manager. She\'s been on the team since March and is my right hand woman on all things. She\'s helped me simplify my systems, given me more free time to provide excellent care to my clients, and keeps \'Elevate Your Health Plan\' running smoothly and efficiently."',
    name: 'Mary Hunt',
    role: 'Founder, Elevate Your Health Plan',
    photo: '/mary-hunt.jpg',
  },
]

export const MARQUEE_ITEMS = [
  'Social Media Management',
  'Content Creation',
  'Project Management',
  'Website Development',
  'Executive Support',
  'Automation Setup',
  'Photo & Video Editing',
  'Customer Support',
]

export function LogoSvg({ color = '#7a1f3d' }: { color?: string }) {
  return (
    <svg
      className="logo-svg"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="16" y1="3" x2="16" y2="14"
        stroke={color} strokeWidth="2.8" strokeLinecap="round"
      />
      <line
        x1="16" y1="14" x2="6" y2="27"
        stroke={color} strokeWidth="2.8" strokeLinecap="round"
      />
      <line
        x1="16" y1="14" x2="26" y2="27"
        stroke={color} strokeWidth="2.8" strokeLinecap="round"
      />
      <circle cx="16" cy="3" r="2" fill={color} />
    </svg>
  )
}
