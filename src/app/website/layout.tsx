import Navbar from "@/components/navbar";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Navbar />
      </nav>
      {children}
    </div>
  );
};
export default WebsiteLayout;
