import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await sendMessage(downloadURL);
          });
        }
      );
    } else if (text !== "") {
      await sendMessage();
    }

    setText("");
    setImg(null);
  };

  const sendMessage = async (imageUrl) => {
    let messageData = {
      id: uuid(),
      text,
      senderId: currentUser.uid,
      date: Timestamp.now(),
    };

    if (imageUrl) {
      messageData.img = imageUrl;
    }

    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion(messageData),
    });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, uuid());

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      (error) => {
        //TODO:Handle Error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await sendMessage(downloadURL);
        });
      }
    );
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // enter key
      event.preventDefault(); // prevent form submit
      handleSend(); // send the message
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown} // add onKeyDown event listener
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={handleFileSelect} // invoke handleFileSelect on file select
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
