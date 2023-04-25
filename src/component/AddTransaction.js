import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransactions } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text: text,
            amount: +amount
        }
        addTransactions(newTransaction);
    }
    return ( <
        >
        <
        h3 > Add new transaction < /h3> <
        form onSubmit = { onSubmit } >
        <
        div className = "form-control" >
        <
        label htmlFor = 'text' > Text < /label> <
        input type = "text"
        value = { text }
        onChange = {
            (e) => setText(e.target.value) }
        placeholder = 'Enter text .....' / >
        <
        /div> <
        div className = "form-control" >
        <
        label htmlFor = "amount" > Amount < br / > (negative - expense, positive - income) < /label> <
        input type = "number"
        value = { amount }
        onChange = {
            (e) => setAmount(e.target.value) }
        placeholder = 'Enter amount...' / >
        <
        /div> <
        div className = "btn"
        onClick = { onSubmit } > Add transaction < /div> <
        /form>  <
        />
    )
}

export default AddTransaction