import { useEffect, ChangeEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";

import { Container } from "./styles";

import Theme from "../../components/Theme";

const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === "") {
            history.push("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        };
    }, []);

    const handleNextStep = () => {
        if (state.email !== "" && state.github) {
            console.log(state);
        } else {
            alert("Preencha os Dados!")
        };
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    };

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    };

    return (
        <Theme>
            <Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com os seus contatos para conseguirmos entrar em contato.</p>
                
                <hr />

                <label>
                    Qual seu E-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link className="backButton" to="/step2">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </Container>
        </Theme>
    );
};

export default FormStep3;