import { Link } from './library';
import { SocialLink } from '../types';

function SocialLinks() {
  const links: SocialLink[] = [
    {
      name: 'Github',
      url: 'https://github.com/Kava-Labs',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/JJYnuCx',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kava_labs',
    },
  ];

  const displayedLinks = links.map((link, index) => (
    <Link href={link.url} key={index} style={{ marginRight: '24px' }}>
      {link.name}
    </Link>
  ));

  return <>{displayedLinks}</>;
}

export default SocialLinks;
