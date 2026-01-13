// Rules related to user and user actions
const { USER_STATUS } = require("../config/constants");

module.exports = {
  // One user cannot be related to more than one organization
  SAME_ORGANIZATION: ({ user }) => {
    if (!user) return false;

    return user.organization_id === user.id;
  },

  // A user cannot inactive themselves
  CANNOT_DEACTIVATE_USER: ({ user }) => {
    if (!user) return false;

    return user.status !== USER_STATUS.INACTIVE;
  },

  // A user must be active to receive resources
  IS_ACTIVE: ({ user }) => {
    if (!user) return false;

    return user.status === USER_STATUS.ACTIVE;
  }
};
