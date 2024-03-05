import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormField, Radio } from 'semantic-ui-react';

const estadosOptions = [
    { key: 'ac', value: 'ac', text: 'Acre' },
    { key: 'al', value: 'al', text: 'Alagoas' },
    { key: 'ap', value: 'ap', text: 'Amapá' },
    { key: 'am', value: 'am', text: 'Amazonas' },
    { key: 'ba', value: 'ba', text: 'Bahia' },
    { key: 'ce', value: 'ad', text: 'Ceara' },
    { key: 'df', value: 'df', text: 'Distrito Federal' },
    { key: 'es', value: 'es', text: 'Espírito Santo' },
    { key: 'go', value: 'go', text: 'Goiás' },
    { key: 'ma', value: 'ma', text: 'Maranhão' },
    { key: 'mt', value: 'mt', text: 'Mato Grosso' },
    { key: 'ms', value: 'ms', text: 'Mato Grosso do Sul' },
    { key: 'mg', value: 'mg', text: 'Minas Gerais' },
    { key: 'pa', value: 'pa', text: 'Pará' },
    { key: 'pb', value: 'pb', text: 'Paraiba' },
    { key: 'pr', value: 'pr', text: 'Paraná' },
    { key: 'pe', value: 'pe', text: 'Pernambuco' },
    { key: 'pi', value: 'pi', text: 'Piauí' },
    { key: 'rj', value: 'rj', text: 'Rio de Janeiro' },
    { key: 'rn', value: 'rn', text: 'Rio Grande do Norte' },
    { key: 'rr', value: 'rr', text: 'Rondônia' },
    { key: 'sc', value: 'sc', text: 'Santa Catarina' },
    { key: 'sp', value: 'sp', text: 'São Paulo' },
    { key: 'se', value: 'se', text: 'Sergipe' },
    { key: 'to', value: 'to', text: 'Tocantins' },
]


export default function FormEntregador () {


    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    width={16}
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    width={10}
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    width={10}
                                    label='RG'
                                    maxLength="100"
                                />

                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Input
                                    width={3}
                                    fluid
                                    label='DT Nascimento'>
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    width={4}
                                    required
                                    fluid
                                    label='Fone Celular'>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    width={4}
                                    fluid
                                    label='Fone Fixo'>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    width={3}
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    maxLength="100"
                                >
                                </Form.Input>

                                <Form.Input
                                    width={3}
                                    fluid
                                    label='Valor Por Frete'
                                    maxLength="100"
                                >
                                </Form.Input>


                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                width={14}
                                fluid
                                label='Rua'
                                maxLength="100"
                                >
                                </Form.Input>
                                <Form.Input
                                width={3}
                                fluid
                                label='Número'
                                maxLength="100"
                                >
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                width={14}
                                fluid
                                label='Bairro'
                                maxLength="100"
                                >
                                </Form.Input>
                                <Form.Input
                                width={6}
                                fluid
                                label='Cidade'
                                maxLength="100"
                                >
                                </Form.Input>
                                <Form.Input
                                width={3}
                                fluid
                                label='CEP'
                                maxLength="100"
                                >
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Select
                                width={16}
                                label='UF'
                                Select placeholder='Selecione' options={estadosOptions}
                                >
                                </Form.Select>

                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                width={16}
                                label='Complemento'
                                maxLength="100"
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                            <Form.Field label= 'Ativo:'>
                            </Form.Field>
                            <Form.Radio
                            label='Sim'
                            name='radioGruop'>
                            </Form.Radio>
                            <Form.Radio
                            label='Não'
                            name='radioGruop'
                            >
                            </Form.Radio>
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
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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
