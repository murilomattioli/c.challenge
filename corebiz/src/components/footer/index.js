import React, { useState } from 'react';
import Button from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset } from '@fortawesome/free-solid-svg-icons';
import logoWhite from '../../assets/images/logo-w.svg';
import vtex from '../../assets/images/vtex-w.svg';


export default function Footer() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    async function news(e) {
        e.preventDefault();
        let dados = {
            nome: nome,
            email: email,
        }

        if (dados.nome != "" && dados.nome.length > 3 && dados.email != "" && dados.email.length > 5) {
            global.postman.postNewsLetter(dados).then(res => {
                setNome('');
                setEmail('');
                alert('Sucesso!\nVocê se cadastrou para receber as notícias.');
                console.log("sucesso", res);
            }).catch(err => {
                console.log("erro", err);
                alert('Erro!\nFalha no sistema...\nConfira os campos e tente novamente!');
            })
        }
        else {
            alert('Por favor\npreencha os campos corretamente.');
        }

    }

    return (
        <div className="f1">
            <div className="bgc-grey-light f1 pv20 content">
                <span className="fw-bold fs-big mb16 f1 tcenter">Participe de nossas news com promoções e novidades!</span>
                <form className="f1">
                    <div className="row mb36">
                        <div className="mr8 f1">
                            <input
                                placeholder="Digite seu nome"
                                type="text"
                                className="f1 pl16 pr16 pt12 pb12 fw-regular bRad8 bnone"
                                style={{ ...{ height: 48, verticalAlign: 'center' } }}
                                value={nome}
                                onChange={value => setNome(value.target.value)}
                            />
                        </div>
                        <div className="mr8 f1">
                            <input
                                placeholder="Digite seu email"
                                type="email"
                                className="f1 pl16 pr16 pt12 pb12 fw-regular bRad8 bnone"
                                style={{ ...{ height: 48, verticalAlign: 'center' } }}
                                value={email}
                                onChange={value => setEmail(value.target.value)}

                            />
                        </div>
                        <div className="fhalf">
                            <Button text="Eu quero!" onClick={news} size={48} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="f1 row bgc-black content tc-white pv20">
                <div className="f1 mr16">
                    <div className="fw-bold fs-big mb4">Localização</div>
                    <span className="bgc-white bRad16 ovfHidden mb20" style={{ height: 4, width: 40 }} />
                    <div className="f1 fs-regular">
                        <span>Rua Ifigênia Maria de Oliveira 3793</span>
                        <span>Jd. Piratininga - 14403-583</span>
                        <span>Franca SP, Brasil</span>
                        <span>contato@clickqi.com.br</span>
                        <span>+55 16 3713-6985</span>
                    </div>
                </div>
                <div className="f1 mr16">
                    <div className="jAround f1">
                        <Button
                            text="ENTRE EM CONTATO"
                            iconLeft={<FontAwesomeIcon icon={faEnvelope} className="tc-black fs-big" />}
                            containerStyle=" p0"
                            backgroundColor="bgc-white"
                            textStyle="tc-black fw-semibold tleft"
                            maxWidth={250}
                        />
                        <Button
                            text={`FALE COM O NOSSO${'\n'}CONSULTOR ONLINE`}
                            iconLeft={<FontAwesomeIcon icon={faHeadset} className="tc-black fs-big" />}
                            backgroundColor="bgc-white"
                            textStyle="tc-black fw-semibold tleft"
                            maxWidth={250}
                        />
                    </div>
                </div>
                <div className="f1 row jEnd ai-center">
                    <div className="mr24" style={{ height: 100 }}>
                        <span className="mb8">Created By</span>
                        <img src={logoWhite} alt="Logo-White" width={80} />
                    </div>
                    <div className="" style={{ height: 100 }}>
                        <span className="mb8">Created By</span>
                        <img src={vtex} alt="Logo-White" width={80} />
                    </div>
                </div>
            </div>
        </div>
    );
}
