import { Link } from "react-router-dom";
import Avatar from "@/components/core/avatar";
import Container from "@/components/core/container";

export default function Header() {
  return (
    <header className="ghp-header">
      <Container>
        <div className="ghp-header__content">
          <Link to="" className="ghp-header__logo">
            Gitpro.hub
          </Link>
          <Avatar.AvatarRoot>
            <Avatar.AvatarFallback>SJ</Avatar.AvatarFallback>
            <Avatar.AvatarImage></Avatar.AvatarImage>
          </Avatar.AvatarRoot>
        </div>
      </Container>
    </header>
  );
}
