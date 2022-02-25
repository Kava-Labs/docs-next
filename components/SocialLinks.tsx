import { Link } from "./library";

interface SocialLink {
    name: string;
    url: string;
}

function SocialLinks() {
    const links: SocialLink[] = [
        {
            name: "Github",
            url: "",
        },
        {
            name: "Discord",
            url: "",
        },
        {
            name: "Twitter",
            url: "",
        },
    ];

    const displayedLinks = links.map((link, index) => (
      <Link href={link.url} key={index}>{link.name}</Link>
    ));

    return <>{displayedLinks}</>;
}

export default SocialLinks;
