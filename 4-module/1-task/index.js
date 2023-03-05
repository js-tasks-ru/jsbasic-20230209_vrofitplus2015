function makeFriendsList(friends) {
  let list = document.createElement('UL');

  
  for(let friend of friends) {
      
      let li = document.createElement('LI');
      list.appendChild(li);
      li.innerHTML = `${friend.firstName} ${friend.lastName}`;
  }

  return list
}
