import PropTypes from "prop-types";
import { NotificationTitle } from './Notification.styled';

const Notification = ({message}) => ( 
    <NotificationTitle>{message}</NotificationTitle>
)

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;