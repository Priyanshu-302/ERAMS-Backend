// Rules related to resource and resource access
const { RESOURCE_STATUS } = require("../config/constants");

module.exports = {
  // Resource owner can edit the resource when the status is draft
  CAN_EDIT_RESOURCE: ({ user, resource }) => {
    if (!user || !resource) return false;

    return (
      resource.owner_id === user.id && resource.status === RESOURCE_STATUS.DRAFT
    );
  },

  // Anyone in the organization can view organization's resources
  CAN_VIEW_RESOURCE: ({ user, resource }) => {
    if (!user || !resource) return false;

    return (
      user.organization_id === resource.organization_id &&
      resource.status === RESOURCE_STATUS.PUBLISHED
    );
  },

  // Manager can view organization's resources within business hours
  CAN_VIEW_RESOURCE_BUSINESS_HOURS: ({user}) => {
    if (!user) return false;

    const hours = new Date().getHours();
    return hours >= 9 && hours <= 18;
  }
};
