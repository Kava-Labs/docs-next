import { Link } from './library';
import { SocialLink } from '../types';
import { useMediaQuery, useTheme } from '@material-ui/core';

function SocialLinks() {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

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

  return isMobile ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {displayedLinks}
    </div>
  ) : (
    <>{displayedLinks}</>
  );
}

export default SocialLinks;
