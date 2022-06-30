import "./table.css";
import { usePrimaryStatesContext } from "../../context/context";

function Table({ user, index }) {
  const { dispatch } = usePrimaryStatesContext();

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.username}</td>
      <td>1 hour</td>
      <td>{user.role}</td>
      <td>
        <i
          class="bx bx-trash"
          onClick={() => {
            dispatch({ type: "DELETE_USER", payload: index });
          }}
        ></i>
      </td>
    </tr>
  );
}

export { Table };
