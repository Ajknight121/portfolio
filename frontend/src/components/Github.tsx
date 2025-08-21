import { FaGithub } from "react-icons/fa";
export default function Github({link}: {link:string}) {
  return (
    <a className="icon-link-small" href={link}>
      <FaGithub />
    </a>
  );
}
