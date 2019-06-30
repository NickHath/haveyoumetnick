import Link from 'next/link';

const pages = ["bread_crumb", "date_idea_generator", "hack_yale", "peanut_gallery"];

const Index = () => pages.map(page => <Link href={`/${page}`}>{page}</Link>)

export default Index;