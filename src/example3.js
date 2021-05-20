import React, { useState, useEffect } from 'react';

export const Example3 = () => {
  const [obj] = useState({ friend: { name: '小明', id: 2 } });


  return (
    <li>
      {FriendListItem(obj)}
    </li>
  );
}

function useFriendStatus (friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange (status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    handleStatusChange({ isOnline: true })

    return () => {
      handleStatusChange({ isOnline: false })
      // ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

// function FriendStatus (props) {
//   const isOnline = useFriendStatus(props.friend.id);

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }
function FriendListItem (props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}