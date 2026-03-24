// MainLayout.jsx
import Sidebar from '../Sidebar/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main
        id="scroll-container"   // ← ADD THIS
        className="flex-1 ml-2 md:ml-32 overflow-y-auto"
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
