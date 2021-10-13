import { ReactNode } from "react";

import { GlobalStyles, Container, Area, Steps, Sidebar, Page } from "./styles";

import Header from "../Header";
import SidebarItem from "../SidebarItem";

import { useForm } from "../../contexts/FormContext";

type Props = {
    children: ReactNode;
};

const Theme = ({ children }: Props) => {
    const { state } = useForm();
    
    return (
        <>
            <Container>
                <Area>
                    <Header />

                    <Steps>
                        <Sidebar>
                            <SidebarItem 
                                title="Pessoal"
                                description="Se identifique"
                                icon="profile"
                                path="/"
                                active={state.currentStep === 1}
                            />

                            <SidebarItem 
                                title="Profissional"
                                description="Se nível"
                                icon="book"
                                path="/step2"
                                active={state.currentStep === 2}
                            />

                            <SidebarItem 
                                title="Contatos"
                                description="Como te achar"
                                icon="mail"
                                path="/step3"
                                active={state.currentStep === 3}
                            />
                        </Sidebar>
                        <Page>
                            {children}
                        </Page>
                    </Steps>
                </Area>
            </Container>
            <GlobalStyles />
        </>
    );
};

export default Theme;