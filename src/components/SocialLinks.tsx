import Link from "next/link";
import {
    FaXTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa6";

const socials = [
    {
        name: "X (Twitter)",
        icon: FaXTwitter,
        href: "https://x.com/Ankur77s",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://instagram.com/ankur_0704",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/ankur-sonavane/",
    },
    {
        name: "GitHub",
        icon: FaGithub,
        href: "https://github.com/ankur0704",
    },
    {
        name: "Email",
        icon: FaEnvelope,
        href: "mailto:sonavaneankur@email.com",
    },
];

export default function SocialLinks() {
    return (
        <div className="flex gap-6 items-center justify-center">
            {socials.map((social) => (
                <Link
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={social.name}
                >
                    <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
                    <social.icon className="relative w-6 h-6 text-muted group-hover:text-foreground transition-colors duration-300" />
                </Link>
            ))}
        </div>
    );
}
