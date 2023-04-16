import { PrettyChatWindow } from "react-chat-engine-pretty";



const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    <div style={{ height: "5vh", width: "100vw" }}>
        <a href="http://localhost:3000/">
          <button style={{ height: "5vh", width: "100vw", background: "black",color: "white", cursor: "pointer" }}>log out</button>
        </a>
    </div>
      <PrettyChatWindow
        projectId="1cbb617b-dd2a-40e2-ad28-6e130e4f335e"
        username={props.user.username} // Disal_Prabhath
        secret={props.user.secret} // disal123
        style={{ height: "100%" }}
      />

    </div>
  );
};

export default ChatsPage;
