import {
  Award,
  ClipboardList,
  Clock,
  Globe,
  HeartPulse,
  Headphones,
  Image as ImageIcon,
  Inbox,
  Layers,
  Megaphone,
  Package,
  PenLine,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Target,
  UserCheck,
  Users,
  Workflow,
} from 'lucide-react'

const iconProps = { size: 22, strokeWidth: 1.75 }

// Flat list, kept in this order for the contact-form service dropdown.
export const SERVICES = [
  {
    icon: <ClipboardList {...iconProps} />,
    name: 'Project Management',
    desc: 'Timelines, cross-team coordination, task tracking, launches.',
  },
  {
    icon: <Globe {...iconProps} />,
    name: 'Website Development',
    desc: 'Landing pages and full sites that load fast and convert.',
  },
  {
    icon: <Megaphone {...iconProps} />,
    name: 'Social Media Management',
    desc: 'Strategy, scheduling, community, growth.',
  },
  {
    icon: <PenLine {...iconProps} />,
    name: 'Content Creation',
    desc: 'Posts, captions, newsletters, brand storytelling.',
  },
  {
    icon: <ImageIcon {...iconProps} />,
    name: 'Photo & Video Editing',
    desc: 'Polished, on-brand, ready to post.',
  },
  {
    icon: <Inbox {...iconProps} />,
    name: 'Executive Support',
    desc: 'Inbox, calendar, research, strategic admin.',
  },
  {
    icon: <Headphones {...iconProps} />,
    name: 'Customer Support',
    desc: 'Professional, responsive service for your clients.',
  },
  {
    icon: <Workflow {...iconProps} />,
    name: 'Automation Setup',
    desc: 'Workflows and tool integrations that save hours a week.',
  },
]

// Services regrouped by outcome for the homepage — same underlying services,
// referenced by name so descriptions stay in one place.
export const SERVICE_GROUPS = [
  { title: 'Get seen', names: ['Social Media Management', 'Content Creation', 'Website Development', 'Photo & Video Editing'] },
  { title: 'Get your time back', names: ['Executive Support', 'Customer Support', 'Automation Setup'] },
  { title: 'Get things shipped', names: ['Project Management'] },
].map((group) => ({
  ...group,
  items: group.names.map((name) => SERVICES.find((s) => s.name === name)!),
}))

export const WHO_WE_HELP = [
  { icon: <Users {...iconProps} />, title: 'Coaches & consultants', desc: 'Client delivery, launches, admin, content.' },
  { icon: <Layers {...iconProps} />, title: 'Agencies', desc: 'Overflow work, project management, client comms.' },
  { icon: <ShoppingBag {...iconProps} />, title: 'E-commerce brands', desc: 'Customer support, product content, ads support.' },
  { icon: <HeartPulse {...iconProps} />, title: 'Health & wellness businesses', desc: 'Scheduling, patient/client comms, content.' },
  { icon: <Rocket {...iconProps} />, title: 'Small teams scaling up', desc: 'Operations, systems, automation.' },
]

export const ONE_TEAM_POINTS = [
  { icon: <UserCheck {...iconProps} />, title: 'One point of contact.', desc: 'Tanja runs your account and knows the whole picture.' },
  { icon: <Award {...iconProps} />, title: 'Specialists, not generalists.', desc: 'Each service is done by someone who does it every day.' },
  { icon: <Layers {...iconProps} />, title: 'Add services without re-onboarding.', desc: 'Your context stays with the team.' },
  { icon: <ShieldCheck {...iconProps} />, title: 'Confidential by default.', desc: 'NDAs and secure workflows on every engagement.' },
]

export const PRICING_TIERS = [
  {
    icon: <Clock {...iconProps} />,
    title: 'Hourly',
    price: 'From $10/hr',
    desc: 'For focused tasks or getting started without commitment.',
  },
  {
    icon: <Package {...iconProps} />,
    title: 'Monthly packages',
    price: 'From $200/month',
    desc: 'Consistent support at a fixed cost. [PLACEHOLDER: hours included in the $200 package — should be at least 20 so the package beats the hourly rate]',
  },
  {
    icon: <Target {...iconProps} />,
    title: 'Project-based',
    price: 'Quoted up front',
    desc: 'Website builds, content campaigns, one-off launches.',
  },
]

