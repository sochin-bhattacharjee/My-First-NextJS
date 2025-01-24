import PrivateRoute from "../components/PrivateRoute";

function Profile() {
  return (
    <PrivateRoute>
      <h1 className="text-3xl text-center mt-5">Welcome to your profile!</h1>
    </PrivateRoute>
  );
}
export default Profile;
