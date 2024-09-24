import Menu from "./Menu";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Default = ({
  menu = null,
  header = null,
  main = null,
  footer = null,
}) => {
  return (
    <div className="w-dvw min-w-[350px] h-dvh bg-gradient-to-r from-violet-200 to-pink-200 p-4 flex flex-col">
      <Menu content={menu} />
      <div className="container max-w-[600px] flex flex-col gap-4 m-auto">
        {header && <Header content={header} />}
        {main ?? <Main content={main} />}
      </div>
      <Footer content={footer} />
    </div>
  );
};

export default Default;
