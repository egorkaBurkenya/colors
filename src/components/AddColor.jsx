import React, {useState} from 'react';

const AddColor = ({addNewColor}) => {

    const [value, setValue] = useState('')

    const addColor = (e) => {
        e.preventDefault()
        if (value[0] != '#') {
            setValue('Wrong💔')
            return
        }
        addNewColor(value)
        setValue('')
    }

    return (
        <form style={{border: '1px solid #c3c3c3', margin: '10px', padding: '10px'}}>
            <h4>add new color</h4>
            <input type="text" placeholder="color" className="add-color" value={value} onChange={e => setValue(e.target.value)}/>
            <button className="btn-add-color" onClick={e => addColor(e)}>Push</button>
        </form>
    );
};

export default AddColor;