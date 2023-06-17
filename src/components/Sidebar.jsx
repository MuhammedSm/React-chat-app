import React, { useEffect } from 'react';
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

  useEffect(() => {
    const showNotification = () => {
      if (window.innerWidth <= 480) {
        const notification = document.createElement('div');
        notification.classList.add('popup-notification');
        notification.innerText = 'Not compatible with small devices please switch to Desktop or Tablet';

        document.body.appendChild(notification);

        setTimeout(() => {
          document.body.removeChild(notification);
        }, 3000);
      }
    };

    showNotification();

    // Add resize event listener to show/hide notification dynamically
    window.addEventListener('resize', showNotification);

    return () => {
      window.removeEventListener('resize', showNotification);
    };
  }, []);

  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats onUserChatClick={handleUserChatClick} />
    </div>
  );
};

export default Sidebar;
