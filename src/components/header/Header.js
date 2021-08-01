import { TextField, MenuItem } from '@material-ui/core'
import React from 'react'
import Categories from '../../data/Categories'
import './header.css'

const Header = ({ category, setcategory,word,setword }) => {

    const handleChange = (e)=>{
    setcategory(e.target.value);
    setword("");
    }
    return (
        <div className='header'>
            <div className='title'>{word ? word : 'Lexicon'}</div><p style={{color:'black',fontWeight:'bold'}}>your word Hunter !!😄</p>
            <div className='inputs'>
                <TextField id='standard-basic' label='Search a word' value={word} onChange={(e)=> setword(e.target.value)} className='search'/>
                <TextField

                    select
                    label="Language"
                    value={category}
                    onChange={(e) => handleChange(e)}

                    helperText="Please select language"
                    className='select'
                >

                    {
                        Categories.map((options) => (

                            <MenuItem key={options.label} value={options.label}>
                                {options.value}
                            </MenuItem>
                        ))}




                </TextField>

            </div>
        </div>
    )
}

export default Header
