import React from 'react';

import { fireEvent, render, waitFor } from '@testing-library/react';

import Todo from './Todo';

describe('Teste para Todo Componente', ()=>{
    it('Deve aidiconar uma nova tarefa quando for submetido', async ()=>{
        //renderizar o componente
        const { getByTestId, getByText }=render(<Todo/>)
        
        //buscar  o input
        const fieldNode = await waitFor( 
            () => getByTestId('form-field') 
        )
        const newTask='testing'

        //digitar no input
        fireEvent.change(fieldNode,{
            target:{value:newTask}
        })    

        expect(fieldNode.value).toEqual(newTask)

        //buscar o botao
        const btnNode=await waitFor(
            () => getByTestId('form-btn')
        )

        //clicar no botao
        fireEvent.click(btnNode)
        
        //buscar a tabela
        const tdNode = await waitFor(
            () => getByText(newTask)
        )      
       expect(tdNode).toBeDefined()


    })
})