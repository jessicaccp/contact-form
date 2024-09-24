const Header = ({ title, subtitle }) => {
  return (
    <>
      <header className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <small className="text-lg">{subtitle}</small>
      </header>
    </>
  );
};

export default Header;
