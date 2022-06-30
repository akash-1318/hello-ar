import "./setting.css";
import { Header, Sidebar, Table } from "../../components/compExporter";

function Setting() {
  return (
    <>
      <Header />
      <main className="main__conatiner">
        <Sidebar />
        <section className="main__section">
          <button className="add__user-btn">ADD USER</button>
          <div className="content__table">
              <Table/>
          </div>
        </section>
      </main>
    </>
  );
}

export { Setting };
