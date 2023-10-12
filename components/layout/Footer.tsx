import { gitIcon, xIcon } from "@/public/sgv";
function Footer() {
  return (
    <footer className="text-md flex items-center justify-around bg-orange-300  py-4 italic text-orange-800">
      <p>&copy;Built with NextJS </p>
      <div className="flex flex-col gap-1">
        <a href="https://github.com/shepherdali" target="_blank">
          {gitIcon}
        </a>
        <a href="https://twitter.com/" target="_blank">
          {xIcon}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
