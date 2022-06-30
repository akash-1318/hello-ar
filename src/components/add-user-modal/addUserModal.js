import "./addUserModal.css";

function AddUserModal() {
  return (
    <>
      <div className="modal__container">
        <div className="modal">
          <div className="modal__left">
            <i class="bx bx-user-plus"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              venenatis ligula eu quam sagittis, ultrices viverra mi dictum. In
              rutrum orci mi, et congue enim placerat vel. Sed luctus, enim in
              posuere lobortis, neque nunc imperdiet tellus, quis accumsan
              mauris justo eu leo.
            </p>
          </div>
          <div className="modal__right">
            <p className="primary__text">User Information</p>
            <div className="credential__fields">
              <div className="email__field">
                <label>Email Id of User</label>
                <input type="text" />
              </div>
              <div className="password__field">
                <label>Role</label>
                <select name="role" id="roles" className="cselect">
                  <option value="volvo">Admin</option>
                  <option value="saab">Owner</option>
                  <option value="mercedes">Seller</option>
                </select>
              </div>
              <div className="modal__cta">
                  <button className="modal__cta-btn cancel">Cancel</button>
                  <button className="modal__cta-btn add">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { AddUserModal };
