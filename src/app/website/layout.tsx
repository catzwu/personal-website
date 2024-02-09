import Navbar from "@/components/navbar";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center px-24">
      <nav>
        <Navbar />
      </nav>
      <div className="py-16">
        {children}
      </div>
    </div>
  );
};
export default WebsiteLayout;
