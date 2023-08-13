import github from "../assets/github-mark-white.svg";

function Footer() {
  return (
    <footer>
      Copyright © 2023 tommy128works
      <a target="_blank" href="https://github.com/tommy128works/CV-Application">
        <img src={github} alt="github icon" id="footer-icon"></img>
      </a>
    </footer>
  );
}

export default Footer;
