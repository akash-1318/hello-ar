import "./setting.css";
import { useEffect, useState } from "react";
import {
  Header,
  Sidebar,
  Table,
  AddUserModal,
} from "../../components/compExporter";
import { usePrimaryStatesContext } from "../../context/context";

function Setting() {
  const { state, dispatch } = usePrimaryStatesContext();
  const { modal, userData } = state;

  let userDatabase = JSON.parse(localStorage.getItem("userData")) || [];

  useEffect(() => {
    dispatch({ type: "ADD_LOCAL_DATA", payload: userDatabase });
  }, []);

  return (
    <>
      <Header />
      <main className="main__conatiner">
        <Sidebar />
        <section className="main__section">
          <button
            className="add__user-btn"
            onClick={() => dispatch({ type: "SET_MODAL", payload: !modal })}
          >
            ADD USER
          </button>
          <div className="content__table">
            {userData.length > 0 ? (
              <>
                <table class="styled__table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User</th>
                      <th>Last Signed In</th>
                      <th>Role</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((user, index) => {
                      return <Table user={user} key={index} index={index} />;
                    })}
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <div className="no__data-container">
                  <p>No User data added!</p>
                </div>
              </>
            )}
          </div>
          {modal && <AddUserModal />}
        </section>
      </main>
    </>
  );
}

export { Setting };
