import Header from "@/components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">sas{children}</main>
    </>
  );
};

export default DashboardLayout;
