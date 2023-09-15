import Button from "./button/Button";
import Profile from "./profile/Profile";
import Search from "./search/Search";

export default function Navbar() {
  return (
    <div className="navbarContainer">
        <Search />
        <Button />
        <Profile />
    </div>
  )
}
