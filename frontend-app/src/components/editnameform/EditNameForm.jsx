import './editnameform.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/userAction';

function EditNameForm({ onCancel }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
const token = useSelector((state) => state.user.token);
  const [userName, setUserName] = useState(user.userName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userName,token));
    onCancel(); 
  };

  return (
    <form className="edit-name-form" onSubmit={handleSubmit}>
      <h2>Edit user info</h2>

      <div className="input-group">
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          id="firstname"
          value={user.firstName}
          disabled
        />
      </div>

      <div className="input-group">
        <label htmlFor="lastname">Last name:</label>
        <input
          type="text"
          id="lastname"
          value={user.lastName}
          disabled
        />
      </div>

      <div className="button-group">
        <button type="submit" className="save-button">Save</button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditNameForm;
