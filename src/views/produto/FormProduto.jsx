import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto () {

    const [titulo, setTitulo] = useState();
    const [codigoProduto, setCodigoProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntrega, setTempoEntrega] = useState();
    const [tempoMaximo, setTempoMaximo] = useState();
 
    function salvar() {

		let produtoRequest = {
		     titulo: titulo,
		     codigoProduto: codigoProduto,
		     descricao: descricao,
             valorUnitario: valorUnitario,
		     tempoEntrega: tempoEntrega,
		     tempoMaximo: tempoMaximo
		}
	
		axios.post("http://localhost:8082/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Cliente cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um cliente.')
		})
	}

    return (

        <div>
            <MenuSistema tela={'Produto'} />
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>


                            <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    width={10}
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                    >
                                    <InputMask
                                        placeholder="Informe o titulo do produto"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    maxLength="100"
                                    width={6}
                                    value={codigoProduto}
                                    onChange={e => setCodigoProduto(e.target.value)}
                                    >
                                    <InputMask
                                        placeholder="Informe o código do produto"
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                label='Descrição do Produto'
                                width={16}
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                                >
                                <TextArea 
                                placeholder='Informe a descrição do produto' 
                                />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={8}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                    >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Minimo em Minutos'
                                    width={8}
                                    value={tempoEntrega}
                                    onChange={e => setTempoEntrega(e.target.value)}
                                    >
                                    <InputMask 
                                        placeholder="30"

                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={8}
                                    value={tempoMaximo}
                                    onChange={e => setTempoMaximo(e.target.value)}
                                    >
                                    <InputMask 
                                        placeholder="40"

                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
