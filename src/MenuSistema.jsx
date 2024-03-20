import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function MenuSistema (props) {

   return(
       <>
           <Menu inverted>
              
               <Menu.Item
                   name='home'
                   active={props.tela === 'Home'}
                   as={Link}
                   to='/'
               />

               <Menu.Item
                   name='cliente'
                   active={props.tela === 'Cliente'}
                   as={Link}
                   to='/form-cliente'
               />
               <Menu.Item
                   name='produto'
                   active={props.tela === 'Produto'}
                   as={Link}
                   to='/form-produto'
               />

               <Menu.Item
                   name='entregador'
                   active={props.tela === 'Entregador'}
                   as={Link}
                   to='/form-entregador'
               />

           </Menu>
       </>
   )
}
