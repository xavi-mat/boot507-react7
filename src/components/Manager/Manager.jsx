import { Typography } from "antd";
import { useContext } from "react";
import { UserContext } from '../../context/UserContext/UserState';
import ManagerList from './ManagerList/ManagerList';
const { Title } = Typography;

function Manager() {

  const { user } = useContext(UserContext);

  if (!(["admin", "manager"].includes(user?.role))) {
    return (
      <div style={{ margin: "1rem 2rem" }}>
        <Title>Manager</Title>
        <h2>Unauthorized</h2>
        <h3>Not enough permissions to access this page.</h3>
      </div>
    )
  } else {
    return (
      <div style={{ margin: "1rem 2rem" }}>
        <Title>Manager</Title>
        <ManagerList />
      </div>
    )
  }
}

export default Manager