// BEGIN
import _ from 'lodash';

export const getMutualFriends = (user1, user2) => {
  const user1Friends = user1.getFriends();
  const user2Friends = user2.getFriends();
  return _.intersectionBy(user1Friends, user2Friends, 'id');
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});