export const TEAM_LEAD = {
  name: 'Tanja',
  role: 'Founder, your point of contact',
  photo: '/tanja.webp',
  bio: '[PLACEHOLDER: short bio — background, years running Virtuoso, what she personally handles]',
}

export const SPECIALISTS = [
  { name: '[PLACEHOLDER: name]', role: '[PLACEHOLDER: specialty]', photo: '/specialist-1.webp' },
  { name: '[PLACEHOLDER: name]', role: '[PLACEHOLDER: specialty]', photo: '/specialist-2.webp' },
  { name: '[PLACEHOLDER: name]', role: '[PLACEHOLDER: specialty]', photo: '/specialist-3.webp' },
  { name: '[PLACEHOLDER: name]', role: '[PLACEHOLDER: specialty]', photo: '/specialist-4.webp' },
  { name: '[PLACEHOLDER: name]', role: '[PLACEHOLDER: specialty]', photo: '/specialist-5.webp' },
]

export const FAQS = [
  {
    q: 'How do you vet your specialists?',
    a: 'Every specialist goes through a skills interview, a paid trial task, and a review of past client work before they join a Virtuoso account. We only bring people onto the team we’d trust with our own business.',
  },
  {
    q: 'Who will I actually be talking to day to day?',
    a: 'Tanja. She’s your single point of contact and knows your account end to end, so you’re never chasing several different people for updates.',
  },
  {
    q: 'What if the specialist isn’t the right fit?',
    a: 'Tell Tanja and we’ll swap them in without starting your onboarding over. Your context, documents, and preferences stay with the team.',
  },
  {
    q: 'Is there a minimum number of hours?',
    a: 'No. You can start with a single hourly task and add a monthly package or a full project once you know what fits.',
  },
  {
    q: 'What time zones do you cover?',
    a: 'We work CET, based in Banja Luka, Bosnia & Herzegovina — which overlaps with US mornings and covers a full UK working day.',
  },
  {
    q: 'How do you handle confidentiality and access to my accounts?',
    a: 'Every specialist signs an NDA before starting, and we use secure, permission-based access to your tools — never shared passwords.',
  },
  {
    q: 'How fast can we start?',
    a: 'Most clients are onboarded within a few days of their discovery call, once we’ve matched you with the right specialist.',
  },
  {
    q: 'Can I start with one service and add more later?',
    a: 'Yes — that’s how most clients start. The same team stays with you, so adding a service doesn’t mean starting over.',
  },
]

export const TESTIMONIALS = [
  {
    text: '"Working with Tanja as my Operations Manager has been a game-changer. I didn\'t have to worry about recruitment or meetings — she handled it all. I\'ve found Eastern European VAs to be not only cost-effective but incredibly efficient."',
    name: 'Greig Wells',
    role: 'Founder, Love Thy Neighbor Marketing & Virtual Dinner Party',
    photo: '/greig-wells.webp',
  },
  {
    text: '"I am very much impressed with Tanja and my virtual assistant, Una! Tanja personally took time to introduce us and make sure everything flowed smoothly. Una is smart, efficient, kind, and communicates quickly and well."',
    name: 'KennaRae Miller Thomas',
    role: 'Life & Business Coach',
    photo: '/kennarae.webp',
  },
  {
    text: '"I deeply appreciate that my VA stays ahead of the curve. I ask for help, go to sleep, and wake up for it to be done! I feel like Snow White who has her 7 gnomes keeping her business house clean while she sleeps."',
    name: 'Sylvia Becker Hill',
    role: 'Authentic Living & Prosperity Neuroplastician for Professional Women',
    photo: '/sylvia.webp',
  },
  {
    text: '"Tanja is a fantastic project manager. She\'s been on the team since March and is my right hand woman on all things. She\'s helped me simplify my systems, given me more free time to provide excellent care to my clients, and keeps \'Elevate Your Health Plan\' running smoothly and efficiently."',
    name: 'Mary Hunt',
    role: 'Founder, Elevate Your Health Plan',
    photo: '/mary-hunt.webp',
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
