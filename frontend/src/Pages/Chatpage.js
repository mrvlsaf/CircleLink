import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { ScreenType } from "../helper/ScreenType";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user, selectedChat } = ChatState();
  const isMobile = ScreenType();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent=" space-between" w="100%" h="91.5vh" p={3}>
        {user ? (
          isMobile ? (
            !selectedChat ? <MyChats fetchAgain={fetchAgain} /> : null
          ) : <MyChats fetchAgain={fetchAgain} />
        ) : null}

        {user ? (
          isMobile ? (
            selectedChat ? <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> : null
          ) : <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        ) : null}
      </Box>
    </div>
  );
};

export default Chatpage;
