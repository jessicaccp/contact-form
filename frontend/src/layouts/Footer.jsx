const Footer = ({ content }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-fit ml-auto text-xs mt-[0.5rem] mb-[-0.5rem]">
        <p>
          <a
            href="https://jessicaccp.github.io/"
            target="_blank"
            rel="norefereer"
          >
            Jessica Patricio
          </a>{" "}
          {"\u00A9"} {currentYear}
        </p>
      </footer>
    </>
  );
};

export default Footer;
