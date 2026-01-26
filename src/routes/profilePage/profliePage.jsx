import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import './profilePage.scss';

function ProfilePage(){
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/34036276/pexels-photo-34036276.jpeg"
                alt=""
              />
            </span>
            <span>Username: <b>Jon Doe</b></span>
            <span>Email: <b>JonDoe@mail.com</b></span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );

}

export default ProfilePage;