import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
  const handleUserChatClick = () => {
    if (window.innerWidth <= 480) {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'none';
    }
  };

  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats onUserChatClick={handleUserChatClick} />
    </div>
  );
};

export default Sidebar;
