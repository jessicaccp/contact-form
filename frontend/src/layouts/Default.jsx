import Menu from "./Menu";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Default = ({
  menu = null,
  headerTitle = null,
  headerSubtitle = null,
  main = null,
  footer = null,
}) => {
  return (
    <div className="w-dvw min-w-[350px] h-dvh bg-gradient-to-r from-violet-200 to-pink-200 p-4 flex flex-col">
      <Menu content={menu} />
      <div className="container max-w-[600px] min-h-[600px] flex flex-col gap-4 m-auto">
        {(headerTitle || headerSubtitle) && (
          <Header title={headerTitle} subtitle={headerSubtitle} />
        )}
        {main && <Main content={main} />}
      </div>
      <Footer content={footer} />
    </div>
  );
};

export default Default;
