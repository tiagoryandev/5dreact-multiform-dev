import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";

import { Container } from "./styles";

import Theme from "../../components/Theme";
import SelectOption from "../../components/SelectOption";

const FormStep1 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === "") {
            history.push("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        };
    }, []);

    const handleNextStep = () => {
        if (state.name !== "") {
            history.push("/step3");
        } else {
            alert("Preencha os Dados!")
        };
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    };

    return (
        <Theme>
            <Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente.</p>
                
                <hr />

                <SelectOption
                    title="Sou Iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou Programador"
                    description="Já programo a 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className="backButton" to="/">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    );
};

export default FormStep1;