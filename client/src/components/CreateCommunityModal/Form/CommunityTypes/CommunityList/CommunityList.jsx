import { faUser, faEye, faLock } from "@fortawesome/free-solid-svg-icons";

export const CommunityList = [
  {
    icon: faUser,
    label: "Public",
    span: "Anyone can view,post,and comment to this community",
  },
  {
    icon: faEye,
    label: "Restricted",
    span: "Anyone can view this community, but only approved users can post",
  },
  {
    icon: faLock,
    label: "Private",
    span: "Only approved users can view submit to this community",
  },
];
