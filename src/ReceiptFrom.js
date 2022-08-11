import React, { useState } from 'react'
import './form.css'

function ReceiptFrom() {
    const [Date, setDate] = useState();
    const [Amount, setAmount] = useState();
    const [Value, setValue] = useState('cash')
    const [Remark, setRemark] = useState();
    const [items, setItems] = useState([])


    const formsumbit = (e) => {
        e.preventDefault()
        const store = { Date, Amount, Value, Remark }
        setItems((ls) => [...ls, store])
        setDate('')
        setAmount('')
        setValue('cash')
        setRemark('')
        console.log(store)
    }

    return (
        <div className='receipt'>
            <h4 style={{ textDecoration: 'underline' }}>Receipt Details</h4>
            <form onSubmit={formsumbit}>
                <div className='receipt-form'>
                    <div style={{ width: '25%' }}>
                        <label htmlFor='date' className='required'>Date</label>

                    </div>
                    <input type='text'
                        placeholder='Enter Date'
                        value={Date}
                        onChange={(e) => setDate(e.target.value)}
                        className='input-form'
                        style={{ width: '130px' }}

                    />
                </div>
                <div className='receipt-form'>
                    <div style={{ width: '25%' }}>
                        <label htmlFor='amount' className='required'>Amount</label>
                    </div>
                    <input type='text'
                        placeholder='Enter Amount (in INR)'
                        value={Amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className='input-form'
                        style={{ width: '450px' }}
                    />
                </div>
                <div className='receipt-form'>
                    <div style={{ width: '25%' }}>
                        <label htmlFor='paymentmode' className='required'>Payment Mode</label>
                    </div>
                    <select name='payment'
                        value={Value}
                        onChange={(e) => setValue(e.target.value)}
                        className='input-form'
                        style={{ width: '270px' }}
                    >
                        <option value='cash'>Cash</option>
                        <option value='paytm'>Paytm</option>
                    </select>
                </div>
                <div className='receipt-form' >
                    <div style={{ width: '25%' }}>
                        <label htmlFor='remark'>Remark</label></div>
                    <input type='text'
                        placeholder='Enter remark'
                        value={Remark}
                        onChange={(e) => setRemark(e.target.value)}
                        className='input-form'
                        style={{ width: '450px' }}
                    />
                </div>
                <div className='button'>
                    <button className='cancel-btn'>CANCEL</button>
                    <button type='sumbit' className='sumbit-btn'>SUMBIT</button>
                </div>
            </form>


            {items.map((item) => {
                return (
                    <div className='receipt-detail'>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}
                        >

                            <tr>
                                <td><h5>Date</h5></td>
                                <td><h5>Amount</h5></td>
                                <td><h5>Value</h5></td>
                                <td><h5>Remark</h5></td>

                            </tr>
                            <tr>
                                <td>{item.Date}</td>
                                <td>{item.Amount}</td>
                                <td>{item.Value}</td>
                                <td>{item.Remark}</td>

                            </tr>
                        </table>
                    </div>
                )
            })}

        </div >
    )
}

export default ReceiptFrom;