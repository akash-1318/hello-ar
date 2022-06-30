import "./table.css";

function Table() {
  return (
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
        <tr>
          <td>1</td>
          <td>Akash</td>
          <td>1 hour</td>
          <td>owner</td>
          <td>
            <i class="bx bx-trash"></i>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Akash</td>
          <td>1 hour</td>
          <td>owner</td>
          <td>
            <i class="bx bx-trash"></i>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Akash</td>
          <td>1 hour</td>
          <td>owner</td>
          <td>
            <i class="bx bx-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export { Table };
