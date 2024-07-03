import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const social = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/amirali-motahari-252a651a7",
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    url: "https://github.com/AmiraliMotahari",
    icon: <FaSquareGithub />,
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap flex-center gap-3 sm:flex-nowrap sm:justify-between items-center py-8 px-6 bg-neutral-950">
      <div className="text-center">Copyright &copy; Amirali Motahari</div>
      <ul className="flex-center gap-x-2">
        {social.map((elem) => (
          <li
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            key={elem.name}
          >
            <a href={elem.url}>{elem.icon}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
