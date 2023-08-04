var friends = ['sabah', 'saihan', 'salam', 'mim', 'sinthy', 'samawa', 'shathy', 'ehan', 'mehjabin']
function largestNameSelection(friends) {
    for (let i = 0; i < friends.length; i++) {
        var largestName = '';
        var friend = friends[i];
        if (friend.length > largestName.length) {
            largestName = friend;
        }
    }
    return largestName; 
}
console.log(largestNameSelection(friends));