interface Props {
  onClickHome: () => void;
  onClickProjects: () => void;
  onClickAbout: () => void;
  onClickResume: () => void;
}

const navbar = ({
  onClickHome,
  onClickProjects,
  onClickAbout,
  onClickResume,
}: Props) => {
  return (
    <nav className="navbar font-mono text-blue-900 font-bold">
      <div className="container-fluid">
        <img className="w-15 h-12" src="/Logo.png"></img>
        <div>
          <ul className="nav">
            <li className="nav-item mr-7">
              <a className="nav-link" onClick={onClickHome} href="#">
                Home
              </a>
            </li>
            <li className="nav-item mr-7">
              <a className="nav-link" onClick={onClickProjects} href="#">
                Projects
              </a>
            </li>
            <li className="nav-item mr-7">
              <a className="nav-link" onClick={onClickAbout} href="#">
                About
              </a>
            </li>
            <li className="nav-item mr-7">
              <a className="nav-link" onClick={onClickResume} href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
