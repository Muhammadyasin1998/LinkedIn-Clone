import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
function Feed() {
//   const [posts, setPosts] = React.useState([]);
// sendPost = (e) => {
//   e.preventDefault();
//   setPosts([...posts, { name: "John Doe", description: "This is a test", message: "Wow this worked" }]);
// };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      {/* {posts.map((post) => (
        <Post
          name={post.name}
          description={post.description}
          message={post.message}
          photoUrl={post.photoUrl}
        />
      ))} */}
      <Post
        name="John Doe"
        description="This is a test"
        message="Wow this worked"
      />
      <Post
        name="John Doe"
        description="This is a test"
        message="Wow this worked"
      />
      <Post
        name="John Doe"
        description="This is a test"
        message="Wow this worked"
      />
      <Post
        name="John Doe"
        description="This is a test"
        message="Wow this worked"
      />
      <Post
        name="John Doe"
        description="This is a test"
        message="Wow this worked"
      />
      <Post
        name="John Doe"
        description="This is a test"
        message="Wow this worked"
      />
      <Post
        name="John Doe"
        description="This is a test"
        message="Wow this worked"
      />
    </div>
  );
}

export default Feed;
