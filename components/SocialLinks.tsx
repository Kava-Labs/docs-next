import { Link } from "./library";

interface SocialLink {
    name: string;
    url: string;
}

function SocialLinks() {
    const links: SocialLink[] = [
        {
            name: "Github",
            url: "https://github.com/Kava-Labs",
        },
        {
            name: "Discord",
            url: "https://discord.gg/JJYnuCx",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/kava_labs",
        },
    ];

    const displayedLinks = links.map((link, index) => (
      <Link href={link.url} key={index}>{link.name}</Link>
    ));

    return <>{displayedLinks}</>;
}

export default SocialLinks;
