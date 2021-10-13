import { Link } from "react-router-dom"
import { Container, Info, Title, Description, IconArea, Point } from "./styles";
import { ReactComponent as ProfileIcon } from "../../pages/svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../pages/svgs/book.svg";
import { ReactComponent as MailIcon } from "../../pages/svgs/mail.svg";

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
};

const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <Container>
            <Link to={path}>
                <Info>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Info>
                <IconArea active={active}>
                    {icon === "profile" && <ProfileIcon fill="white" width="24px" height="24px" />}
                    {icon === "book" && <BookIcon fill="white" width="24px" height="24px" />}
                    {icon === "mail" && <MailIcon fill="white" width="24px" height="24px" />}
                </IconArea>
                <Point active={active}>

                </Point>
            </Link>
        </Container>
    );
};

export default SidebarItem;