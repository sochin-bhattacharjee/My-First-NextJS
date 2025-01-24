import PrivateRoute from "../components/PrivateRoute";

function Profile() {
  return (
    <PrivateRoute>
      <h1>Welcome to your profile!</h1>
      <p>This is your secure profile page.</p>
    </PrivateRoute>
  );
}
export default Profile;
