import "./addUserModal.css";
import {usePrimaryStatesContext} from "../../context/context"
import { useState } from "react";
import { toast } from "react-toastify";

function AddUserModal() {
  const { state, dispatch } = usePrimaryStatesContext();
  const {modal} = state;
  const [userInfo, setUserInfo] = useState({
      role : "Admin",
      username : "",
      lastSignedIn : null
  })

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
                <input type="text" onChange={(e)=> setUserInfo({...userInfo, username : e.target.value})} />
              </div>
              <div className="password__field">
                <label>Role</label>
                <select name="role" id="roles" onChange={(e) => setUserInfo({...userInfo, role : e.target.value})}>
                  <option value="Admin">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>
              <div className="modal__cta">
                  <button className="modal__cta-btn cancel" onClick={() => dispatch({type : "SET_MODAL", payload : !modal})}>Cancel</button>
                  <button className="modal__cta-btn add" onClick={()=>{
                      if(userInfo.username){
                        dispatch({type : "ADD_USER", payload : userInfo})
                        toast.success("New user added")
                      }
                  }}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { AddUserModal };
