import Default from "../layouts/Default";

const Admin = () => {
  const headerTitle = <>Admin Panel</>;
  const headerSubtitle = <>Forms administration</>;
  const mainContent = <></>;

  return (
    <>
      <Default
        headerTitle={headerTitle}
        headerSubtitle={headerSubtitle}
        main={mainContent}
      />
    </>
  );
};

export default Admin;
