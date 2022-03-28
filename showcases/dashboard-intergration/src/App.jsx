import "./app.scss";
import MainLayout from "./components/Layout/MainLayout.jsx";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  );
}

export default App;
